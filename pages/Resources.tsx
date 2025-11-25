import React, { useState } from 'react';
import { useMenu } from '../App';

const Resources: React.FC = () => {
  const { openMenu } = useMenu();
  const [activeTab, setActiveTab] = useState('articles-reports');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 140; // Approx height of header + nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const tabs = [
    { id: 'articles-reports', label: 'Articles & Reports' },
    { id: 'policy-papers', label: 'Policy Papers' },
    { id: 'research', label: 'Research' },
    { id: 'external-links', label: 'External Links' },
  ];

  return (
    <div className="font-display bg-[#f6f6f8] dark:bg-[#0A192F] min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 flex items-center bg-[#f6f6f8]/95 dark:bg-[#0A192F]/95 p-4 pb-2 backdrop-blur-sm justify-between shadow-sm dark:shadow-none transition-all">
        <button onClick={openMenu} className="flex h-12 w-12 shrink-0 items-center justify-center text-[#E6F1FF]/80 hover:text-[#64FFDA] transition-colors">
          <span className="material-symbols-outlined text-3xl text-[#0A192F] dark:text-white">menu</span>
        </button>
        <h1 className="text-[#0A192F] dark:text-[#E6F1FF] text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Resource Library</h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-[#E6F1FF]/80 hover:text-[#64FFDA] transition-colors">
            <span className="material-symbols-outlined text-2xl text-[#0A192F] dark:text-white">search</span>
          </button>
        </div>
      </header>
      
      <div className="sticky top-[72px] z-10 bg-[#f6f6f8] dark:bg-[#0A192F] border-b border-[#1E2A3A] px-4 pt-2 shadow-sm">
        <div className="flex gap-x-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className="flex shrink-0 flex-col gap-y-2 py-3"
            >
              <p className={`text-sm leading-normal transition-colors ${
                activeTab === tab.id 
                  ? 'text-[#64FFDA] font-bold' 
                  : 'text-[#8892B0] font-medium hover:text-[#0A192F] dark:hover:text-[#E6F1FF]'
              }`}>
                {tab.label}
              </p>
              <div className={`h-1 w-full rounded-full transition-colors ${
                activeTab === tab.id ? 'bg-[#64FFDA]' : 'bg-transparent'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
      
      <main className="flex flex-col pb-12">
        <div className="flex flex-col gap-4 p-4 scroll-mt-40" id="articles-reports">
          <h2 className="text-[#0A192F] dark:text-[#E6F1FF] text-2xl font-bold">Articles &amp; Reports</h2>
          
          <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#1E2A3A] p-4 shadow-sm dark:shadow-none">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-[2_2_0px] flex-col gap-2">
                <p className="text-[#64FFDA] text-xs font-bold leading-normal tracking-widest">ARTICLE</p>
                <p className="text-[#0A192F] dark:text-[#E6F1FF] text-lg font-bold leading-tight">Ethical Frameworks for ASI Development</p>
                <p className="text-[#334155] dark:text-[#8892B0] text-sm font-normal leading-normal mt-1">A comprehensive analysis of proposed ethical guidelines for the creation and deployment of Artificial Super Intelligence.</p>
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0" 
                   data-alt="Abstract image of interconnected nodes in a neural network" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqAgWmO70YVTikkkz9KQhq04c9UlyGIIBeOE1kdG9XbfmL-V2tyKXv_NIarhClJukqOUScPVMhX4c7scoW9zYkzxlVgMQ7JpYVqWQkL5XR4bX1F8agHFhMz9Gn0qhmcHzvYWJTd8X3fUZLV0bDKbMIbJQzkfxDlGLZ631H4QgcGNlqCR_okQeDNMZWZYrx9_L1BajxZk5_7CHKlX2jqYHJK2wVLKoFksdrrLIDQJualG_1vdHCjUXP1-WMiTO8Ns7Tj4A_QPSRHCw")' }}></div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/10">
              <p className="text-[#8892B0] text-xs font-medium">CRUSH Staff • Oct 26, 2023</p>
              <div className="flex items-center gap-1">
                <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#8892B0] hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] transition-colors">
                  <span className="material-symbols-outlined text-lg">bookmark_add</span>
                </button>
                <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#8892B0] hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] transition-colors">
                  <span className="material-symbols-outlined text-lg">share</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#1E2A3A] p-4 shadow-sm dark:shadow-none">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-[2_2_0px] flex-col gap-2">
                <p className="text-[#64FFDA] text-xs font-bold leading-normal tracking-widest">REPORT</p>
                <p className="text-[#0A192F] dark:text-[#E6F1FF] text-lg font-bold leading-tight">Existential Risks: A Quantitative Assessment</p>
                <p className="text-[#334155] dark:text-[#8892B0] text-sm font-normal leading-normal mt-1">This report details potential existential risks posed by uncontrolled super-intelligent hardware and methodologies for risk mitigation.</p>
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0" 
                   data-alt="A macro shot of a complex circuit board with glowing components" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgdpOC2OkYc7WWqBJDsV0g_scy2Sd-4Ac4ELmFkbNvUt34M7DczeI9dZjW3pthINTuFLYLoA23ZjxO-31yTRumuRx6_4Odc-ha3FFqLURdQxNXxe-AHJ7m-Ey-CQeANLaK3zzRggn4yJ6mujJFRq9fSUxxmg1u37lBaSPqPypsvDqYWd_J7ow7_IAeJsCoHZBqg7QqYMENHdZlFzfFa-BKXbXx19nGnt26BL6wF1w3q9fEY_-UxvoTuGPHlbNVipFVF-MG3-5siU4")' }}></div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/10">
              <p className="text-[#8892B0] text-xs font-medium">Dr. Anya Sharma • Sep 15, 2023</p>
              <div className="flex items-center gap-1">
                <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#8892B0] hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] transition-colors">
                  <span className="material-symbols-outlined text-lg">bookmark_add</span>
                </button>
                <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#8892B0] hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] transition-colors">
                  <span className="material-symbols-outlined text-lg">share</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#1E2A3A] p-4 shadow-sm dark:shadow-none">
            <a className="flex flex-col gap-3 group" href="#">
              <p className="text-[#64FFDA] text-xs font-bold leading-normal tracking-widest">FOUNDATIONAL READING</p>
              <p className="text-[#0A192F] dark:text-[#E6F1FF] text-lg font-bold leading-tight group-hover:text-[#64FFDA] transition-colors">Superintelligence: Paths, Dangers, Strategies</p>
              <p className="text-[#334155] dark:text-[#8892B0] text-sm font-normal leading-normal">Nick Bostrom's seminal work on the future of artificial intelligence and its potential risks to humanity.</p>
            </a>
            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/10">
              <p className="text-[#8892B0] text-xs font-medium">Book • Oxford University Press</p>
              <a className="flex items-center gap-1.5 text-[#64FFDA] text-sm font-bold group" href="#">
                <span>Read</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 scroll-mt-40" id="policy-papers">
          <h2 className="text-[#0A192F] dark:text-[#E6F1FF] text-2xl font-bold">Policy Papers</h2>
          <div className="flex items-center justify-center rounded-xl border border-dashed border-[#1E2A3A] bg-[#0A192F]/50 p-8 h-48">
            <p className="text-[#8892B0] text-center">Policy papers and briefs will be available here.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 scroll-mt-40" id="research">
          <h2 className="text-[#0A192F] dark:text-[#E6F1FF] text-2xl font-bold">Research</h2>
          <div className="flex flex-col gap-4">
            <a className="block rounded-xl bg-white dark:bg-[#1E2A3A] p-4 shadow-sm dark:shadow-none group" href="#">
              <div className="flex flex-col gap-2">
                <p className="text-[#64FFDA] text-xs font-bold leading-normal tracking-widest">ACADEMIC PAPER</p>
                <p className="text-[#0A192F] dark:text-[#E6F1FF] text-lg font-bold leading-tight group-hover:text-[#64FFDA] transition-colors">Concrete Problems in AI Safety</p>
                <p className="text-[#334155] dark:text-[#8892B0] text-sm font-normal leading-normal mt-1">A paper by researchers from Google, Stanford, and UC Berkeley outlining practical research directions for AI safety.</p>
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 dark:border-white/10">
                <p className="text-[#8892B0] text-xs font-medium">Amodei et al. • 2016</p>
                <span className="material-symbols-outlined text-[#8892B0] group-hover:text-[#64FFDA] transition-colors">open_in_new</span>
              </div>
            </a>
            <a className="block rounded-xl bg-white dark:bg-[#1E2A3A] p-4 shadow-sm dark:shadow-none group" href="#">
              <div className="flex flex-col gap-2">
                <p className="text-[#64FFDA] text-xs font-bold leading-normal tracking-widest">RESEARCH ARTICLE</p>
                <p className="text-[#0A192F] dark:text-[#E6F1FF] text-lg font-bold leading-tight group-hover:text-[#64FFDA] transition-colors">The Ethics of Artificial Intelligence</p>
                <p className="text-[#334155] dark:text-[#8892B0] text-sm font-normal leading-normal mt-1">An overview of the ethical considerations in AI, from algorithmic bias to the long-term societal impacts of superintelligence.</p>
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 dark:border-white/10">
                <p className="text-[#8892B0] text-xs font-medium">Cambridge University Press • 2020</p>
                <span className="material-symbols-outlined text-[#8892B0] group-hover:text-[#64FFDA] transition-colors">open_in_new</span>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 scroll-mt-40" id="external-links">
          <h2 className="text-[#0A192F] dark:text-[#E6F1FF] text-2xl font-bold">External Links</h2>
          <div className="flex items-center justify-center rounded-xl border border-dashed border-[#1E2A3A] bg-[#0A192F]/50 p-8 h-48">
            <p className="text-[#8892B0] text-center">Curated links to external resources will appear here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;