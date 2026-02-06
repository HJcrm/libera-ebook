
import React, { useState, useRef, useEffect } from 'react';
import { askGemini } from '../services/gemini';
import { Message } from '../types';
import { Send, Bot, User, Loader2, X, Sparkles } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '안녕하세요! 리베라 솔루션 독서 가이드입니다. 지금 읽고 계신 내용에 대해 궁금한 점이 있으시면 무엇이든 물어보세요.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await askGemini(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsTyping(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group border-4 border-white"
      >
        <Sparkles className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-[600px] bg-white md:rounded-3xl shadow-2xl flex flex-col z-[60] overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-4">
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-inner">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-tight">리베라 독서 가이드</h3>
                <p className="text-[10px] opacity-60">Powered by Gemini 3</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm max-w-[85%]'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="p-4 bg-white border border-slate-200 rounded-2xl rounded-tl-none shadow-sm">
                   <Loader2 className="w-4 h-4 text-indigo-600 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="어떤 내용이 궁금하신가요?"
                className="w-full pl-4 pr-12 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-indigo-600 transition-all outline-none text-sm"
              />
              <button onClick={handleSend} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-600">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
