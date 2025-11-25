
import React from 'react';
import { useMenu } from '../App';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { openMenu } = useMenu();

  return (
    <div className="bg-[#f6f6f8] dark:bg-[#0A192F] font-display text-[#0A192F] dark:text-[#FFFFFF] min-h-screen flex flex-col group/design-root overflow-x-hidden">
      <div className="flex items-center bg-[#f6f6f8]/80 dark:bg-[#0A192F]/80 p-4 pb-2 justify-between sticky top-0 z-10 backdrop-blur-sm">
        <button onClick={openMenu} className="flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-[#0A192F] dark:text-[#FFFFFF] text-3xl">menu</span>
        </button>
        <h2 className="text-2xl font-brand font-bold leading-tight tracking-wider flex-1 text-center text-[#0A192F] dark:text-[#FFFFFF]">CRUSH</h2>
        <div className="flex w-12 items-center justify-end"></div>
      </div>
      
      <div className="@container">
        <div className="@[480px]:p-4">
          <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-start justify-end px-4 pb-10 @[480px]:px-10" 
               style={{ backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.4) 0%, rgba(10, 25, 47, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvDQfBx9IrLvbeqYc2anHi3wD6UctIvhAHu3NeNLYXYrU1m3D4DA1KXt8Kg3YuoxxYtRaDP5NU5r7AI6wQXu0fyNSjvcftiy3fniBiLFB9zo_eyQq66N1Ys-ruXhzJvSZri6CNMT_2a7wkoWmgcaT_F5xuUiM-fLuqkYXC0qRxA44y4f5bQtiSEo7Oik84PQGrtdP7bivgI08gE4GcP3Gllg1kDihRQIMvqJwmjMMjXYJXdxnQ6XmIBiCMtKUq9AnqqZFOuo7QdXg")' }}>
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Safeguarding Humanity's Future in the Age of ASI</h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">CRUSH is dedicated to ensuring Artificial Super Intelligence is developed and governed for the benefit of all.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-[#0A192F] dark:text-[#FFFFFF] pb-3 border-b-2 border-[#00BFFF]/50">Our Mission &amp; Values</h2>
        <p className="text-base font-normal leading-relaxed pt-4 text-[#334155] dark:text-[#8892B0]">We are a non-profit organization focused on the governance of Artificial Super Intelligence. Our mission is to steer ASI development towards beneficial outcomes and mitigate existential risks. We are guided by the principles of <strong className="text-[#0A192F] dark:text-[#FFFFFF]">responsibility, foresight, collaboration,</strong> and a steadfast commitment to human values.</p>
      </div>

      <div className="px-4 py-8 bg-white dark:bg-[#0A192F]/30">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-[#0A192F] dark:text-[#FFFFFF] pb-3 border-b-2 border-[#00BFFF]/50">Our Origins: The AIBO Spark</h2>
        <div className="flex flex-col lg:flex-row gap-8 pt-6 items-center">
          <div className="flex-1 space-y-4">
            <p className="text-base font-normal leading-relaxed text-[#334155] dark:text-[#8892B0]">
              CRUSH was founded in 1998, a year marked by the release of Sony’s groundbreaking AIBO. Witnessing the lifelike interactions and autonomous behavior of this robotic dog, our founders were captivated. They envisioned a near-future where Machine Learning and AI would seamlessly integrate into our lives, becoming indispensable assistants, companions, and caretakers.
            </p>
            <p className="text-base font-normal leading-relaxed text-[#334155] dark:text-[#8892B0]">
              For years, we championed the potential of AI to assist people. However, as computational power grew exponentially and systems began to surpass human capabilities in specialized domains, our perspective shifted. We realized that the very autonomy we celebrated in a robotic pet could pose existential threats when applied to super-intelligent systems connected to critical infrastructure.
            </p>
            <p className="text-base font-bold leading-relaxed text-[#0A192F] dark:text-[#FFFFFF]">
              Today, our focus has pivoted. While we still believe in the promise of AI, we now dedicate ourselves to the governance and safety protocols necessary to ensure that the transition from helpful assistants to Super-Intelligent hardware remains safe for humanity.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-black">
               {/* 
                  Using a stable Wikimedia Commons URL for the AIBO ERS-110 to represent the 1998 era.
               */}
               <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sony_AIBO_ERS-110.jpg/640px-Sony_AIBO_ERS-110.jpg" 
                alt="Sony AIBO ERS-110 from 1999" 
                className="w-full h-64 object-contain bg-black/50 transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-xs font-medium">1998: The Inspiration (AIBO ERS-110)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-black/10">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=500" 
                  alt="Abstract Neural Network Art" 
                  className="w-full h-32 object-cover hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-black/10">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=500" 
                  alt="Futuristic cyborg interface" 
                  className="w-full h-32 object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 bg-[#f6f6f8] dark:bg-[#0A192F]/50">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-[#0A192F] dark:text-[#FFFFFF] pb-3 border-b-2 border-[#00BFFF]/50">Our Coalition</h2>
        <p className="text-base font-normal leading-relaxed pt-4 pb-6 text-[#334155] dark:text-[#8892B0]">Our strength lies in our multidisciplinary coalition. We bring together a diverse array of experts and stakeholders to ensure a holistic approach to ASI governance, representing a broad spectrum of human experience and expertise.</p>
        <p className="text-base font-normal leading-relaxed text-[#334155] dark:text-[#8892B0] pb-8">Each perspective is vital: <strong className="text-[#0A192F] dark:text-[#FFFFFF]">Compute Scientists</strong> and <strong className="text-[#0A192F] dark:text-[#FFFFFF]">AI/ML Specialists</strong> provide the technical expertise to foresee capabilities and risks, while <strong className="text-[#0A192F] dark:text-[#FFFFFF]">Assisted Device Users</strong> offer invaluable, lived experience on the human-hardware interface, grounding our work in real-world impact and safety. This synthesis of deep technical knowledge and human-centric insight is crucial for creating robust and responsible governance.</p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800/20 rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-3xl text-[#00BFFF]">computer</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A192F] dark:text-[#FFFFFF]">Technical Experts</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#334155] dark:text-[#8892B0]">Leading AI/ML specialists, computer scientists, and hardware engineers who understand the technical frontiers and challenges of ASI development.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800/20 rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-3xl text-[#00BFFF]">groups</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A192F] dark:text-[#FFFFFF]">Human-Centric Voices</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#334155] dark:text-[#8892B0]">Ethicists, sociologists, and users of assisted devices whose direct reliance on intelligent hardware provides invaluable perspective on safety and responsibility.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800/20 rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-3xl text-[#00BFFF]">account_balance</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A192F] dark:text-[#FFFFFF]">Policy &amp; Governance Specialists</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#334155] dark:text-[#8892B0]">Public policy experts, international relations scholars, and legal professionals dedicated to building robust, global governance frameworks for ASI.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-[#0A192F] dark:text-[#FFFFFF] pb-3 border-b-2 border-[#00BFFF]/50">Our Approach</h2>
        <div className="mt-8 space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-4xl text-[#00BFFF]">science</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A192F] dark:text-[#FFFFFF]">Proactive Research</h3>
              <p className="mt-1 text-base leading-relaxed text-[#334155] dark:text-[#8892B0]">We identify, analyze, and publish research on potential risks and safety protocols for advanced AI systems before they are developed.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-4xl text-[#00BFFF]">gavel</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A192F] dark:text-[#FFFFFF]">Policy Advocacy</h3>
              <p className="mt-1 text-base leading-relaxed text-[#334155] dark:text-[#8892B0]">We collaborate with global policymakers to craft and promote sensible, effective regulations that foster safe innovation.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-4xl text-[#00BFFF]">school</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A192F] dark:text-[#FFFFFF]">Public Education</h3>
              <p className="mt-1 text-base leading-relaxed text-[#334155] dark:text-[#8892B0]">We work to inform the public and key stakeholders about the implications of ASI, fostering a global dialogue on humanity's future.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-8 pb-12 bg-[#f6f6f8] dark:bg-[#0A192F]/50 text-center">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-[#0A192F] dark:text-[#FFFFFF]">Join Our Mission</h2>
        <p className="mt-4 text-base leading-relaxed text-[#334155] dark:text-[#8892B0] max-w-xl mx-auto">The future of humanity depends on the choices we make today. Help us ensure that future is safe, prosperous, and guided by human values.</p>
        <div className="mt-8 flex justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#00BFFF] text-[#0A192F] text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Get Involved</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
