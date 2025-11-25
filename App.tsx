import React, { useState, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Risks from './pages/Risks';
import Governance from './pages/Governance';
import Resources from './pages/Resources';

// Context to manage mobile menu state across pages
interface MenuContextType {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
});

export const useMenu = () => useContext(MenuContext);

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useMenu();
  const location = useLocation();

  if (!isMenuOpen) return null;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Risks', path: '/risks' },
    { name: 'Governance', path: '/governance' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#101322]/95 backdrop-blur-lg flex flex-col items-center justify-center animate-fade-in">
      <button 
        onClick={closeMenu}
        className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-white transition-colors"
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>
      
      <nav className="flex flex-col gap-8 text-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={`text-3xl font-bold transition-colors ${
              location.pathname === link.path 
                ? 'text-[#1337ec]' 
                : 'text-white hover:text-[#1337ec]'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      
      <div className="absolute bottom-10 text-white/50 text-sm">
        © 2024 CRUSH.org
      </div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
      <HashRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </HashRouter>
    </MenuContext.Provider>
  );
}