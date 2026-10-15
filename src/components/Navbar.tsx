import React, { useState, useEffect } from 'react';
import { CalendarCheck, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80'
          : 'bg-[#FAF8F5] border-b border-stone-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="font-editorial text-2xl tracking-wider text-stone-900 font-medium whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          INTAN MEUTIA
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a
            href="#portofolio"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-stone-400"
          >
            Portofolio
          </a>
          <a
            href="#layanan"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-stone-400"
          >
            Paket Rias
          </a>
          <a
            href="#profil"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-stone-400"
          >
            Tentang Intan
          </a>
          <a
            href="#konsultasi"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-stone-400"
          >
            Konsultasi Shade
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Reservasi Jadwal</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-950"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAF8F5] px-6 py-4 space-y-3">
          <a
            href="#portofolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 py-1 hover:text-stone-950"
          >
            Portofolio
          </a>
          <a
            href="#layanan"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 py-1 hover:text-stone-950"
          >
            Paket Rias
          </a>
          <a
            href="#profil"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 py-1 hover:text-stone-950"
          >
            Tentang Intan
          </a>
          <a
            href="#konsultasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 py-1 hover:text-stone-950"
          >
            Konsultasi Shade
          </a>
        </div>
      )}
    </header>
  );
};
