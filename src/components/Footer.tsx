import React from 'react';
import { Heart, Instagram, Mail, MessageSquare, MapPin } from 'lucide-react';
import { MUA_PROFILE } from '../data/muaData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-editorial text-2xl tracking-wider text-white font-medium block">
              INTAN MEUTIA
            </span>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Professional Makeup Artist & Bridal Stylist khusus adat nusantara dan modern bridal. Menghadirkan riasan anggun, flawless, dan tahan lama untuk momen sakral terindah hidup Anda.
            </p>
            <div className="text-xs text-stone-400 pt-2 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              <span>Studio: Banda Aceh dan sekitarnya (Available Worldwide)</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-200">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#portofolio" className="hover:text-white transition-colors">
                  Galeri Portofolio
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Paket Rias & Harga
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  Tentang Intan Meutia
                </a>
              </li>
              <li>
                <a href="#konsultasi" className="hover:text-white transition-colors">
                  Konsultasi Shade & Skin Prep
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-200">
              Kontak & Media Sosial
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <a
                href={`https://wa.me/${MUA_PROFILE.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {MUA_PROFILE.whatsappDisplay}</span>
              </a>
              <a
                href="https://instagram.com/intnmeutia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
                <span>Instagram: {MUA_PROFILE.instagram}</span>
              </a>
              <a
                href={`mailto:${MUA_PROFILE.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-300" />
                <span>Email: {MUA_PROFILE.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Intan Meutia MUA. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with devotion for brides across Indonesia</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
