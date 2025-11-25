import React from 'react';
import { useMenu } from '../App';
import { Link } from 'react-router-dom';

const Governance: React.FC = () => {
  const { openMenu } = useMenu();

  return (
    <div className="bg-[#f1f5f9] dark:bg-[#0f172a] font-display relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden text-[#0f172a] dark:text-[#e2e8f0]">
      <header className="flex items-center bg-[#f1f5f9]/80 dark:bg-[#0f172a]/80 p-4 pb-2 justify-between sticky top-0 z-10 backdrop-blur-sm border-b border-[#cbd5e1] dark:border-[#334155]">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <button onClick={openMenu} className="flex items-center justify-center p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[#0f172a] dark:text-[#e2e8f0]">menu</span>
          </button>
        </div>
        <h2 className="text-2xl font-brand font-bold leading-tight tracking-wider flex-1 text-center">CRUSH</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[#0f172a] dark:text-[#e2e8f0]">search</span>
          </button>
        </div>
      </header>
      
      <main className="flex-1">
        <h1 className="text-[#0f172a] dark:text-[#e2e8f0] tracking-tight text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Proposed Governance Frameworks</h1>
        <p className="text-[#0f172a]/80 dark:text-[#e2e8f0]/80 text-base font-normal leading-relaxed pb-3 pt-1 px-4">
            Effective ASI governance requires novel thinking. Here we present conceptual frameworks for discussion and refinement. Your feedback is crucial in shaping these ideas.
        </p>
        
        <div className="pb-3 sticky top-[68px] z-10 bg-[#f1f5f9] dark:bg-[#0f172a]">
          <div className="flex border-b border-[#cbd5e1] dark:border-[#334155] px-4 gap-6 overflow-x-auto whitespace-nowrap no-scrollbar">
            <button className="flex shrink-0 flex-col items-center justify-center border-b-[3px] border-b-[#0ea5e9] text-[#0ea5e9] pb-[13px] pt-4">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">All</p>
            </button>
            <button className="flex shrink-0 flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#0f172a]/60 dark:text-[#e2e8f0]/60 pb-[13px] pt-4 hover:text-[#0ea5e9] transition-colors">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Policy</p>
            </button>
            <button className="flex shrink-0 flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#0f172a]/60 dark:text-[#e2e8f0]/60 pb-[13px] pt-4 hover:text-[#0ea5e9] transition-colors">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Ethics</p>
            </button>
            <button className="flex shrink-0 flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#0f172a]/60 dark:text-[#e2e8f0]/60 pb-[13px] pt-4 hover:text-[#0ea5e9] transition-colors">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Research</p>
            </button>
            <button className="flex shrink-0 flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#0f172a]/60 dark:text-[#e2e8f0]/60 pb-[13px] pt-4 hover:text-[#0ea5e9] transition-colors">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Case Studies</p>
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <h3 className="text-[#0f172a] dark:text-[#e2e8f0] text-lg font-bold leading-tight tracking-[-0.015em] pt-4">Exploratory Policy Concepts</h3>
          
          <details className="group bg-[#ffffff] dark:bg-[#1e293b] rounded-xl shadow-sm overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
              <div className="flex-1 pr-4">
                <h4 className="text-base font-bold text-[#0f172a] dark:text-[#e2e8f0]">Concept: International ASI Treaty</h4>
                <p className="text-sm text-[#0f172a]/70 dark:text-[#e2e8f0]/70 mt-1">Exploring a global agreement for collaborative oversight of advanced AI hardware.</p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs font-medium bg-[#0ea5e9]/10 text-[#0ea5e9] px-2 py-1 rounded-full">Governance</span>
                  <span className="text-xs font-medium bg-gray-500/10 text-[#0f172a]/70 dark:text-[#e2e8f0]/70 px-2 py-1 rounded-full">Hardware</span>
                </div>
              </div>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <div className="border-t border-[#cbd5e1] dark:border-[#334155] p-4">
              <p className="text-sm text-[#0f172a]/90 dark:text-[#e2e8f0]/90 mb-4">This draft proposal explores a multi-national treaty for shared standards on ASI physical infrastructure. We are seeking feedback on key ideas like shared compute access, verifiable shutdown protocols, and an international hardware auditing body.</p>
              <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#0ea5e9] text-[#0ea5e9] px-4 py-3 text-sm font-bold transition-colors hover:bg-[#0ea5e9]/10">
                <span className="material-symbols-outlined text-base">forum</span>
                Provide Feedback
              </button>
            </div>
          </details>

          <details className="group bg-[#ffffff] dark:bg-[#1e293b] rounded-xl shadow-sm overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
              <div className="flex-1 pr-4">
                <h4 className="text-base font-bold text-[#0f172a] dark:text-[#e2e8f0]">Concept: National AI Safety Act</h4>
                <p className="text-sm text-[#0f172a]/70 dark:text-[#e2e8f0]/70 mt-1">A proposed framework for regulating super-intelligent systems within national borders.</p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs font-medium bg-[#0ea5e9]/10 text-[#0ea5e9] px-2 py-1 rounded-full">Safety</span>
                  <span className="text-xs font-medium bg-gray-500/10 text-[#0f172a]/70 dark:text-[#e2e8f0]/70 px-2 py-1 rounded-full">Policy</span>
                </div>
              </div>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <div className="border-t border-[#cbd5e1] dark:border-[#334155] p-4">
              <p className="text-sm text-[#0f172a]/90 dark:text-[#e2e8f0]/90 mb-4">This conceptual act introduces a tiered risk model for ASI applications. It suggests stringent safety evaluations and public transparency reports before high-impact systems could be deployed. We invite discussion on its feasibility and the role of a federal oversight agency.</p>
              <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#0ea5e9] text-[#0ea5e9] px-4 py-3 text-sm font-bold transition-colors hover:bg-[#0ea5e9]/10">
                <span className="material-symbols-outlined text-base">open_in_new</span>
                View Discussion
              </button>
            </div>
          </details>

          <h3 className="text-[#0f172a] dark:text-[#e2e8f0] text-lg font-bold leading-tight tracking-[-0.015em] pt-8">Ethical Frameworks in Development</h3>
          
          <details className="group bg-[#ffffff] dark:bg-[#1e293b] rounded-xl shadow-sm overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
              <div className="flex-1 pr-4">
                <h4 className="text-base font-bold text-[#0f172a] dark:text-[#e2e8f0]">Draft: Value Alignment Principles</h4>
                <p className="text-sm text-[#0f172a]/70 dark:text-[#e2e8f0]/70 mt-1">An open-ended framework to ensure ASI goals align with evolving human values.</p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs font-medium bg-[#0ea5e9]/10 text-[#0ea5e9] px-2 py-1 rounded-full">Ethics</span>
                  <span className="text-xs font-medium bg-gray-500/10 text-[#0f172a]/70 dark:text-[#e2e8f0]/70 px-2 py-1 rounded-full">Accountability</span>
                </div>
              </div>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <div className="border-t border-[#cbd5e1] dark:border-[#334155] p-4">
              <p className="text-sm text-[#0f172a]/90 dark:text-[#e2e8f0]/90 mb-4">Our initial research explores a multi-layered approach to value alignment, including constitutional AI, scalable oversight, and interpretability. This is an active area of research, and we encourage collaboration to refine these principles.</p>
              <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#0ea5e9] text-[#0ea5e9] px-4 py-3 text-sm font-bold transition-colors hover:bg-[#0ea5e9]/10">
                <span className="material-symbols-outlined text-base">science</span>
                Explore Research
              </button>
            </div>
          </details>

          <div className="bg-[#ffffff] dark:bg-[#1e293b] rounded-xl p-6 mt-12 text-center">
            <h3 className="text-lg font-bold text-[#0f172a] dark:text-[#e2e8f0]">Get Involved</h3>
            <p className="text-sm text-[#0f172a]/80 dark:text-[#e2e8f0]/80 mt-2">Help shape the future of responsible ASI governance. Contribute to research, review our concepts, or join the discussion.</p>
            <Link to="/about" className="mt-6 w-full max-w-xs mx-auto flex items-center justify-center gap-2 rounded-lg bg-[#0ea5e9] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0ea5e9]/90">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-[#f1f5f9] dark:bg-[#0f172a] border-t border-[#cbd5e1] dark:border-[#334155] mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-bold">CRUSH.org</p>
            <div className="flex gap-6 text-[#0f172a]/70 dark:text-[#e2e8f0]/70">
              <Link to="/about" className="text-xs hover:text-[#0ea5e9] transition-colors">About Us</Link>
              <Link to="/about" className="text-xs hover:text-[#0ea5e9] transition-colors">Contact</Link>
              <a href="#" className="text-xs hover:text-[#0ea5e9] transition-colors">Privacy Policy</a>
            </div>
            <p className="text-xs text-[#0f172a]/50 dark:text-[#e2e8f0]/50 mt-2">© 2024 Center for Responsible Use of Super-Intelligent Hardware</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Governance;