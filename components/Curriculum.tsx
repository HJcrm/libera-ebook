
import React from 'react';
import { CURRICULUM } from '../constants';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const Curriculum: React.FC = () => {
  return (
    <section id="curriculum" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-slate-900 mb-4">전체 목차</h2>
            <p className="text-slate-500 text-lg font-medium">읽고 싶은 챕터를 선택하여 바로 탐독을 시작하세요.</p>
          </div>
          <div className="text-slate-400 text-sm font-bold flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             실시간 업데이트 중
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {CURRICULUM.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-indigo-200 transition-all duration-300">
              <div className="flex items-start justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${item.id === 'ch1' ? 'bg-indigo-500' : item.id === 'ch2' ? 'bg-purple-500' : item.id === 'ch3' ? 'bg-amber-500' : 'bg-emerald-500'}`}>
                  {item.icon}
                </div>
                <a 
                  href={item.url} 
                  target="_blank" 
                  className="p-3 rounded-full bg-slate-100 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all group-hover:scale-110"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
              <p className="text-slate-500 mb-8 font-medium">{item.description}</p>
              
              <div className="space-y-3 mb-10">
                {item.lessons.map((lesson, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-600 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-slate-300 group-hover:text-indigo-400" />
                    {lesson}
                  </div>
                ))}
              </div>

              <a 
                href={item.url} 
                target="_blank"
                className="block w-full text-center py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all"
              >
                본문 페이지 열기
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-white rounded-[3rem] border border-slate-200 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
            <h4 className="text-2xl font-black text-slate-900 mb-4">찾으시는 내용이 없나요?</h4>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto font-medium">우측 하단의 AI 라이브러리 가이드에게 질문하시면 리베라프레미의 방대한 지식 중 필요한 부분을 찾아드립니다.</p>
            <button className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
                검색 가이드 보기
            </button>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
