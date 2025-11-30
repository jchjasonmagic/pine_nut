
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavigationProps {
  onOrder: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '源产地', href: '#origin' },
    { name: '品质对比', href: '#quality' },
    { name: '加工工艺', href: '#process' },
    { name: '价格表', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-stone-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center text-amber-500 font-serif font-bold text-xl shadow-lg">
            实
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-serif font-bold leading-none ${isScrolled ? 'text-stone-900' : 'text-stone-900 md:text-white'}`}>
              长白山实全
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase ${isScrolled ? 'text-stone-500' : 'text-stone-600 md:text-stone-300'}`}>
              PREMIUM PINE NUTS
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOrder}
            className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-amber-600/20"
          >
            <ShoppingBag size={16} />
            立即订购
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-stone-800' : 'text-stone-800 md:text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-2xl py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-stone-600 hover:text-amber-600 py-3 block border-b border-stone-100 last:border-0 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <button 
             onClick={() => {
               setIsMobileMenuOpen(false);
               onOrder();
             }} 
             className="w-full bg-stone-900 text-white px-5 py-4 rounded-xl mt-4 flex items-center justify-center gap-2 font-bold"
            >
            <ShoppingBag size={18} />
            立即订购
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
