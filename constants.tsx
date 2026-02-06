
import React from 'react';

export interface Chapter {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

export const CHAPTERS: Chapter[] = [
  {
    id: "chapter1",
    title: "1. 입학사정관이 생기부를 판단하는 비결",
    icon: "😃",
    content: (
      <div className="space-y-6 text-slate-800 leading-relaxed">
        {/* 인트로 */}
        <p>안녕하세요. 리베라 입시 컨설팅입니다.</p>
        <p>해당 전자책에서는 실제 입학사정관이 생기부를 어떻게 판단하는지 알려드리려고 합니다.</p>
        <p>리베라 입시컨설팅은 실제 입학사정관 출신과 함께합니다.</p>

        {/* 섹션 1: 서류 평가 방식 */}
        <h3 className="text-2xl font-black mt-10 mb-4 text-slate-900 border-b-2 border-slate-100 pb-2">입학사정관의 서류 평가 방식</h3>
        <p>우선 아래 순위를 기억해주세요.</p>
        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 my-6">
          <ul className="space-y-2 font-bold text-blue-900">
            <li>ㄱ. 세특</li>
            <li>ㄴ. 동아리</li>
            <li>ㄷ. 행특</li>
            <li>ㄹ. 자율진로</li>
          </ul>
        </div>
        <p>이는 실제 입학사정관이 서류를 평가할 때의 기준입니다.</p>
        <p>입학사정관은 먼저 내신성적과 선택과목을 우선적으로 판단합니다.</p>
        <p>실제 고교학점제 역시 '선택과목'을 중심으로 설계된 전형이라고 보셔도 무방합니다.</p>

        {/* 내신등급 설명 */}
        <p className="font-bold text-slate-900 mt-8">쉽게 설명드리자면,</p>
        <p>내신등급은 지원 가능한 대학의 '라인'을 결정합니다.</p>
        <p>저희가 다수의 컨설턴트 및 실제 합격 데이터를 분석했을 때,</p>
        <p>학생부종합전형은 본인 내신 기준 <strong>±0.5~0.6</strong> 정도의 업다운이 발생할 수 있습니다.</p>
        <p>고교학점제를 중심으로 한 평가에서는 이 폭이 <strong>±0.2~0.3</strong> 수준으로 줄어듭니다.</p>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 my-6">
          <p className="font-bold text-slate-900 mb-2">예를 들어,</p>
          <p>본인의 내신이 2.5등급이라면</p>
          <p className="mt-2">학생부종합전형 기준으로는 상향으로는 약 1.9, 하향으로는 약 3.1 수준의 대학까지 지원 가능하다는 의미입니다.</p>
          <p className="mt-2">자사고·특목고를 제외하면,</p>
          <p>이 범위를 0.6 이상 넘어서는 경우는 실제로 매우 드뭅니다.</p>
        </div>

        <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 my-8">
          <p className="text-indigo-900 font-bold text-lg mb-3">즉, 내신등급은</p>
          <p className="text-indigo-800">"합격 여부"가 아니라</p>
          <p className="text-indigo-800 font-black text-xl mt-1">"어디까지 지원해볼 수 있는가"를 결정하는 지표입니다.</p>
        </div>

        <p>본인의 내신등급에서 ±0.6을 계산해보시면,</p>
        <p>학생부종합전형으로 현실적으로 검토해볼 수 있는 대학 리스트가 자연스럽게 나옵니다.</p>
        <p className="mt-4">그리고</p>
        <p className="font-bold text-slate-900">그 라인 안에서 합격을 가르는 요소가 바로 <span className="text-indigo-600">생활기록부</span>입니다.</p>

        {/* 섹션 2: 생활기록부 중요 항목 */}
        <h3 className="text-2xl font-black mt-12 mb-6 text-slate-900">생활기록부에서 실제로 중요하게 보는 항목</h3>
        <p>생활기록부 안에서도</p>
        <p>입학사정관이 중요하게 평가하는 항목에는 분명한 순서가 있습니다.</p>

        <div className="bg-slate-900 text-white p-8 rounded-3xl my-8">
          <ol className="space-y-4 font-black text-xl">
            <li className="flex items-center gap-4"><span className="text-indigo-400">1.</span> 세부능력특기사항</li>
            <li className="flex items-center gap-4"><span className="text-indigo-400">2.</span> 동아리활동</li>
            <li className="flex items-center gap-4"><span className="text-indigo-400">3.</span> 행동특성 및 종합의견</li>
            <li className="flex items-center gap-4"><span className="text-indigo-400">4.</span> 자율활동, 진로활동</li>
          </ol>
        </div>

        <p>실제로는</p>
        <p>자율활동·진로활동이 비교적 잘 작성된 경우가 많습니다.</p>
        <p>담임 선생님과의 라포 형성이</p>
        <p>교과 담당 선생님보다 수월한 경우가 많기 때문입니다.</p>
        <p className="mt-4">다만,</p>
        <p className="font-bold text-slate-900">가장 중요한 것은 단연 '세특'입니다.</p>
        <p>그래서 생활기록부를 관리할 때는</p>
        <p>모든 항목을 고르게 챙기기보다</p>
        <p className="font-bold text-indigo-600">중요한 항목부터 선택과 집중을 하는 전략이 필요합니다.</p>

        {/* 섹션 3: 실제 평가 방식 */}
        <h3 className="text-2xl font-black mt-12 mb-6 text-slate-900">실제 입학사정관은 생활기록부를 이렇게 평가합니다</h3>
        <p>먼저 한 가지 짚고 가셔야 할 점이 있습니다.</p>
        <p>입학사정관의 평가는 사람마다 다를 수 있습니다.</p>
        <p className="mt-4">실제로 고려대학교를 포함한 다수의 대학에서는</p>
        <p>입학사정관 A, B의 평가 점수 차이가 클 경우</p>
        <p>C, D 입학사정관이 추가로 평가를 진행해</p>
        <p>최종 점수를 평균화하는 구조를 가지고 있습니다.</p>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 my-6">
          <p className="text-slate-600">즉,</p>
          <p className="text-slate-600">아무리 기준표가 존재하더라도</p>
          <p className="font-bold text-slate-900 mt-1">생활기록부 평가는 결국 사람이 하는 평가라는 뜻입니다.</p>
          <p className="text-slate-600 mt-2">이 점 때문에</p>
          <p className="text-slate-600">입시가 어렵게 느껴지는 것도 사실입니다.</p>
        </div>

        <p>하지만,</p>
        <p>지나치게 걱정하실 필요는 없습니다.</p>
        <p>이후에 설명드릴 몇 가지 원칙만 지키셔도</p>
        <p>큰 방향에서 벗어나는 경우는 거의 없습니다.</p>

        <div className="bg-slate-900 text-white p-8 rounded-3xl my-8">
          <p className="text-slate-300 mb-2">여기서 반드시 알고 계셔야 할 핵심은 이것입니다.</p>
          <p className="text-2xl font-black text-white">입학사정관은 모든 생활기록부를 처음부터 끝까지 읽지 않습니다.</p>
        </div>

        <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-200 my-8 relative overflow-hidden">
          <p className="text-amber-800 leading-relaxed">여러분이 본인의 생활기록부를 다시 읽어보았을 때,</p>
          <p className="text-amber-800 leading-relaxed">"내가 이런 활동을 했었나?" 하고 기억이 잘 나지 않는 것처럼</p>
          <p className="text-amber-800 leading-relaxed">입학사정관 역시 모든 내용을 세세히 기억하지 않습니다.</p>
          <p className="text-amber-800 leading-relaxed font-bold mt-1">동일한 원리입니다.</p>
          <p className="mt-6 text-amber-800 leading-relaxed">만약 여러분이 세특을 읽었을 때</p>
          <p className="text-amber-800 leading-relaxed">"이 세특만 보고 이 학생의 역량을 평가할 수 있을까?"라는 의문이 든다면,</p>
          <p className="text-amber-800 leading-relaxed font-bold">그 세특은 평가 관점에서는 좋은 사례라고 보기 어렵습니다.</p>
          <p className="mt-4 text-amber-800 leading-relaxed">입학사정관은</p>
          <p className="text-amber-900 leading-relaxed font-black">'우수사례'만을 중심으로 읽습니다.</p>
          <p className="text-amber-800 leading-relaxed mt-2">학생의 역량을 판단할 수 없는 기록은</p>
          <p className="text-amber-800 leading-relaxed">깊게 읽지 않습니다.</p>
        </div>

        <p>중요한 점은,</p>
        <p>입학사정관은 단점을 찾기보다</p>
        <p className="font-bold text-slate-900">장점을 확인하는 방식으로 서류를 본다는 것입니다.</p>
        <p className="mt-4">그래서</p>
        <p>만약 생활기록부 안에 명확한 우수사례가 하나라도 존재한다면,</p>
        <p>그 사례 하나가</p>
        <p>전체 생활기록부의 인상을 결정짓는 경우도 충분히 발생합니다.</p>
        <p className="mt-4">수학 세특이 2~3줄에 불과해도</p>
        <p>의대·SKY 합격이 가능한 이유 역시</p>
        <p>이러한 평가 방식과 무관하지 않습니다.</p>

        <p className="mt-4">여러분이 생활기록부를 다시 읽어보시면 아시겠지만,</p>
        <p>모든 활동이 또렷하게 기억되지는 않습니다.</p>

        {/* 핵심 메시지 */}
        <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 my-8">
          <p className="text-indigo-900">결국 생활기록부의 본질은</p>
          <p className="text-indigo-900">모든 활동을 잘하는 것이 아니라,</p>
          <p className="text-indigo-900 font-black text-xl mt-1">일부 핵심 사례를 '제대로' 만드는 것입니다.</p>
          <p className="text-indigo-900 mt-4">생활기록부는</p>
          <p className="text-indigo-900"><strong>노력의 문제가 아니라 설계의 문제입니다.</strong></p>
          <p className="text-indigo-900 mt-4">같은 내신, 비슷한 활동을 가지고도</p>
          <p className="text-indigo-900">누군가는 합격하고</p>
          <p className="text-indigo-900">누군가는 탈락하는 이유는</p>
          <p className="text-indigo-900 font-bold">이 구조를 이해했는지의 차이에서 갈립니다.</p>
        </div>

        {/* CTA 체크리스트 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm my-8">
          <div className="space-y-3">
            <p className="flex items-start gap-3"><span className="text-indigo-600 font-bold mt-0.5">&#10003;</span> 내 생기부에서 사정관이 실제로 보게 될 우수사례는 무엇인지</p>
            <p className="flex items-start gap-3"><span className="text-indigo-600 font-bold mt-0.5">&#10003;</span> 지금 방향이 합격 가능한 구조인지</p>
            <p className="flex items-start gap-3"><span className="text-indigo-600 font-bold mt-0.5">&#10003;</span> 어디를 버리고, 어디에 집중해야 하는지</p>
          </div>
          <p className="mt-6 text-slate-600">혼자 판단하기 어렵다면,</p>
          <p className="font-bold text-slate-900">전문가의 시선으로 한 번 점검받는 것이 가장 빠른 방법입니다.</p>
        </div>

        {/* 다음 챕터 안내 */}
        <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white text-center">
          <p className="text-slate-400 mb-2">다음 페이지에서는</p>
          <p className="text-lg">어떻게 하면 설계를 잘 할 수 있는지</p>
          <p className="text-lg mb-4">어떤 세특이 전체 생기부를 결정시키는지 그 기준을 알려드리도록 하겠습니다.</p>
          <button data-navigate-to="chapter2" className="mt-4 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-lg transition-all hover:scale-105 cursor-pointer">
            다음: 2. 상위 1% 스토리 설계법 &rarr;
          </button>
        </div>
      </div>
    )
  },
  {
    id: "chapter2",
    title: "2. 상위 1% 스토리 설계법",
    icon: "🤣",
    content: (
      <div className="space-y-6 text-slate-800 leading-relaxed">
        {/* 인트로 */}
        <p>안녕하세요. 리베라 입시컨설팅입니다.</p>
        <p>이번 장에서는 상위 1% 생기부는 어떻게 스토리를 설계하는지 알려드리려고 합니다.</p>
        <p>수행평가에 어떤 소재로 탐구할 지,</p>
        <p>어떻게 생기부를 디자인 할 지 궁금하신 분들이 많으실 겁니다.</p>
        <p className="font-bold text-slate-900">이 항목에서 모두 정리해보세요.</p>

        {/* 생기부 평가 시간 */}
        <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 my-8">
          <p className="text-indigo-900">입학 사정관들은 짧은 시간 안에 엄청난 양의 생기부를 봅니다.</p>
          <p className="text-indigo-900">여러분의 생기부는 평균적으로 <strong>10분</strong> 동안 평가된다고 해요.</p>
          <p className="text-indigo-900 mt-4">여러분의 생기부를 스크린에 띄우고</p>
          <p className="text-indigo-900">입학 사정관들이 여러분의 이미지를 떠올리면서</p>
          <p className="text-indigo-900">평가하기 시작합니다.</p>
          <p className="text-indigo-900 mt-4">만약, 여러분의 생기부가 나열식이라서</p>
          <p className="text-indigo-900">입학사정관이 읽었을 때 무슨 말을 하는지 모르는 생기부라면</p>
          <p className="text-indigo-900 font-black">절대 좋은 평가를 받을 수 없습니다.</p>
        </div>

        {/* 비문학 비유 */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl my-8">
          <p className="text-slate-300 mb-2">입학사정관이 생기부를 읽는 것은</p>
          <p className="text-2xl font-black text-white mb-4">비문학 읽는 것과 비슷합니다.</p>
          <p className="text-slate-300">비문학을 읽어보신 적이 있을 겁니다.</p>
          <p className="text-slate-300 mt-2">각 문단마다 내용이 다르면</p>
          <p className="text-slate-300">글을 읽었을 때 글의 주제가 무엇인지 파악하기 힘듭니다.</p>
          <p className="text-slate-300 mt-2">하지만, 문단마다 유기적으로 글이 구성되어 있다면</p>
          <p className="text-slate-300">글의 주제를 제대로 파악할 수 있죠.</p>
          <p className="text-white font-bold mt-4">생기부도 마찬가지입니다.</p>
        </div>

        <p>우리는 입학 사정관들이 인간이라는 점을 생각해야 하고</p>
        <p>인간이 평가하기 때문에 생기부를 직접 읽을 수 밖에 없습니다.</p>
        <p className="mt-4">그래서, 유기적으로 생기부를 만들어</p>
        <p>입학 사정관들이 우리를 평가할 때</p>
        <p className="font-bold text-slate-900">쉽게 이미지를 떠올릴 수 있도록 만들어야 합니다.</p>
        <p className="mt-4">하지만, 대부분 학생들의 생기부는 유기적으로 연결되어 있지 않습니다.</p>
        <p>그래서, 스토리를 설정한다면 남들과는 다른</p>
        <p className="font-bold text-indigo-600">특색있는 생기부를 만드실 수 있습니다.</p>
        <p className="mt-2 text-slate-500">스토리 만드는 방법은 곧 설명하겠습니다.</p>

        {/* 항목 간 연계성 */}
        <p className="mt-8">또한, 입학사정관들은 <strong>'생기부 항목간의 연계성'</strong>을 매우 강조합니다.</p>

        <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-200 my-6">
          <p className="text-xs font-black text-amber-600 uppercase tracking-widest mb-4">(실제 서울 주요대학 입학사정관 발언)</p>
          <div className="space-y-4">
            <p className="text-amber-900 italic leading-relaxed">"학교생활기록부 전체 내용을 통해 각 평가요소와 더불어 각 평가항목 간의 유기적 관계에서 학생의 노력과 성장이 잘 드러나는지 살펴보고 평가"</p>
            <p className="text-amber-900 italic leading-relaxed">"항목을 단독평가하지 않고, 다른 항목과 유기적으로 결합하여 평가"</p>
            <p className="text-amber-900 italic leading-relaxed">"기재된 내용을 바탕으로 항목 간 연계를 통하여 종합적으로 평가"</p>
          </div>
        </div>

        <p>단순히 국어 세특만 보는 것이 아니라 자율활동, 동아리 활동들과 연관시켜서</p>
        <p>학생을 종합적으로 판단한다는 내용입니다.</p>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 my-6">
          <p className="font-bold text-slate-900 mb-2">예를 들어,</p>
          <p>국어 시간에 경제 분야인 재무제표에 대해서 탐구했다면</p>
          <p>이 탐구에 연계된 활동인 실제 기업 분석 및 투자를 동아리 활동에서 진행한다면</p>
          <p className="font-bold text-slate-900 mt-2">충분히 생기부 항목 간의 유기성을 강조할 수 있습니다.</p>
        </div>

        <p>이처럼 생기부를 유기적으로 만드는 것은 매우 중요합니다.</p>
        <p className="font-black text-indigo-600 text-lg">그 핵심은 바로 스토리에 있습니다.</p>
        <p className="mt-4">지금까지 글을 읽은 학생들은</p>
        <p>스토리에 대해 제대로 감이 잡히지는 않을 겁니다.</p>
        <p>당연한 거니까 너무 걱정하지 마세요.</p>
        <p className="font-bold text-slate-900 mt-2">이제 예시를 들어서 설명하겠습니다.</p>

        {/* Drone-city 스토리 예시 */}
        <h3 className="text-3xl font-black mt-16 mb-4 text-slate-900">리베라 입시 컨설팅의 컨설턴트</h3>
        <h3 className="text-3xl font-black mb-8 text-slate-900">'스토리'의 예시를 알려드리겠습니다.</h3>

        <p>앞서 말했듯이 입학 사정관들은 생기부를 읽으며 여러분들의 이미지를 떠올릴 것입니다.</p>
        <p>즉, 그 이미지가 해당 예시에서는 <strong>'Drone-city를 만들고자 하는 학생'</strong>이다 라는 생각이 드실 겁니다.</p>

        {/* 1. 최종 목표 설정 */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mt-8">
          <h4 className="text-xl font-black text-indigo-600 mb-4">1. 최종 목표를 설정하자.</h4>
          <p>생활기록부에서 가장 중요한 것은</p>
          <p className="font-black text-slate-900 text-lg my-2">'한 문장'으로 본인을 설명하는 것입니다.</p>
          <p className="mt-4">면접장에서 나는 drone-city를 실현화하고자 하는 학생이다고</p>
          <p>당당하게 말할 수 있어야 합니다.</p>
          <p className="mt-2">따라서, 이는 최종 목표가 설정되어야 합니다.</p>
          <p className="mt-4">단순히 '기계공학과 가고 싶어요'라는 뉘앙스가 생기부에 나타나면</p>
          <p>그 학생은 불합격할 수 밖에 없습니다.</p>
          <p className="mt-4">위 컨설턴트는 Drone-city 실현화를 스토리로 잡았고</p>
          <p>드론에 다양한 문제점을 해결하는 과정을 생기부에 녹였습니다.</p>
          <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <p className="text-indigo-800">Drone-city에 대해 간단히 설명하자면</p>
            <p className="text-indigo-800">드론이 떠다니는 미래 사회입니다.</p>
            <p className="text-indigo-800">영화에서나 나올 법한 도시를 생각하시면 됩니다.</p>
          </div>
        </section>

        {/* 2. 해결과제 세팅 */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mt-6">
          <h4 className="text-xl font-black text-indigo-600 mb-4">2. 해결과제를 세팅하자.</h4>
          <p>드론 시티를 실현화하기 위해서 해결해야 할 과제들을 설계합니다.</p>
          <p className="mt-4">드론이 날아다녀야 하니까 드론 항로에 대한 공부를 시작했고</p>
          <p>장거리 비행이 불가능하니 드론 충전시스템을 공부하기 시작했습니다.</p>
          <p className="mt-2">또한, 새와 충돌을 피하기 위한 자동회피시스템을 공부하고</p>
          <p>기존의 도시와 다른 새로운 법규 등을 공부했죠.</p>
          <p className="mt-2">드론으로 인해 소음이 심각할 수 있으니 무소음 드론을 연구했고</p>
          <p>드론을 어떻게 관리할 것인지를 생각하며 usim칩을 탑재한 드론을 탐구했습니다.</p>
          <p className="mt-4">이렇게 드론시티를 실현화하기 위한 과제들을 공부했습니다.</p>
          <p>이를 다양한 논문, 책, 강의 등을 참고해서 탐구를 진행했죠.</p>
          <p className="mt-4">이렇게 Drone-city를 실현화하기 위한 해결책을 공부했고</p>
          <p>이 과정이 수학 세특, 국어 세특, 영어 세특, 진로활동 등</p>
          <p>생기부 다양한 항목에 기재되었습니다.</p>
        </section>

        <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 my-8">
          <p className="text-indigo-900">제 생기부를 평가자 입장에서 본다면 <strong>유기적으로 읽히는 생기부</strong>가 됩니다.</p>
          <p className="text-indigo-900 mt-2">다양한 항목에서 드론 시티 실현화를 위한 과제 탐구가 진행되고 있기 때문입니다.</p>
          <p className="text-indigo-900 font-black text-lg mt-4">즉, 생기부가 한 방향으로 나아가고 있죠.</p>
          <p className="text-indigo-900 mt-2">그래서, 유기적이고 특색 있는 생기부를 만들 수 있었습니다.</p>
        </div>

        {/* 실제 생기부 예시 */}
        <h3 className="text-2xl font-black mt-12 mb-4 text-slate-900">실제로 제 생기부 예시를 공개하겠습니다.</h3>
        <p className="mb-6 text-slate-600">읽어보면서 유기적으로 읽히는지 판단해보시기 바랍니다</p>

        <div className="space-y-4">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <p className="font-black text-indigo-700 mb-3 text-lg">고급 물리학</p>
            <p className="text-sm leading-relaxed">비오-사바르 법칙을 주제로 맡아 ppt를 작성하여 어려운 상수를 구체적으로 설명하고 의의를 설명하는 모습이 보기 좋음. 문제로 예를 들어 풀면서 설명하여 학생들의 이해도를 높임. 스텔스 makser 기술에 대해 조사하다 임피던스 개념을 이해하지 못해 교류시 리액터, 커패시터, 저항의 경향을 이해하고 이를 토대로 임피던스 개념을 도입하고 임피던스를 구하는 식을 구하는 과정에서 벡터 계산에 관련된 개념이 부족하여 이를 질문하여 답을 듣고 자신이 연구하던 OTDOA 측정을 실제값을 바탕으로 계산하여 칭찬을 듣고 뿌듯해함. 추와 속도 측량 장치를 이용하여 실제 퍼텐셜 에너지를 계산하는 실험을 하고 에너지 보존 법칙을 사용하여 공기, 열의 에너지를 계산하고 정리하여 보고서를 작성함. 실험 중 추가 떨어지며 충돌하는 모습을 보고 드론의 공간 분할에 대해 의문이 생겨 논문 'Smart city stystem and space partiton for drone flight'을 읽고 수직,수평,회전 공간에서 TLS 수치와 민감도를 통한 비행가능 조건을 학습하고 스마트시티와 블록체인 또한 PPT로 만들어 발표함.</p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <p className="font-black text-indigo-700 mb-3 text-lg">동아리 활동</p>
            <p className="text-sm leading-relaxed">동아리 장으로서 드론 택배 실용성을 팀원들과 드론의 한계, 실현가능성에 대해 토의하고 논문 'LTE네트워크 기반 드론의 최적경로에 관한 연구'를 함께 읽고 드론에 LTE모뎀 및 USIM칩을 탑재하고 원거리에서도 자율주행할 수 있음을 발표함. 이후 스타링크 프로젝트의 실현 후 운행의 변화된 모습을 팀원들과 토의함. 측위 측정방식 중 OTDOA의 원리를 이해하고 최단경로를 찾는 다익스트라 알고리즘의 원리에 대해 인터넷 강의를 듣고 행렬에 대해 조사하여 예제를 가지고 설명함. 최단 경로를 찾더라도 충전시스템이 필요하다는 것을 깨닫고 'LTE 기반의 다중 드론 통신 시스템에 관한 연구'를 읽고 추가적으로 조사함. 드론을 이용하여 학교를 촬영하여 이를 학교에서 채택함.</p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <p className="font-black text-indigo-700 mb-3 text-lg">물리학I</p>
            <p className="text-sm leading-relaxed">힘의 평형을 배우고 발표 주제로 자신의 관심사인 비행기에 작용하는 힘의 평형조건을 조사하고 돌림힘에 대한 개념과 무게중심에 대한 사례를 추가 조사하여 '로봇의 이족보행을 위한 조건과 걸음 경로 계획'을 발표하고 보고서로 제출함. 특수 상대성 이론을 배우고 일반 상대성 원리와 그 사례를 심화적으로 조사하여 팀원들과 토의하고 열역학에서 엔트로피 설명이 부족하다고 생각하여 통계적인 측면에서 엔트로피에 대해 조사하고 '겹침수 증가 함수는 델타함수 형태와 비슷하다'에서 델타함수가 궁금하여 수학 선생님께 질문하고 열역학적 평형상태의 조건을 발표함. 유도 전류를 통한 무선 충전 원리를 공부하고 스스로 드론의 배터리 문제 해결방안으로 논문 '무선전력전송을 이용한 드론충전시스템에 관한 연구'를 읽고, 무선전력전송 시스템 중 안테나와 배터리 충전부를 이해하는데 어려움을 느끼고 선생님께 질문하여 이를 이해하고자 하는 노력이 보이고 이를 ppt를 작성하여 발표함. 추가로 '전자기학 입문'을 읽을 정도로 열정이 높음. 자신의 목표를 실현하고자 노력하는 모습이 돋보임. 이해가 부족한 친구들을 위해 추가적으로 내용을 게시판에 부착하여 질문에 친절하게 답변하는 모습을 관찰함.</p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <p className="font-black text-indigo-700 mb-3 text-lg">교육학</p>
            <p className="text-sm leading-relaxed">수업시간에 교육과 자아실현에 대해 배우고 드론을 완벽히 상용화하는 것이 자아실현이고 따라서 아이디어 노트를 작성하고 여러 사람들과 토의를 통해 최고의 아이디어를 도출하는 노력을 하고 있다고 발표함. '변화하는 사회에 교육은 어떻게 대처해야 할까?'를 토의함. 끊임없이 변화하는 사회에 적응하기 위해서는 새로운 기술을 빠르게 습득하는 능력을 배양해야 하고 정보를 빠르게 받는 방법에 대해 구체적으로 공부하고 평생 학습을 통해 스스로의 역량을 강화하는 것이 가장 중요하다고 생각함. 또한 인공지능이 할 수 없는 영역인 창의력과 공감능력을 최대화하기 위해서 말하기 수업을 진행하고 사고력 시험은 유지하자는 주장을 함. 관심사 가르치기 활동에서는 자신의 관심분야인 drone-city에 대해 교육함. 특히 드론의 공간 분할, lte를 통해 드론의 연결망을 구축, 드론충전시스템, 무소음 드론, 드론 법규의 변화 등을 설명하고 자신의 구체적인 진로 계획을 소개하며 팀원들의 진로 계획도 경청하는 자세를 보임. 아직 자신의 진로를 정하지 못한 팀원에게 스스로 찾도록 격려하는 방식과 팀원의 긍정적인 면을 칭찬하면서 팀원들과 함께 꿈을 찾아나가는 모습이 리더로서 역량이 충분하다고 생각함.</p>
          </div>
        </div>

        <p className="mt-8 font-bold text-slate-900 text-lg">어떤가요?</p>
        <p>스토리, 즉 주제를 해결하기 위한 과정이 다양한 항목에 등장합니다.</p>
        <p className="mt-2">이처럼 큰 주제인 'Drone-city 실현화'를 해결하기 위한 과정들이</p>
        <p>다양한 항목에 기재되고 있습니다.</p>
        <p className="mt-2">평가자들이 이런 생기부를 읽는다면 유기적으로 연결되어 기억에 잘 남을 것입니다.</p>

        {/* 합격 사례 1: 국민대 */}
        <div className="mt-12 p-8 bg-white rounded-3xl border-2 border-indigo-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-black rounded-full uppercase tracking-widest">합격 사례</span>
            <p className="font-black text-slate-900 text-lg">수학 5등급으로 국민대를 합격한 학생의 실제 예시입니다</p>
          </div>
          <p className="font-bold text-indigo-600 mb-4">메인 스토리: "대기환경 개선이 가능한 신소재 개발"</p>
          <p className="mb-3 text-slate-600">그에 따른 해결과제는 아래와 같습니다.</p>
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm"><strong className="text-indigo-600">환경</strong> - 급식소에서 튀김요리 조리시와 비조리시의 휘발성유기화합물 발생량을 비교분석하는 탐구를 진행</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm"><strong className="text-indigo-600">영독작</strong> - 수특 지문과 휘발성유기화합물을 연계하여 추가조사</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm"><strong className="text-indigo-600">실용수학</strong> - mofs의 기공크기와 흡착력간의 상관관계를 수학적으로 분석하는 프로젝트</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm"><strong className="text-indigo-600">화법과 작문</strong> - 흡착신소재인 제올라이트와 mofs를 적절히 융합해 사용하자는 설득적 말하기 발표</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-900 font-bold text-sm">실제 학생의 후기입니다.</p>
            <p className="text-amber-800 text-sm mt-1">생활기록부 저와 같이 형성하고 이를 생기부에 잘 녹인 모습입니다.</p>
            <p className="text-amber-800 text-sm mt-1">가장 중요한 점은 특히나 <strong>면접에서 매우 강하다</strong>는 것입니다.</p>
            <p className="text-amber-800 text-sm mt-1">스토리가 있기 때문에</p>
            <p className="text-amber-800 text-sm">답변을 준비하는 것과</p>
            <p className="text-amber-800 text-sm font-bold">컨셉이 확실하다는 것이 가장 큰 장점입니다.</p>
          </div>
        </div>

        {/* 합격 사례 2: 공주대 */}
        <div className="mt-6 p-8 bg-white rounded-3xl border-2 border-green-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-black rounded-full uppercase tracking-widest">합격 사례</span>
            <p className="font-black text-slate-900 text-lg">3.98의 내신등급으로 공주대 지리교육과(3.1)을 합격한 수강생의 사례입니다.</p>
          </div>
          <p className="font-bold text-indigo-600 mb-4">메인스토리: 국제 지구온난화 문제를 연구하는 교육자</p>
          <div className="space-y-2">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm"><strong className="text-slate-900">1.</strong> 러시아-우크라이나 전쟁 지구온난화</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm"><strong className="text-slate-900">2.</strong> 지구 온난화로 야기된 세계적 분쟁</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm"><strong className="text-slate-900">3.</strong> 도시 열섬 현상 비교 분석</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm"><strong className="text-slate-900">4.</strong> 열을 낮추는 물길 설계</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm"><strong className="text-slate-900">5.</strong> 지구온난화의 원인과 해결</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-600">실제로, 이는 면접 및 생활기록부 평가에서 매우 좋은 결과를 얻었다는 점을 강조하고 있습니다.</p>
          <p className="font-black text-slate-900 mt-2">스토리 형성은 매우 중요합니다.</p>
        </div>

        {/* 스토리 구성 핵심 비결 */}
        <h3 className="text-3xl font-black mt-16 mb-6 text-slate-900">스토리 구성 핵심 비결</h3>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 my-6">
          <p className="text-slate-600 italic">"이 학과 가고 싶은데 지금 스토리가 너무 안 맞는 것 같아요"</p>
          <p className="text-slate-600 mt-2">저희가 컨설팅하면 무조건 이런 질문을 받습니다.</p>
        </div>

        <p>입학사정관들은 여러분들이 어떠한 소재로 공부했는지 별 관심이 없습니다.</p>
        <p>어려운 키워드로 공부를 하든, 쉬운 교과 개념을 쓰든 딱히 큰 관심은 없습니다.</p>
        <p className="font-bold text-slate-900 mt-2">우선 이 부분을 기억해주세요.</p>

        <p className="mt-6">스토리 구성할 때는 <strong>3가지</strong> 정도만 기억해주세요.</p>

        <div className="bg-slate-900 text-white p-8 rounded-3xl my-8">
          <ol className="space-y-4 font-black text-xl">
            <li className="flex items-center gap-4"><span className="text-indigo-400">1.</span> 융합형 스토리</li>
            <li className="flex items-center gap-4"><span className="text-indigo-400">2.</span> 최종목표를 서술하자</li>
            <li className="flex items-center gap-4"><span className="text-indigo-400">3.</span> 심화버전으로 대학 연구</li>
          </ol>
        </div>

        {/* 비결 1: 융합형 스토리 */}
        <h3 className="text-2xl font-black mt-12 mb-4 text-slate-900">1. 융합형 스토리</h3>
        <p>첫번째는 융합형 스토리를 구축하라는 것입니다.</p>
        <p className="font-bold text-slate-900">사실 핵심적인 내용입니다.</p>
        <p className="mt-2">몇 가지 예시를 보여드리겠습니다.</p>

        {/* EX 1: DRONE-CITY */}
        <div className="mt-8 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">EX</p>
          <h4 className="text-xl font-black text-slate-900 mb-4">DRONE-CITY 실현화</h4>
          <div className="mb-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">최종 목표</p>
            <p className="text-slate-800">도시 하늘길을 활용해 음식, 택배, 응급물품 등을 드론이 자동으로 배송하는 미래 도시를 실현하는 기술자</p>
          </div>
          <div className="mb-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">해결 과제</p>
            <ol className="space-y-2 text-sm text-slate-700">
              <li>1. 드론끼리 충돌하지 않도록 공중 항로를 어떻게 설계할 것인가</li>
              <li>2. 무선 충전 등 배터리 문제는 어떻게 해결할 수 있을까</li>
              <li>3. 드론이 낙하하거나 고장 날 경우, 안전을 어떻게 확보할 것인가</li>
              <li>4. 비, 바람 등 날씨에도 안정적으로 날 수 있게 만들 수 있을까</li>
              <li>5. 영상 촬영 등으로 생길 수 있는 개인정보 문제는 어떻게 막을 것인가</li>
            </ol>
          </div>
          <p className="text-xs text-slate-500"><strong>관련 학과:</strong> 기계공학, 항공우주공학, 전기전자공학, 도시공학, 소프트웨어공학</p>
        </div>

        {/* EX 2: 우주 로봇 */}
        <div className="mt-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">EX</p>
          <h4 className="text-xl font-black text-slate-900 mb-4">우주 로봇 시스템 개발</h4>
          <div className="mb-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">최종 목표</p>
            <p className="text-slate-800">인간이 갈 수 없는 우주 환경에서도 탐사, 건설, 수리 작업이 가능한 우주용 로봇을 개발하는 항공우주 엔지니어</p>
          </div>
          <div className="mb-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">해결 과제</p>
            <ol className="space-y-2 text-sm text-slate-700">
              <li>1. 극한의 온도, 진공, 방사선 등 우주 환경에서 로봇이 어떻게 작동할 수 있을까</li>
              <li>2. 명령이 느리게 전달되는 상황에서 정확하게 조종할 수 있는 방법은 무엇인가</li>
              <li>3. 우주 먼지나 충격에도 잘 견디는 소재와 구조는 어떻게 설계해야 할까</li>
              <li>4. 로봇이 스스로 상황을 판단하고 작업을 이어가는 기술은 어떤 것인가</li>
              <li>5. 에너지를 절약하면서도 오래 작동할 수 있는 방법은 무엇인가</li>
            </ol>
          </div>
          <p className="text-xs text-slate-500"><strong>관련 학과:</strong> 항공우주공학, 기계공학, 전기전자공학, 로봇공학, 인공지능학, 신소재공학</p>
        </div>

        {/* EX 3: K-콘텐츠 */}
        <div className="mt-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">EX</p>
          <h4 className="text-xl font-black text-slate-900 mb-4">K-콘텐츠의 세계화 전략 설계</h4>
          <div className="mb-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">최종 목표</p>
            <p className="text-slate-800">한국 드라마, 영화, 음악 등 K-콘텐츠가 세계 시장에서 지속적으로 사랑받도록 문화 전략을 설계하는 글로벌 콘텐츠 기획자</p>
          </div>
          <div className="mb-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">해결 과제</p>
            <ol className="space-y-2 text-sm text-slate-700">
              <li>1. 나라별로 K-콘텐츠를 받아들이는 특징은 무엇인가</li>
              <li>2. 문화 차이를 넘어설 수 있는 보편성은 어떻게 만들까</li>
              <li>3. 자막, 더빙 등 번역 품질은 콘텐츠 확산에 어떤 영향을 주는가</li>
              <li>4. 저작권 보호는 어떻게 해야 할까</li>
              <li>5. OTT 플랫폼에서의 마케팅 전략은 어떻게 수립할까</li>
            </ol>
          </div>
          <p className="text-xs text-slate-500"><strong>관련 학과:</strong> 국제통상학, 문화콘텐츠학, 경영학, 광고홍보학, 한류문화학</p>
        </div>

        {/* EX 4: 기본소득 */}
        <div className="mt-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">EX</p>
          <h4 className="text-xl font-black text-slate-900 mb-4">기본소득 정책 설계와 평가</h4>
          <div className="mb-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">최종 목표</p>
            <p className="text-slate-800">청년과 저소득층이 안정적으로 생활할 수 있도록 기본소득 정책을 설계하고 효과를 분석하는 정책 설계자</p>
          </div>
          <div className="mb-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">해결 과제</p>
            <ol className="space-y-2 text-sm text-slate-700">
              <li>1. 기본소득의 재정은 어떻게 마련할 수 있을까</li>
              <li>2. 일할 의욕을 떨어뜨리지 않으려면 어떻게 설계해야 할까</li>
              <li>3. 기존 복지 제도와 충돌하지 않게 만들 수 있을까</li>
              <li>4. 지급 기준과 범위를 어떻게 설정해야 공정할까</li>
              <li>5. 실험적 사례는 실제로 어떤 성과를 보여주었는가</li>
            </ol>
          </div>
          <p className="text-xs text-slate-500"><strong>관련 학과:</strong> 경제학, 사회학, 행정학, 정치외교학, 정책학</p>
        </div>

        <p className="mt-8 font-bold text-slate-900 text-lg">눈치채셨나요?</p>
        <p className="font-bold text-indigo-600">스토리는 최대한 융합적으로 설정하시는게 좋습니다.</p>
        <p className="mt-4">2015 개정 교육과정 전은 전공적합성, 후는 <strong>계열적합성</strong>의 시대입니다.</p>
        <p className="font-black text-slate-900">이제는 통합형 인재입니다.</p>
        <p className="mt-4">실제로, 같은 계열 안에서 1,2학년 배우는 기초과목은 동일합니다.</p>
        <p>이후 그 기반으로 3,4학년 과목이 구성됩니다.</p>
        <p className="mt-4">따라서, 세심하게 스토리를 설정하지 마시기 바랍니다.</p>
        <p className="font-bold text-indigo-600">융합적으로 스토리를 설계하세요.</p>

        {/* 비결 2: 최종목표 */}
        <h3 className="text-2xl font-black mt-12 mb-4 text-slate-900">2. 최종목표를 서술하자</h3>
        <p>두번째는 최종목표입니다.</p>
        <p>위에 예시에서 봤듯이</p>
        <p>단순히 나는 항공우주에 관심이 있어서 항공우주공학부를 가야겠다라는 관점보다는</p>
        <p>실제로 본인의 최종목표를 서술하고 해당 목표를 이루기 위해</p>
        <p className="font-bold text-slate-900">대학을 거쳐간다라는 뉘앙스를 풍겨야합니다.</p>
        <p className="mt-2">특히, 이 부분은 면접에서 유리하게 작용합니다.</p>

        {/* 비결 3: 심화버전 대학 연구 */}
        <h3 className="text-2xl font-black mt-12 mb-4 text-slate-900">3. 심화버전으로 대학 연구</h3>
        <p>마지막 세번째는 각 대학 학과 사이트에 들어가서</p>
        <p>교수님이 어떠한 프로젝트를 진행하는지 판단하는 방법도 있습니다.</p>
        <p className="mt-2">해당 방법은 심화적으로 탐구할 소재가 없다면 참고해보면 좋습니다.</p>
        <p className="text-slate-500 mt-1">구체적인 사항은 구독형 설명회에서 소개하고 있습니다.</p>

        <p className="mt-8">이렇게 크게 3가지를 고려하셔서 스토리를 구성해보세요.</p>

        {/* 마무리 메시지 */}
        <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 my-8">
          <p className="text-indigo-900">그리고, 소재 한가지를 정했다면</p>
          <p className="text-indigo-900 font-black text-lg">의심하지 말고</p>
          <p className="text-indigo-900 font-black text-lg">논문, 책 한권이라도 제대로 읽으세요.</p>
          <p className="text-indigo-900 mt-4">지금까지 탐구를 하시면서 진심으로 머리에 지식을 넣으려고 하신 적이 있으신가요?</p>
          <p className="text-indigo-900 mt-4">신기하게, 진심으로 탐구를 진행하면</p>
          <p className="text-indigo-900">여러분들이 생각하는 소재 고민, 스토리 고민은 사라집니다.</p>
          <p className="text-indigo-900 mt-4">그러니, 너무 의심하지말고 우선 읽고 지식을 채우세요.</p>
          <p className="text-indigo-900 font-black text-xl mt-4">반드시, 생기부가 좋아질거라 확신합니다.</p>
        </div>

        {/* 다음 챕터 안내 */}
        <p>여기까지 읽으신 분들이라면</p>
        <p>아마 비슷한 생각이 드실 겁니다.</p>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm my-6">
          <div className="space-y-3">
            <p className="flex items-start gap-3"><span className="text-indigo-600 font-bold mt-0.5">?</span> 그럼 탐구는 어떻게 해야하지?</p>
            <p className="flex items-start gap-3"><span className="text-indigo-600 font-bold mt-0.5">?</span> 실제 수행평가는 어떤 수준으로 해야할까?</p>
          </div>
          <p className="mt-6 text-slate-600">이 중 하나라도 궁금하시다면,</p>
          <p className="font-bold text-slate-900">다음 글을 읽어보세요.</p>
        </div>

        <div className="mt-8 p-8 bg-slate-900 rounded-3xl text-white text-center">
          <p className="text-slate-400 mb-4">(상위 1% 탐구하는 비결)</p>
          <button data-navigate-to="chapter3" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-lg transition-all hover:scale-105 cursor-pointer">
            다음: 3. 상위 1% 탐구력 메커니즘 All in one &rarr;
          </button>
        </div>
      </div>
    )
  },
  {
    id: "chapter3",
    title: "3. 상위 1% 탐구력 메커니즘 All in one",
    icon: "🙃",
    content: (
      <div className="space-y-6 text-slate-800 leading-relaxed">
        {/* 인트로 */}
        <p>이제는 '탐구 깊이'에 대해 설명할 차례입니다.</p>
        <p>잠시 탐구와 활동의 차이점에 대해 설명할 필요가 있습니다.</p>
        <p className="font-bold text-slate-900">개념을 정확히 해야 이 파트를 이해하기 쉽습니다.</p>

        {/* 활동 vs 탐구 */}
        <h3 className="text-2xl font-black mt-10 mb-4 text-slate-900 border-b-2 border-slate-100 pb-2">활동과 탐구의 차이점</h3>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <p className="font-black text-slate-900 mb-3 text-lg">활동이란?</p>
            <p>웹사이트 제작하기, 부스 운영하기, 1년 장기 연구 프로젝트 등을 말합니다.</p>
          </div>
          <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-2xl">
            <p className="font-black text-indigo-900 mb-3 text-lg">탐구란?</p>
            <p className="text-indigo-800">웹사이트를 제작하기 위해 어떤 책, 논문을 읽었고</p>
            <p className="text-indigo-800">학생 스스로 활동을 위해 어떻게 공부했는지를 말합니다.</p>
          </div>
        </div>

        <p>drone-city를 만들기 위해 드론충전시스템, 드론공간분할에 대해서</p>
        <p>논문을 읽고 책을 읽는 것처럼 머리로 공부를 하는 행위도 마찬가지입니다.</p>

        <p className="mt-4">학생들은 활동을 많이 해야 좋은 대학에 간다고 생각합니다.</p>

        <div className="bg-slate-900 text-white p-8 rounded-3xl my-8">
          <p className="text-slate-300">사실, 대학에서는 활동보다 <strong className="text-white">탐구에 집중</strong>합니다.</p>
          <p className="text-slate-300 mt-2">학생이 얼마나 깊이 있게 스스로 공부할 수 있느냐를 보기 때문에</p>
          <p className="text-slate-300">활동도 물론 중요하지만 <span className="text-indigo-400 font-black">탐구가 훨씬 중요합니다.</span></p>
          <p className="text-slate-300 mt-4">앞서 말했지만 탐구력이 제일 중요하기 때문입니다.</p>
        </div>

        <p>간혹, 자사고, 특목고 학생들의 생기부를 보면</p>
        <p>활동은 매우 좋습니다.</p>
        <p className="mt-2">다만, 자신의 생활기록부는 잘 나온다고 착각하며</p>
        <p>탐구 과정을 구체적으로 기록하지 않는 생기부가 있습니다.</p>
        <p className="font-bold text-slate-900 mt-2">이런 생기부를 가진 학생들이 대체적으로 학종에서 많이 떨어집니다.</p>
        <p className="mt-4">활동과 탐구에 차이를 아셨나요?</p>
        <p className="font-bold text-slate-900">이제 본격적으로 탐구 깊이에 대해 설명하겠습니다.</p>

        {/* 학생부종합전형 3대 역량 */}
        <h3 className="text-2xl font-black mt-12 mb-6 text-slate-900">학생부종합전형의 3대 역량</h3>

        <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 my-8">
          <p className="text-indigo-900">해당 내용은 학생부종합전형의 3대 역량입니다.</p>
          <p className="text-indigo-900 mt-2">여기서 우리가 집중해야하는 것은</p>
          <p className="text-indigo-900 font-black text-2xl mt-1">'탐구력'입니다.</p>
          <p className="text-indigo-900 mt-4">실제 생활기록부에 기재되는 99%는 '탐구력'을 메인으로 합니다.</p>
          <p className="text-indigo-900 mt-2">학업역량, 진로 역량에서 2번이나 탐구력이 언급되고 있습니다.</p>
          <p className="text-indigo-900 mt-2">주변에서 '심화 탐구'라는 단어를 들어본 이유입니다.</p>
          <p className="text-indigo-600 font-bold mt-4 text-sm">실제 입학사정관의 발언입니다.</p>
        </div>

        {/* 탐구 깊이의 중요성 */}
        <p>앞서 Drone-city를 해결하는 스토리를 세웠다고 말했습니다.</p>
        <p>하지만, Drone-city 스토리만 만들고 논문, 독서, 강의 등을 통해</p>
        <p>공부를 하지 않았다면 절대 좋은 대학에 합격하지 못했을 겁니다.</p>
        <p className="mt-4">생기부 예시를 보시면 알겠지만 스토리 뿐만 아니라</p>
        <p className="font-bold text-slate-900">탐구의 깊이가 매우 좋은 편에 속합니다.</p>
        <p className="mt-4">수학 5등급 학생이 2.6의 국민대 공대를 합격할 수 있었던 것도</p>
        <p className="font-black text-indigo-600 text-lg">'탐구 깊이' 때문입니다.</p>

        <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-200 my-8">
          <p className="text-amber-900 font-bold text-lg">여러분의 생기부가 좋지 않은 이유는 탐구를 깊이 있게 진행하지 않기 때문입니다.</p>
          <p className="text-amber-800 mt-4">저는 여러분들이 생기부를 어떻게 챙기는 지 알고 있습니다.</p>
          <p className="text-amber-800 mt-2">여러분들이 수행평가 시간에</p>
          <p className="text-amber-800">생기부를 챙기기 위해서 진로와 연관된 탐구를 하기 위해 노력합니다.</p>
          <p className="text-amber-800 mt-4">예를 들어, 기계공학과를 희망하는 학생이라면</p>
          <p className="text-amber-800">네이버 혹은 gpt에 '기계공학 탐구', '기계공학과 주제' 등을 많이 검색했을 겁니다.</p>
          <p className="text-amber-800 mt-4">그리고, <strong>소재 찾는데 90%의 시간</strong>을 허비하고</p>
          <p className="text-amber-800">실제 점수로 환산되는 심화 탐구에는 <strong>10%시간만</strong> 씁니다.</p>
          <p className="text-amber-700 text-sm mt-2">(스토리를 반드시 설정해야 하는 이유입니다)</p>
        </div>

        <p>그래서, 여러분의 생기부가 뭔가 허전한 것입니다.</p>
        <p>겉으로 보기에는 어렵고 기계공학에 관련된 키워드가 있으니 좋은 생기부라 생각하겠지만</p>
        <p className="font-bold text-slate-900">평가자 입장에서 읽어보면 평가할 수 있는 부분이 없다는 것입니다.</p>
        <p className="mt-6 font-bold text-indigo-600 text-lg">그렇다면 탐구 깊이를 어떻게 해야 잘 챙길 수 있을까요?</p>

        {/* 깊이 있는 생기부 만드는 루틴 */}
        <h3 className="text-3xl font-black mt-16 mb-8 text-slate-900">깊이 있는 생기부 만드는 루틴</h3>

        {/* 루틴 1: 수업 시간 */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h4 className="text-xl font-black text-indigo-600 mb-4">1. 수업 시간에 탐구를 시작한다.</h4>
          <p>현재 AI로 인해 생기부 신뢰도가 매우 떨어지고 있는 상황입니다.</p>
          <p className="mt-2">대부분 학생들이 AI가 생성한 탐구의 수준이 어느정도인지 모르고 보고서를 제출하기 때문입니다.</p>
          <p className="mt-2">간혹, 대학교 3학년 이상의 공부를 3등급 학생이 하는 경우도 굉장히 많다는 거죠.</p>
          <p className="mt-4 font-bold text-slate-900">그래서, '수업 시간'에 근거하여 탐구를 진행하는 것이 가장 안전하고 좋은 방법입니다.</p>
        </section>

        {/* 루틴 2: 탐구의 구체적인 메커니즘 */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mt-6">
          <h4 className="text-xl font-black text-indigo-600 mb-4">2. 탐구의 구체적인 메커니즘</h4>
          <p>우선, 가장 이상적인 탐구의 과정을 보여드리겠습니다.</p>
          <p className="mt-2">탐구에는 크게 <strong>3가지 구성</strong>이 있습니다.</p>

          <div className="bg-slate-900 text-white p-6 rounded-2xl my-6">
            <ol className="space-y-3 font-black text-lg">
              <li className="flex items-center gap-4"><span className="text-indigo-400">1.</span> 탐구의 시작</li>
              <li className="flex items-center gap-4"><span className="text-indigo-400">2.</span> 탐구의 중간점</li>
              <li className="flex items-center gap-4"><span className="text-indigo-400">3.</span> 탐구의 마무리</li>
            </ol>
          </div>
        </section>

        {/* 탐구의 시작 */}
        <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2rem] mt-8">
          <h4 className="text-xl font-black text-slate-900 mb-4">1. 탐구의 시작</h4>
          <p>크게 2가지의 조건만 만족시키면 됩니다.</p>
          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 my-4">
            <ul className="space-y-2 font-bold text-blue-900">
              <li>ㄱ. 나의 호기심(진로)</li>
              <li>ㄴ. (세특이라면) 교과 개념과 연결</li>
            </ul>
          </div>
          <p>이 두가지만 지키시면 크게 문제가 없습니다.</p>
          <p className="mt-2">특히, 고교학점제에서 까다롭게 작용할 겁니다.</p>
          <p className="mt-4">간혹, 단순히 교과 개념만 탐구해야한다고 생각하시는 분이 계시는데 그렇지는 않습니다.</p>
          <p>잘 연계되는 개념이라면 충분히 엮을 수 있기 때문에 연계하시는 것을 추천드립니다.</p>
          <p className="font-bold text-slate-900 mt-2">물론, 과목의 본질을 잃어버리면 안됩니다.</p>
        </div>

        {/* 탐구의 중간점 */}
        <div className="p-8 bg-indigo-50 border border-indigo-200 rounded-[2rem] mt-6">
          <h4 className="text-xl font-black text-indigo-900 mb-4">2. 탐구의 중간점</h4>
          <p className="text-indigo-800">여기서 가장 보고 싶은 것은 간단합니다.</p>
          <p className="text-indigo-800">입학사정관이 가장 핵심적으로 보고 싶어하는 부분이기도 합니다.</p>
          <div className="bg-slate-900 text-white p-6 rounded-2xl my-6">
            <p className="text-2xl font-black text-center">탐구 과정에서 어려운 탐구를 어떻게 해결하는가?</p>
            <p className="text-center text-slate-400 mt-2">이게 전부입니다.</p>
          </div>
          <p className="text-indigo-800">GPT의 등장과 생활기록부에 대한 관심도, 기준이 높아지면서</p>
          <p className="text-indigo-800">어려운 키워드가 등장하는 생기부가 많습니다.</p>
          <p className="text-indigo-800 mt-2">그런데, 이런 생기부의 문제점은 어려운 키워드를 도대체 어떻게 이해했는지</p>
          <p className="text-indigo-800 font-bold">검증이 안된다는 겁니다.</p>
          <p className="text-indigo-800 mt-1">2년 사이에 매우 많아졌습니다.</p>

          <p className="text-indigo-800 mt-6">중간점을 잘 나타내기 위해서는 2가지 조건을 만족하시면 됩니다.</p>
          <div className="bg-white p-6 rounded-2xl border border-indigo-200 my-4">
            <ul className="space-y-2 font-bold text-indigo-900">
              <li>ㄱ. 실패한 이유가 타당한가</li>
              <li>ㄴ. 실패 후 해결과정에서 얼마나 노력했는가</li>
            </ul>
          </div>
          <p className="text-indigo-800">실패 후 어떻게 이를 극복했는지를</p>
          <p className="text-indigo-800">다양한 서적 탐독, 선생님께 질문 등으로 해결할 수 있겠죠?</p>
          <p className="text-indigo-900 font-bold mt-2">이런 내용이 잘 나타나면 매우 좋습니다.</p>
        </div>

        {/* 탐구의 마무리 */}
        <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2rem] mt-6">
          <h4 className="text-xl font-black text-slate-900 mb-4">3. 탐구의 마무리</h4>
          <p>탐구의 마무리에 대해 편견을 가지고 계시는 분들이 많습니다.</p>
          <p>뭔가 대단한 것이 있어야할 거라고 생각합니다.</p>
          <p className="mt-2">특히, 탐구의 결과물인 프로그램 개발 혹은 정책 제안하기, 실험하기 등을 토대로</p>
          <p>있어 보이는 결과물을 유도해야한다고 착각합니다.</p>
          <p className="font-bold text-slate-900 mt-4">크게 의미는 없습니다.</p>
          <p>솔직히, 입학사정관이 결과물에 대한 판단을 정확히 할 수도 없습니다.</p>

          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 my-6">
            <p className="text-amber-800">실제로, 저도 생기부를 읽어보았을 때</p>
            <p className="text-amber-800">약 예약 서비스를 웹 개발했다라는 문구가 있었습니다.</p>
            <p className="text-amber-800 mt-2">이 문구를 보자마자 생각난 것은</p>
            <p className="text-amber-900 font-bold">어떻게 했니?입니다.</p>
            <p className="text-amber-800 mt-2">그리고, 질문을 했더니</p>
            <p className="text-amber-800">그냥 AI로 만들었다고 합니다.</p>
            <p className="text-amber-800 mt-4">저는 이 분야에 지식이 있어 잘 알지만</p>
            <p className="text-amber-800">그냥 한 문장만 입력하면 만들어지긴 합니다.</p>
            <p className="text-amber-800 mt-4">그래서, 탐구의 과정이 생략이 되어 있고</p>
            <p className="text-amber-800">결과물이 그럴 듯하더라도</p>
            <p className="text-amber-900 font-bold">이제 잘 믿지 않습니다.</p>
          </div>

          <p className="font-bold text-indigo-600">마무리에 절대 집중하지 마시고,</p>
          <p>그냥 발표, 추가 탐구에 대한 포부 정도도 괜찮습니다.</p>
          <p>앞으로 심화된 내용을 탐구해보고 싶다고 해도 좋습니다.</p>
          <p className="font-black text-slate-900 mt-2">그 전 과정만 좋으면 됩니다.</p>
        </div>

        {/* 실제 우수사례 예시 */}
        <h3 className="text-2xl font-black mt-16 mb-4 text-slate-900">예시를 보여드릴게요.</h3>
        <p className="mb-8 text-slate-600">호기심(탐구의 시작), 탐구 중간점, 탐구 마무리를 잘 보면서 확인해보세요.</p>

        {/* 예시 1: 동아리 - 곰팡이 */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-4">
          <p className="font-black text-indigo-700 mb-3 text-lg">동아리</p>
          <p className="text-sm leading-relaxed">곰팡이로 인해 세탁 후에도 복원되지 않던 가방과 옷에 대한 문제의식에서 출발하여, 곰팡이균 제거에 효과적인 표백제를 탐색하고자 실험을 기획함. 스마트폰 표면의 세균을 배양하고, 염소계·비염소계 표백제, 천일염, 베이킹소다를 실험군으로 설정하여 대조군과의 콜로니 수를 비교함. 1차 실험에서 염소계 표백제가 가장 효과적일 것이라는 예측과 달리 낮은 억제력을 보여, 실험 설계의 문제를 분석하던 중 농도 기준 없이 원액을 사용한 점과 배양 조건 간 편차가 주요 오차 원인임을 발견함. 이에 기초 생물학 실험서와 미생물학 실험 매뉴얼을 참고해 용액의 희석 비율과 배양 환경을 재설정하고, pipette 오차를 줄이기 위해 digital micropipette를 도입함. '실험기구 사용 가이드'을 참고해 기기 사용법을 익히고, 세균 수 분석에는 ImageJ 프로그램을 활용하여 객관적 데이터를 수집함. 탐구 중 나타난 예측 실패를 단순한 오류로 넘기지 않고 원인을 문헌 기반으로 분석하고 실험 설계를 개선하는 등 과학적 탐구 태도를 보임. 이후 결과를 정리한 실험 보고서를 제출하고, 향후 천연물 기반 항균 소재의 지속적 탐색을 계획함.</p>
          <div className="mt-4 p-3 bg-indigo-100 rounded-xl">
            <p className="text-xs font-black text-indigo-700">호기심 &gt; 1차 탐구 &gt; 실패 &gt; 실패 극복 과정(2차 탐구) &gt; 추가 탐구(3차 탐구) &gt; 탐구의 마무리</p>
          </div>
        </div>

        {/* 예시 2: 사회문제탐구 */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-4">
          <p className="font-black text-indigo-700 mb-3 text-lg">사회문제탐구</p>
          <p className="text-sm leading-relaxed">플랫폼 기업의 수익구조가 단순 광고 외에도 어떻게 확장되는지에 호기심을 가지며, 기업별 수익모델 차이를 이해하고자 탐구를 시작함. 네이버, 쿠팡, 배달의민족의 사업보고서를 분석하며 매출 항목과 비즈니스 구조를 비교하였고, '비즈니스 모델의 탄생'을 참고하여 B2B·B2C 유형별 수익 창출 방식의 차이를 탐색함. 수익 구성 비율만 단순 비교한 탓에 기업 간 전략적 차별성이 드러나지 않았고, ARPU, CAC 등 재무용어의 의미를 제대로 해석하지 못해 분석이 중단되는 실패를 경험함. 이를 해결하기 위해 하버드 비즈니스 리뷰 관련 기사와 유튜브 강의를 참고하였으며, '스타트업 경영 보고서'를 추가로 탐독하여 재무용어와 전략 개념을 심화 이해함. 이후 고객 락인 전략, 전환비용, 구독 수익 안정성 등을 기준으로 분석을 확장함. 분석 결과를 보고서로 작성해 동아리 시간에 발표하고, 수익모델별 구조를 시각화한 도식으로 정리함. 향후 AI 플랫폼 기업의 수익모델 진화 방향에 대한 추후 탐구를 계획함.</p>
          <div className="mt-4 p-3 bg-indigo-100 rounded-xl">
            <p className="text-xs font-black text-indigo-700">호기심 &gt; 1차 탐구 &gt; 실패 &gt; 실패 극복 과정(2차 탐구) &gt; 추가 탐구(3차 탐구) &gt; 탐구의 마무리</p>
          </div>
        </div>

        {/* 예시 3: 물리1 */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-4">
          <p className="font-black text-indigo-700 mb-3 text-lg">물리1</p>
          <p className="text-sm leading-relaxed">자기 부상열차가 바퀴 없이도 공중에 떠서 움직이는 원리에 흥미를 느껴 탐구를 시작함. 먼저, 영구자석과 도선, 도선에 흐르는 전류로 발생하는 자기장 간 상호작용을 실험하며 기본 개념을 이해하고자 하였으나, 자석의 배열이나 전류의 방향에 따라 부상력이 제대로 발생하지 않는 문제가 생김. 이에 자기 부상 원리를 다룬 서적 '고등학생을 위한 자기력 실험'을 탐독하고, 도선 주변의 자기장 방향을 파악하기 위해 '오른손 법칙' 개념을 재정리함. 또한 물리 교사에게 자성체의 자기 이력 현상에 대해 질문하고, 인터넷 강의에서 마이스너 효과 관련 영상을 참고하여 초전도체의 완전 반자성 특성을 학습함. 이후 네오디뮴 자석과 강력한 도선을 사용해 간단한 자기 부상 모형을 재구성하고, 자기장 측정 앱으로 안정 구간을 시각화하여 자력 균형 조건을 확인함. 탐구 결과를 기반으로 자기 부상열차의 기술이 진동과 마찰을 줄여 고속 이동에 유리하다는 점을 보고서로 정리하고, 교내 과학 발표대회에서 시연함.</p>
          <div className="mt-4 p-3 bg-indigo-100 rounded-xl">
            <p className="text-xs font-black text-indigo-700">호기심 &gt; 1차 탐구 &gt; 실패 &gt; 실패 극복 과정(2차 탐구) &gt; 추가 탐구(3차 탐구) &gt; 추가 탐구(4차 탐구) &gt; 탐구의 마무리</p>
          </div>
        </div>

        {/* 예시 4: 정보 */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-4">
          <p className="font-black text-indigo-700 mb-3 text-lg">정보</p>
          <p className="text-sm leading-relaxed">유튜브에서 특정 영상이 갑자기 폭발적인 조회 수를 기록하는 현상에 의문을 갖고, 콘텐츠 확산에 작용하는 알고리즘의 구조를 탐구함. 먼저 인기 유튜브 영상들의 업로드 시간, 제목, 해시태그, 썸네일 등의 공통점을 수집하고 분석하였으나, 일부 영상은 규칙에 부합하지 않아 단순한 요소 비교로는 확산 원인을 설명하지 못함. 이에 알고리즘 작동 원리를 다룬 서적 '딥러닝과 알고리즘의 이해'를 탐독하고, 유튜브의 추천 시스템에 기반한 딥러닝 구조를 학습함. 또한 정보 교사에게 협조를 요청하여 협업 필터링, 콘텐츠 기반 필터링 차이를 배우고, 논문 '유튜브 추천 알고리즘의 사회적 영향 분석'을 통해 알고리즘이 사용자 행동 데이터를 어떻게 반영하는지 구체적으로 파악함. 이후 동일 주제의 영상이 추천 경로를 따라 확산되는 과정을 시각화하여 분석하고, 확산 속도에 영향을 미치는 요소(시청 지속 시간, 클릭률 등)를 분류함. 탐구 결과를 프레젠테이션으로 정리하여 학급 발표를 진행하고, 후속 탐구로 틱톡과 유튜브 쇼츠의 알고리즘 비교 계획을 수립함.</p>
          <div className="mt-4 p-3 bg-indigo-100 rounded-xl">
            <p className="text-xs font-black text-indigo-700">호기심 &gt; 1차 탐구 &gt; 실패 &gt; 실패 극복 과정(2차 탐구) &gt; 추가 탐구(3차 탐구) &gt; 추가 탐구(4차 탐구) &gt; 탐구의 마무리</p>
          </div>
        </div>

        {/* 예시 5: 화학1 */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-4">
          <p className="font-black text-indigo-700 mb-3 text-lg">화학1</p>
          <p className="text-sm leading-relaxed">산화 반응에서 반응 속도를 조절하는 요인에 관심을 가지게 되어, 과산화수소의 분해 반응에 다양한 촉매를 적용해보는 실험을 설계함. 처음에는 감자, 마늘 등 천연 재료와 산화망간(MnO₂)을 활용해 기체 발생량을 비교했으나, 실험 조건 통제 실패로 재현성이 낮고 데이터 간 편차가 크게 나타남. 이에 반응 속도 이론을 다룬 서적 '화학 반응 속도와 촉매'를 참고하고, 실험 방법을 수정하기 위해 과학 교사에게 기체 포집 방식과 반응 시간 측정법에 대해 자문을 구함. 이후 실험에 사용한 촉매의 표면적, 온도, 농도 등을 통제하고, 스톱워치와 눈금실린더를 활용해 산소 발생량을 정량적으로 측정함. 그 결과, 산화망간이 천연 촉매보다 현저히 높은 반응 속도를 유도함을 확인하고, 활성화 에너지 감소 메커니즘에 대한 자료를 보충함. 실험 결과를 그래프로 정리하고 보고서를 작성하여 교내 과학 탐구 발표대회에 제출하였으며, 후속 탐구로 다양한 금속 촉매의 반응 특성 비교 실험을 기획함.</p>
          <div className="mt-4 p-3 bg-indigo-100 rounded-xl">
            <p className="text-xs font-black text-indigo-700">호기심 &gt; 1차 탐구 &gt; 실패 &gt; 실패 극복 과정(2차 탐구) &gt; 추가 탐구(3차 탐구) &gt; 탐구의 마무리</p>
          </div>
        </div>

        {/* 핵심 정리 */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl my-8">
          <p className="text-slate-300 mb-2">모든 구조가 보이시나요?</p>
          <p className="text-white font-bold text-lg">가장 이상적인 생활기록부의 세특은 해당 구조입니다.</p>
          <p className="text-slate-300 mt-2">세특 외에 모든 항목에서 동일합니다.</p>
          <p className="text-slate-300 mt-4">입학사정관이 가장 보고 싶어하는 것은</p>
          <p className="text-2xl font-black text-white mt-1">바로 '어려운 것을 어떻게 해결했는가?'입니다.</p>
          <p className="text-slate-400 mt-4">GPT 때문에 더욱 더 심해진 것도 맞습니다.</p>
          <p className="text-indigo-400 font-bold mt-2">이 구조를 반드시 기억해주시기 바랍니다.</p>
        </div>

        {/* 탐구 횟수 기준 */}
        <p>제가 1차 탐구, 2차 탐구, 3차 탐구, 4차 탐구까지를 보여드렸습니다.</p>
        <p>'서적을 읽음' '선생님께 질문함' '탐구함' 등을 1가지 탐구라고 판단했을 때</p>

        <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 my-8">
          <p className="text-indigo-900">평균적으로 <strong className="text-2xl">3~4번</strong>의 탐구가 1가지 세특에서 등장하면</p>
          <p className="text-indigo-900 font-black text-xl mt-1">우수사례라고 판단합니다.</p>
          <p className="text-indigo-800 mt-6">1등급 학생들이라면 반드시 3~4가지가 최소 조건입니다.</p>
          <p className="text-indigo-800 mt-2">고교학점제 기준 2등급 이하 학생들은 3~4가지만 충족하더라도</p>
          <p className="text-indigo-800">충분히 좋은 생기부로 판단될 수 있습니다.</p>
        </div>

        <p>물론, 단순히 탐구의 개수만으로 탐구 깊이를 판단하지는 않습니다.</p>
        <p className="mt-4">예를 들어, A라는 학생은 교과서 내용으로 4번의 탐구를 꼬리에 꼬리를 물어 탐구하고</p>
        <p>B라는 학생은 교과서 외 대학 과정으로 2번의 탐구를 진행할 수도 있습니다.</p>
        <p className="mt-4">누가 더 좋은 점수를 받느냐?라고 했을 때</p>
        <p>사실 미지수입니다.</p>
        <p>입학사정관마다 판단 근거가 다 다르기 때문입니다.</p>
        <p className="mt-2">다만, 평균적으로 <strong>A라는 학생이 좋은 평가를 받을 가능성이 꽤나 높습니다.</strong></p>
        <p className="font-bold text-slate-900 mt-4">따라서, 여러분들도 반드시 여러번의 탐구를 거쳐가는 것이 가장 중요합니다.</p>

        {/* 리베라 CTA */}
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 my-8">
          <p>리베라 입시컨설팅은 총 97% 합격률을 유지시키는 이유는</p>
          <p>입학사정관 출신과 연구진들이</p>
          <p className="font-bold text-slate-900">해당 내용을 바탕으로 생활기록부 설계하기 때문입니다.</p>
        </div>

        <div className="mt-8 p-12 bg-indigo-600 rounded-[3rem] text-white text-center shadow-2xl">
          <h4 className="text-2xl font-black mb-4">우리 아이는 어떠한 입시 설계를 해야할 지 고민이신가요?</h4>
          <p className="mb-8 opacity-90 text-lg font-medium">아래 링크에서 1:1 상담을 받아보세요.</p>
          <a
            href="https://tally.so/r/aQ22aE?utm_source=ebook"
            target="_blank"
            className="inline-block px-14 py-6 bg-white text-indigo-600 rounded-2xl font-black text-xl hover:scale-105 transition-transform"
          >
            리베라입시컨설팅 | 상담 신청 (1:1 상담 받기)
          </a>
          <div className="mt-8 text-sm opacity-70 space-y-1">
            <p>*리베라 입시 컨설팅은 '선발형 관리'를 진행합니다.</p>
            <p>합격률 97%를 유지하기 위해 선발된 학생만 관리합니다.</p>
          </div>
        </div>

        {/* 다음 챕터 안내 */}
        <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white text-center">
          <p className="text-slate-400 mb-4">고교학점제에서 어떤 과목을 선택해야 할까요?</p>
          <button data-navigate-to="chapter4" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-lg transition-all hover:scale-105 cursor-pointer">
            다음: 4. 고교학점제 선택과목 자료집 및 케이스 &rarr;
          </button>
        </div>
      </div>
    )
  },
  {
    id: "chapter4",
    title: "4. 고교학점제 선택과목 자료집 및 케이스",
    icon: "✅",
    content: (
      <div className="space-y-6 text-slate-800 leading-relaxed">
        {/* 인트로 */}
        <p>고교학점제의 핵심은 선택과목입니다.</p>
        <p className="mt-2">이후 설명하겠지만</p>
        <p>핵심과목을 선택하지 않았다면</p>
        <p className="font-bold text-slate-900">결국에는 뽑히지 않을 가능성이 높습니다.</p>
        <p className="mt-4">이 페이지에서는 어떤 과목 선택이 고교학점제에서 고평가를 받을 지 알려드리도록 하겠습니다.</p>

        <hr className="border-slate-200 my-8" />

        {/* 핵심과목 vs 권장과목 */}
        <p>여러분들은 딱 <strong>2가지</strong>만 기억하시면 됩니다.</p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="p-8 bg-red-50 border border-red-100 rounded-3xl">
            <h4 className="text-xl font-black text-red-900 mb-2">1. 핵심과목</h4>
            <p className="text-sm text-red-800">수강하지 않으면 '감점'되는 과목입니다.</p>
          </div>
          <div className="p-8 bg-green-50 border border-green-100 rounded-3xl">
            <h4 className="text-xl font-black text-green-900 mb-2">2. 권장과목</h4>
            <p className="text-sm text-green-800">들었다면 플러스 점수를 주겠다는 말입니다.</p>
          </div>
        </div>

        <p>그럼 어떤게 더 중요할까요?</p>
        <p className="font-black text-indigo-600 text-lg">당연히, 핵심 과목이 더욱 중요합니다.</p>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 my-6">
          <p className="text-sm text-slate-500">해당 내용은 서울대에서 발표하는 자료 일부입니다.</p>
        </div>

        {/* 이과 설명 */}
        <h3 className="text-2xl font-black mt-10 mb-4 text-slate-900">이과의 경우</h3>
        <p>우선 이과의 경우를 먼저 설명하겠습니다.</p>
        <p className="mt-4">빨간색으로 표시한 부분이 생명 관련 학과의 핵심과목입니다.</p>
        <p className="font-bold text-slate-900">해당 과목을 선택하지 않으면 선발 시 감점이 된다는 겁니다.</p>

        {/* 3가지 문제점 */}
        <h3 className="text-2xl font-black mt-12 mb-6 text-slate-900">과목 선택에 있어 크게 3가지의 문제점</h3>

        <div className="bg-slate-900 text-white p-8 rounded-3xl my-8">
          <ol className="space-y-4 font-black text-xl">
            <li className="flex items-center gap-4"><span className="text-indigo-400">1.</span> 핵심과목을 선택하지 못한 경우</li>
            <li className="flex items-center gap-4"><span className="text-indigo-400">2.</span> 과목간의 위계가 맞지 않는 경우</li>
            <li className="flex items-center gap-4"><span className="text-indigo-400">3.</span> 우리 학교에 관련 과목이 개설되지 않는 경우</li>
          </ol>
        </div>

        {/* 문제 1 */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h4 className="text-xl font-black text-indigo-600 mb-4">1. 핵심과목을 선택하지 못한 경우</h4>
          <p>첫번째, 핵심 과목을 내신 등급이 걱정되어 선택하지 못한 경우가 있습니다.</p>
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 my-4">
            <p className="text-amber-900 font-bold">실제 입학사정관들은 '고교과목개설현황표'를 가지고 있습니다.</p>
            <p className="text-amber-800 mt-1">따라서, 학생의 선택을 한 눈에 파악할 수 있죠.</p>
          </div>
          <p>예를 들어, 분명 미적분을 들을 수 있었는데</p>
          <p>학생수가 적어 등급이 잘 나오지 않기 때문에 확통을 선택했다면 이는 감점 대상이 될 수 있다는 것입니다.</p>
          <p className="mt-4 font-bold text-slate-900">이럴 때는 어떻게 해야할까요?</p>
          <p className="mt-2 font-bold text-indigo-600">바로 생활기록부에 미적분에 관련되어 탐구하는 내용을 최대한 기록하는 것입니다.</p>
        </section>

        {/* 문제 2 */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mt-6">
          <h4 className="text-xl font-black text-indigo-600 mb-4">2. 과목간의 위계가 맞지 않는 경우</h4>
          <p>두번째, 과목간의 위계가 맞지 않는 경우가 있습니다.</p>
          <p className="mt-2">위계란 쉽게 말해서 과목의 순서를 이야기합니다.</p>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 my-4">
            <p>만약, 내가 화학1을 듣고 바로 고급 화학을 들었다면?</p>
            <p className="font-bold text-slate-900 mt-1">화학2를 건너뛰었으니 위계에 맞지 않습니다.</p>
          </div>
          <p className="font-bold text-slate-900">이럴 때는 어떻게 해야할까요?</p>
          <p className="mt-2 font-bold text-indigo-600">이 또한 생활기록부에 화학2 공부하는 내용을 반드시 기재해야 합니다.</p>
        </section>

        {/* 문제 3 */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mt-6">
          <h4 className="text-xl font-black text-indigo-600 mb-4">3. 우리 학교에 관련 과목이 개설되지 않는 경우</h4>
          <p>세번째, 우리 학교에 관련 과목이 개설되지 않는 경우는 어떻게 해야할까요?</p>
          <p className="mt-2">이미 입학사정관들은 해당 과목이 개설되지 않았다는 것을 알고 있습니다.</p>
          <p className="mt-2">따라서, 이 또한 생활기록부에 관련 내용을 탐구한다면</p>
          <p className="font-bold text-indigo-600">더욱 플러스 점수가 될 것 입니다.</p>
        </section>

        {/* 문과 학생 */}
        <h3 className="text-2xl font-black mt-12 mb-6 text-slate-900">자 그렇다면 문과 학생들은 어떨까요?</h3>

        <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 my-8">
          <p className="text-indigo-900 font-bold text-lg mb-4">문과 학생들의 핵심과목, 권장과목은 존재하지 않습니다.</p>
          <p className="text-indigo-800">즉, 본인이 희망하는 학과와 관련되어 최대한 열심히 탐구를 나타내시면 됩니다.</p>
          <p className="text-indigo-800 mt-4">만약, 심리학과 희망한다면 '심리학' 과목 선택이 가장 좋을 겁니다.</p>
          <p className="text-indigo-800">경제학과라면 경제 수학 선택이 가장 무난하겠죠.</p>
          <p className="text-indigo-800 mt-4">이런식으로 문과 학생들에게는 선택과목 유불리가 크게 작동하지 않습니다.</p>
          <p className="text-indigo-900 font-bold mt-4">다만, 각 과목에서의 세특 수준이 더욱 중요합니다.</p>
        </div>

        <hr className="border-slate-200 my-8" />

        {/* 자료 다운로드 섹션 */}
        <h3 className="text-2xl font-black mb-4 text-slate-900">고교학점제 선택과목 자료가 궁금하신가요?</h3>

        <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mb-8">
          <p className="text-green-800 font-bold flex items-center gap-2">
            <span className="text-green-600 text-xl">&#10003;</span>
            버튼을 클릭하시면 자료 다운이 가능합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <a href="/서울대 2028 전공연계과목 (1).pdf" download className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
            <span className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-xl text-xs font-black flex-shrink-0">PDF</span>
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">서울대 2028 전공연계과목</span>
          </a>
          <a href="/서울시립대 2028 전공연계과목 (2).pdf" download className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
            <span className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-xl text-xs font-black flex-shrink-0">PDF</span>
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">서울시립대 2028 전공연계과목</span>
          </a>
          <a href="/서울과기대_2028_전공연계과목_반영과목_안내 (2).pdf" download className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
            <span className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-xl text-xs font-black flex-shrink-0">PDF</span>
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">서울과기대 2028 전공연계과목</span>
          </a>
          <a href="/중앙대_2028_전공연계과목_반영과목_안내 (2).pdf" download className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
            <span className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-xl text-xs font-black flex-shrink-0">PDF</span>
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">중앙대 2028 전공연계과목</span>
          </a>
          <a href="/숙명여대_2028_전공연계과목_반영과목_안내 (1).pdf" download className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
            <span className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-xl text-xs font-black flex-shrink-0">PDF</span>
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">숙명여대 2028 전공연계과목</span>
          </a>
          <a href="/숭실대_2028_전공연계과목_반영과목_안내 (1).pdf" download className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
            <span className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-xl text-xs font-black flex-shrink-0">PDF</span>
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">숭실대 2028 전공연계과목</span>
          </a>
          <a href="/아주대_2028_전공연계과목_반영과목_안내 (1).pdf" download className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
            <span className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-xl text-xs font-black flex-shrink-0">PDF</span>
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">아주대 2028 전공연계과목</span>
          </a>
          <a href="/인하대_2028_전공연계과목_반영과목_안내 (1).pdf" download className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
            <span className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-xl text-xs font-black flex-shrink-0">PDF</span>
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">인하대 2028 전공연계과목</span>
          </a>
          <a href="/국민대_2028_전공연계과목_반영과목_안내 (1).pdf" download className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
            <span className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-xl text-xs font-black flex-shrink-0">PDF</span>
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">국민대 2028 전공연계과목</span>
          </a>
        </div>

        {/* 다음 챕터 안내 */}
        <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white text-center">
          <p className="text-slate-400 mb-4">리베라가 97% 합격률을 유지하는 비결이 궁금하신가요?</p>
          <button data-navigate-to="chapter5" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-lg transition-all hover:scale-105 cursor-pointer">
            다음: 5. 리베라가 97% 합격률을 유지하는 이유 &rarr;
          </button>
        </div>
      </div>
    )
  },
  {
    id: "chapter5",
    title: "5. 리베라가 97% 합격률을 유지하는 이유",
    icon: "🏅",
    content: (
      <div className="space-y-8 text-slate-800 leading-relaxed">
        <p className="text-lg">리베라가 업계에서 불가능하다고 여겨지는 '합격률 97%'를 유지하는 이유는 단순합니다. 남들이 ‘수익’을 원할 때, 저희는 관리에 많은 시간을 투자하더라도 ‘합격’에 집중했기 때문입니다.</p>
        
        <h3 className="text-2xl font-black mt-10 mb-6 text-slate-900">리베라가 97%를 증명하는 3가지 본질</h3>
        <div className="grid gap-6">
          <div className="flex gap-6 p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] group transition-all hover:bg-white hover:shadow-xl">
            <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center rounded-2xl font-black text-3xl flex-shrink-0 group-hover:bg-indigo-600 transition-colors">1</div>
            <div>
              <h4 className="font-bold text-xl mb-2">컨설턴트 비율 [1:2 제한] 시스템</h4>
              <p className="text-slate-600">컨설턴트 1명이 맡는 학생을 단 2명으로 제한합니다. 오직 '완벽한 관리'를 위함입니다.</p>
            </div>
          </div>
          
          <div className="flex gap-6 p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] group transition-all hover:bg-white hover:shadow-xl">
            <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center rounded-2xl font-black text-3xl flex-shrink-0 group-hover:bg-indigo-600 transition-colors">2</div>
            <div>
              <h4 className="font-bold text-xl mb-2">감이 아닌 데이터, [자체 개발 앱]</h4>
              <p className="text-slate-600">자체 개발 앱으로 학습 스케줄부터 생기부까지 빈틈없이 추적합니다. 데이터로 승부합니다.</p>
            </div>
          </div>
          
          <div className="flex gap-6 p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] group transition-all hover:bg-white hover:shadow-xl">
            <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center rounded-2xl font-black text-3xl flex-shrink-0 group-hover:bg-indigo-600 transition-colors">3</div>
            <div>
              <h4 className="font-bold text-xl mb-2">선발하여 운영합니다</h4>
              <p className="text-slate-600">성적이 낮더라도 태도가 좋은 학생만 선발합니다. 합격률 유지를 위한 철학입니다.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-12 bg-indigo-600 rounded-[3rem] text-white text-center shadow-2xl">
          <h4 className="text-3xl font-black mb-6">우리 아이의 대학을 높이고 싶으신가요?</h4>
          <p className="mb-10 opacity-90 text-xl font-medium">지금 리베라 전문가에게 1:1 상담을 받아보세요.</p>
          <a 
            href="https://tally.so/r/aQ22aE?utm_source=ebook" 
            target="_blank" 
            className="inline-block px-14 py-6 bg-white text-indigo-600 rounded-2xl font-black text-2xl hover:scale-105 transition-transform"
          >
            1:1 무료 상담 신청하기
          </a>
        </div>
      </div>
    )
  }
];

export const HERO_CONTENT = {
  badge: "누적 합격생 2,000명 돌파",
  title: "입시의 판도를 바꾸는\n리베라 솔루션 자료 ZIP",
  subtitle: "학종 합격률 97%의 비결. 실제 입학사정관 출신 연구진이 설계한 상위 1%의 합격 전략을 지금 바로 확인하세요.",
  cta: "지금 바로 읽기"
};

export const FEATURES = [
  {
    icon: "🎯",
    title: "데이터 기반 전략",
    description: "10만 건 이상의 합격 데이터를 분석하여 지원 가능한 최선의 대학 라인을 제안합니다."
  },
  {
    icon: "✍️",
    title: "독보적인 세특 설계",
    description: "단순 나열식 기록이 아닌, 전공 적합성을 관통하는 스토리라인을 구축합니다."
  },
  {
    icon: "🚀",
    title: "밀착 관리 시스템",
    description: "컨설턴트 1인당 학생 수를 극도로 제한하여 완벽한 퀄리티의 결과물을 보장합니다."
  }
];

export const CURRICULUM = [
  {
    id: "chapter1",
    title: "입학사정관의 시선",
    description: "생활기록부의 어떤 항목이 가장 큰 영향을 주는지 파악합니다.",
    icon: "👁️",
    url: "#",
    lessons: ["서류 평가 우선순위", "세특의 중요성", "내신 등급의 진실"]
  },
  {
    id: "chapter2",
    title: "스토리텔링 전략",
    description: "학생만의 독창적인 브랜딩을 구축하는 방법론을 배웁니다.",
    icon: "📖",
    url: "#",
    lessons: ["최종 목표 설정", "해결과제 세팅", "유기적 연결"]
  },
  {
    id: "chapter3",
    title: "심화 탐구 메커니즘",
    description: "대학이 열광하는 '탐구력'을 증명하는 보고서 작성법입니다.",
    icon: "🔬",
    url: "#",
    lessons: ["호기심의 시작", "문제 해결 과정", "심화 탐구의 연결"]
  },
  {
    id: "chapter4",
    title: "고교학점제 완벽 대응",
    description: "선택과목이 입시의 승패를 가르는 시대의 대응 전략입니다.",
    icon: "📊",
    url: "#",
    lessons: ["핵심과목 리스트", "권장과목 선택법", "부족한 이수 보완"]
  }
];

export const FAQS = [
  {
    question: "컨설팅은 언제 시작하는 것이 가장 좋나요?",
    answer: "빠를수록 좋습니다. 고등학교 1학년 때부터 스토리라인을 잡아야 3년간 일관성 있는 생기부를 만들 수 있습니다."
  },
  {
    question: "성적이 낮은데 합격할 수 있을까요?",
    answer: "생활기록부의 질에 따라 본인 내신 대비 상향 대학 합격이 충분히 가능합니다. 리베라의 전략은 바로 그 지점에 집중합니다."
  }
];
