
import React from 'react';
import { HERO_CONTENT } from '../constants';
import { ChevronRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-gradient-to-tr from-indigo-100/30 to-purple-100/30 blur-3xl -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white border border-slate-200 text-indigo-600 text-xs font-black tracking-widest uppercase animate-fade-in shadow-sm">
          {HERO_CONTENT.badge}
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-8 whitespace-pre-line">
          {HERO_CONTENT.title.split('\n').map((line, i) => (
            <span key={i} className={i === 1 ? 'text-indigo-600' : ''}>
              {line}<br />
            </span>
          ))}
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed font-medium">
          {HERO_CONTENT.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#curriculum" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-200">
            <PlayCircle className="w-5 h-5" />
            {HERO_CONTENT.cta}
          </a>
          <a href="https://liberapremi.oopy.io/" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            원문 노션으로 보기
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
