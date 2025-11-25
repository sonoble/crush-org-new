
import React from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../App';

const Home: React.FC = () => {
  const { openMenu } = useMenu();

  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101322] font-display text-white min-h-screen flex flex-col group/design-root overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-[#f6f6f8]/80 dark:bg-[#101322]/80 backdrop-blur-sm border-b border-gray-200 dark:border-white/5 transition-colors">
        <div className="flex items-center p-4">
          <div className="flex size-12 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined text-gray-900 dark:text-white text-3xl">hub</span>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="flex items-baseline gap-1 text-2xl font-brand font-black leading-none tracking-widest text-gray-900 dark:text-white">
              <span className="relative">C<span className="absolute -bottom-1 left-1/2 h-0.5 w-full -translate-x-1/2 transform rounded-full bg-[#1337ec]"></span></span>
              <span>R</span>
              <span>U</span>
              <span>S</span>
              <span className="relative">H<span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-white/50"></span></span>
            </div>
          </div>
          <div className="flex w-12 items-center justify-end">
            <button 
              onClick={openMenu}
              className="flex h-12 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-transparent text-gray-900 dark:text-white p-0"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="@container px-4">
          <div className="flex min-h-[520px] flex-col gap-6 rounded-xl bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center @[480px]:gap-8" 
               style={{ backgroundImage: 'linear-gradient(rgba(16, 19, 34, 0.7) 0%, rgba(16, 19, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCQ7scDLnlL9qabf1aAjmtS7I2NDO4tg7h36oK-S9kzNyuKjN1xeZcmDkH9pIp3ROrfeTimz0ILbWzur-yfFb2D-bPUVOWgLwedwGw2G5dCmenPjVe1MAjVnUCa5m1-qKeaWJb585N02lHXKJlmT0lAHJbiP2hdQo2E5NInnndxamzwX6oU9xma13VpifZwEzmFrfICYPelkfgIWACps6BRIQ3g_FI6iX0g-QhuVNfzc8uZgDoaWX9fFOxeAMQyU0kmCXaBOJGag0")' }}>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white @[480px]:text-5xl">Navigating the Future of Super-Intelligence</h1>
              <h2 className="text-base font-normal leading-normal text-gray-300 @[480px]:text-lg">Championing responsible governance for humanity's coexistence with intelligent hardware.</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/about" className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#1337ec] px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#1337ec]/90">
                <span className="truncate">Get Involved</span>
              </Link>
              <Link to="/resources" className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-200/10 px-5 text-base font-bold leading-normal tracking-[0.015em] text-white backdrop-blur-sm transition-colors hover:bg-gray-200/20">
                <span className="truncate">Our Research</span>
              </Link>
            </div>
          </div>
        </div>

        <section className="py-12 px-4">
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white px-4 pb-3 pt-5 font-brand">Our Mission</h2>
          <p className="text-base font-normal leading-normal text-gray-600 dark:text-gray-300 px-4"> The Center for Responsible Use of Super-Intelligent Hardware (CRUSH) is dedicated to ensuring that advanced artificial intelligence is developed and deployed safely, ethically, and for the benefit of all humanity. We research, advocate, and build consensus on governance frameworks to mitigate existential risks and guide our shared future. </p>
        </section>

        <section className="py-8">
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white px-8 pb-6 font-brand">Understanding the Risks</h2>
          <div className="flex snap-x snap-mandatory scroll-pl-4 auto-cols-[85%] gap-4 overflow-x-auto px-4 pb-4 sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[22%] lg:justify-center lg:px-8 no-scrollbar">
            
            <Link to="/risks" className="flex w-full shrink-0 snap-start flex-col gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 backdrop-blur-sm hover:border-[#1337ec] dark:hover:border-[#1337ec] transition-colors shadow-sm dark:shadow-none">
              <span className="material-symbols-outlined text-[#1337ec] text-4xl">crisis_alert</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Existential Threats</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Analyzing scenarios where ASI could pose a catastrophic risk to humanity.</p>
            </Link>

            <Link to="/risks" className="flex w-full shrink-0 snap-start flex-col gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 backdrop-blur-sm hover:border-[#1337ec] dark:hover:border-[#1337ec] transition-colors shadow-sm dark:shadow-none">
              <span className="material-symbols-outlined text-[#1337ec] text-4xl">memory</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Hardware Sovereignty</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Addressing the challenges of dependency on centralized intelligent hardware.</p>
            </Link>

            <Link to="/governance" className="flex w-full shrink-0 snap-start flex-col gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 backdrop-blur-sm hover:border-[#1337ec] dark:hover:border-[#1337ec] transition-colors shadow-sm dark:shadow-none">
              <span className="material-symbols-outlined text-[#1337ec] text-4xl">gavel</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ethical Governance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Developing frameworks for the moral and ethical alignment of ASI systems.</p>
            </Link>

            <div className="flex w-full shrink-0 snap-start flex-col gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 backdrop-blur-sm shadow-sm dark:shadow-none">
              <span className="material-symbols-outlined text-[#1337ec] text-4xl">trending_down</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Economic Disruption</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Preparing for the societal and economic shifts caused by super-intelligence.</p>
            </div>

          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 rounded-xl bg-[#1337ec]/10 p-8 text-center ring-1 ring-inset ring-[#1337ec]/20">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white font-brand">Shape the Future with Us</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">The path to a safe and beneficial super-intelligent future requires collective action. Your voice, expertise, and support are crucial.</p>
            <Link to="/about" className="mt-4 flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#1337ec] px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#1337ec]/90">
              <span className="truncate">Sign the Charter</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-[#101322] border-t border-gray-200 dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a className="text-gray-500 hover:text-gray-400" href="#">
              <span className="sr-only">X</span>
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.6823 10.2496L20.8202 2H18.9439L13.0249 9.30396L8.1401 2H2.5L9.98687 13.0312L2.5 22H4.37633L10.6631 14.2493L15.8699 22H21.5L13.6823 10.2496ZM11.455 13.2L10.751 12.193L5.05051 3.23864H7.3995L11.9363 10.043L12.6403 11.0502L18.6732 20.7614H16.3241L11.455 13.2Z"></path>
              </svg>
            </a>
            <a className="text-gray-500 hover:text-gray-400" href="#">
              <span className="sr-only">LinkedIn</span>
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
              </svg>
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">© 2024 crush.org. All rights reserved. | <a className="hover:underline" href="#">Privacy Policy</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
