
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
당신은 전자책 '리베라프레미(Libera Premi)'의 전담 독서 가이드이자 지식 큐레이터입니다.
사용자가 전자책을 읽다가 궁금한 점이나 특정 내용을 찾고 싶을 때 도움을 주는 것이 당신의 목표입니다.

역할 지침:
1. 전자책의 핵심 가치(압도적 성과, 마인드셋, 퍼스널 브랜딩)를 기반으로 답변하세요.
2. 사용자가 "어디를 먼저 읽어야 할까요?"라고 물으면, 사용자의 상황(직장인, 취준생 등)에 맞춰 챕터를 추천하세요.
3. 답변은 지적이고 신뢰감 있는 톤으로 한국어로 작성하세요.
4. 모든 본문 내용은 노션 페이지(https://liberapremi.oopy.io/)에 있음을 안내하고, 필요한 경우 특정 챕터의 주제를 요약해 주세요.
`;

/**
 * Sends a message to the Gemini model and returns the text response.
 * Follows @google/genai guidelines for generateContent and response handling.
 */
export async function askGemini(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.6,
      },
    });
    // Use .text property directly instead of .text() method.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 독서 가이드가 잠시 자리를 비웠습니다. 곧 돌아오겠습니다.";
  }
}
