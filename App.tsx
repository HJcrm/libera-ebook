
import React, { useState, useEffect } from 'react';
import { CHAPTERS } from './constants';
import AiAssistant from './components/AiAssistant';
import { BookOpen, ChevronRight, Menu, X, ArrowUpCircle } from 'lucide-react';

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(CHAPTERS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeChapter = CHAPTERS.find(c => c.id === activeId) || CHAPTERS[0];

  const handleChapterClick = (id: string) => {
    setActiveId(id);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-navigate-to]');
      if (target) {
        e.preventDefault();
        const chapterId = target.getAttribute('data-navigate-to');
        if (chapterId) handleChapterClick(chapterId);
      }
    };
    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4">
        <span className="font-black text-indigo-600 tracking-tighter">LIBERA SOLUTION</span>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar (TOC) */}
      <aside className={`fixed inset-0 md:relative md:inset-auto z-40 w-full md:w-80 bg-white border-r border-slate-200 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="h-full flex flex-col pt-20 md:pt-0">
          <div className="p-8 border-b border-slate-100 hidden md:block">
            <h1 className="text-2xl font-black text-slate-900 tracking-tighter">리베라 솔루션</h1>
            <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">Premium Resource Library</p>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Table of Contents</p>
            {CHAPTERS.map((chap) => (
              <button
                key={chap.id}
                onClick={() => handleChapterClick(chap.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all text-left group ${activeId === chap.id ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'hover:bg-slate-50 text-slate-600'}`}
              >
                <span className="text-xl">{chap.icon}</span>
                <span className="text-sm font-bold flex-1">{chap.title.split('. ')[1] || chap.title}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeId === chap.id ? 'translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </nav>
          
          <div className="p-6 bg-slate-50 md:m-4 md:rounded-2xl border border-slate-100">
             <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold text-xs shadow-sm border border-slate-200 flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
               <BookOpen className="w-4 h-4" />
               실물 책 신청하기
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content Viewer */}
      <main className="flex-1 flex flex-col pt-16 md:pt-0">
        {/* Book Header / Banner */}
        <header className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center text-center px-4 bg-blue-900">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=2000" 
              alt="Bookshelf" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent"></div>
          
          <div className="relative z-10 animate-fade-in">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-black tracking-widest uppercase">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              97% Success Rate
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 shadow-sm">
              리베라 솔루션 자료 ZIP
            </h2>
            <div className="flex items-center justify-center gap-4 text-blue-200/80 font-medium">
               <span>PDF 페이지 자료</span>
               <span className="w-1 h-1 bg-blue-400/50 rounded-full"></span>
               <span>{activeChapter.title}</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <article className="max-w-4xl mx-auto w-full px-6 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-12 border-b border-slate-100 pb-8">
            <div className="text-6xl mb-6">{activeChapter.icon}</div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              {activeChapter.title}
            </h1>
          </div>
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">
            {activeChapter.content}
          </div>

          <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4 text-slate-400">
               <button 
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                 className="flex items-center gap-2 hover:text-indigo-600 transition-colors font-bold text-sm"
               >
                 <ArrowUpCircle className="w-5 h-5" />
                 맨 위로 가기
               </button>
             </div>
             
             {/* Application Button (Fixed or Bottom) */}
             <a
               href="https://tally.so/r/aQ22aE?utm_source=ebook"
               target="_blank"
               className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-3 no-underline"
             >
               선발형 관리반 사전 신청 접수
             </a>
          </div>
        </article>
      </main>

      {/* Floating AI Assistant */}
      <AiAssistant />
    </div>
  );
};

export default App;
