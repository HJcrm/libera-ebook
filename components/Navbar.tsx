
import React from 'react';
import { Book } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Book className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-black tracking-tighter text-slate-900">LIBERA PREMI <span className="text-indigo-600">LIB.</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#curriculum" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">독서 시작</a>
            <a href="https://liberapremi.oopy.io/" target="_blank" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">전체 본문</a>
          </div>
          <div>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all shadow-lg flex items-center gap-2">
              내 서재 가기
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
