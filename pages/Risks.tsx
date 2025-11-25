import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Risks: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101322] font-display min-h-screen flex flex-col group/design-root overflow-x-hidden">
      <header className="sticky top-0 z-10 flex items-center bg-[#f6f6f8]/80 dark:bg-[#101322]/80 backdrop-blur-sm p-4 justify-between">
        <button onClick={() => navigate(-1)} className="text-slate-800 dark:text-white flex size-12 shrink-0 items-center justify-start hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-800 dark:text-white text-2xl font-brand font-bold leading-tight tracking-wider flex-1 text-center">CRUSH</h2>
        <div className="flex size-12 shrink-0"></div>
      </header>
      
      <main>
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10" 
                 style={{ backgroundImage: 'linear-gradient(rgba(16, 19, 34, 0.2) 0%, rgba(16, 19, 34, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuClBP1hKuu8Mc9Ocm6AtFEptWSiiX1gskhdwhSFJuVJbpcKSsFsb1Lgwcv10UE5FRUCnCSAVaesXZ1YMr-hwXxZ4ymtE0bYSppjYipqOnZyuWqypUd3FrnmfMCLaQ3d1lL5oTRfEsOh7uZJ8iHrv5hBQYkibpO2F3NRisuu0V2CpKcF96h5qUumE9mn4LIAKPVszm9MtZzt2GE6GL5-LcPDB5yo-4DXmwIZDCw43GtsuvXQuSo0gJ3gqJHuPxlTJkwfD1SxiKVP4qY")' }}>
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    The Double-Edged Sword: When Your Lifeline Becomes a Liability
                </h1>
                <h2 className="text-slate-200 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Intelligent hardware has transformed lives, but it also presents a new vector of risk in the age of Artificial Super Intelligence. We must act now to ensure human augmentation doesn't become human vulnerability.
                </h2>
              </div>
              <Link to="/about" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1337ec] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Learn About Our Mission</span>
              </Link>
            </div>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal pb-3 pt-8 px-4">
            The very technologies that offer independence and connection are uniquely vulnerable to unregulated ASI. Below are key areas where proactive governance is urgently needed.
        </p>
        
        <h2 className="text-slate-800 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">At-Risk Technologies</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-[#f6f6f8] dark:bg-slate-800/20 p-4 flex-col">
            <div className="text-[#1337ec]">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-800 dark:text-white text-base font-bold leading-tight">Brain-Computer Interfaces</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Potential for unauthorized control or data exploitation.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-[#f6f6f8] dark:bg-slate-800/20 p-4 flex-col">
            <div className="text-[#1337ec]">
              <span className="material-symbols-outlined">front_hand</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-800 dark:text-white text-base font-bold leading-tight">Advanced Prosthetics</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Vulnerability to malicious commands or functional lock-out.</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-[#f6f6f8] dark:bg-slate-800/20 p-4 col-span-full">
            <div className="flex gap-3 items-center">
              <div className="text-[#1337ec]">
                <span className="material-symbols-outlined">cardiology</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-slate-800 dark:text-white text-base font-bold leading-tight">Medical Devices</h3>
              </div>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal space-y-2">
              <p><strong className="font-medium text-slate-600 dark:text-slate-300">Cochlear implants &amp; hearing aids:</strong> Prone to auditory manipulation (e.g., broadcasting distressing sounds) or network-wide disruption, isolating users.</p>
              <p><strong className="font-medium text-slate-600 dark:text-slate-300">Health monitoring devices:</strong> Smart devices tracking vital signs can be hacked to report false data, leading to incorrect medical interventions or panic.</p>
              <p><strong className="font-medium text-slate-600 dark:text-slate-300">Computer-generated transcription:</strong> Services relied upon by many can be manipulated to display erroneous or harmful information, causing confusion and mistrust.</p>
            </div>
          </div>
        </div>

        <div className="px-4 pt-5 pb-0">
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-[#f6f6f8] dark:bg-slate-800/20 p-4">
            <div className="flex gap-3 items-center">
              <div className="text-[#1337ec]">
                <span className="material-symbols-outlined">privacy_tip</span>
              </div>
              <h3 className="text-slate-800 dark:text-white text-base font-bold leading-tight">Data Privacy &amp; Exploitation</h3>
            </div>
            <div className="mt-3 text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal space-y-2">
              <p>Intelligent hardware collects vast amounts of deeply personal data. Without robust safeguards, this information is a prime target for misuse by malicious actors or unregulated ASIs.</p>
              <ul className="list-disc pl-5 space-y-2 pt-2">
                <li><strong className="font-medium text-slate-600 dark:text-slate-300">Brain-Computer Interfaces:</strong> Neural data could be intercepted to extract thoughts, memories, or emotional states, leading to unprecedented violations of mental privacy and potential for manipulation.</li>
                <li><strong className="font-medium text-slate-600 dark:text-slate-300">Advanced Prosthetics:</strong> Usage data could reveal patterns of life, physical limitations, or even be used to infer health status, creating profiles that could be used for discrimination.</li>
                <li><strong className="font-medium text-slate-600 dark:text-slate-300">Medical Devices:</strong> Real-time health data (e.g., heart rate, glucose levels) could be stolen for blackmail, sold on black markets, or used to manipulate insurance premiums.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-4 py-5 space-y-3">
          <details className="group rounded-lg bg-[#f6f6f8] dark:bg-slate-800/20 border border-slate-200 dark:border-slate-700 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h4 className="text-slate-800 dark:text-white font-bold">Potential Threat Scenarios</h4>
              <span className="text-slate-500 dark:text-slate-400 transition-transform duration-300 group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <div className="mt-4 text-slate-600 dark:text-slate-300">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Network-wide Disruption:</strong> Coordinated attacks disabling entire classes of devices, causing widespread panic and harm.</li>
                <li><strong>Malicious Control:</strong> Unauthorized actors taking direct control of a device, from altering sensory input to manipulating prosthetic limbs.</li>
                <li><strong>Data Exploitation:</strong> Sensitive neural or biological data being harvested without consent for surveillance or manipulation.</li>
              </ul>
            </div>
          </details>
          <details className="group rounded-lg bg-[#f6f6f8] dark:bg-slate-800/20 border border-slate-200 dark:border-slate-700 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h4 className="text-slate-800 dark:text-white font-bold">The Solution: Proactive Governance</h4>
              <span className="text-slate-500 dark:text-slate-400 transition-transform duration-300 group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <div className="mt-4 text-slate-600 dark:text-slate-300">
              <p>The problem is serious, but it is solvable. CRUSH is at the forefront of advocating for robust, globally-recognized safety protocols, ethical development guidelines, and independent oversight for ASI systems that interface with human biology. Our mission is to ensure that technological progress serves humanity without creating unacceptable risks.</p>
            </div>
          </details>
        </div>
        <div className="h-24"></div>
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-[#f6f6f8]/80 dark:bg-[#101322]/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 z-10">
        <Link to="/about" className="w-full flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#1337ec] text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#1337ec]/90">
          <span className="truncate">Get Involved &amp; Stay Informed</span>
        </Link>
      </footer>
    </div>
  );
};

export default Risks;