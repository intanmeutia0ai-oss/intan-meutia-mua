import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Award, Heart } from 'lucide-react';
import { MUA_PROFILE } from '../data/muaData';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePortfolio }) => {
  const [heroImg] = useState<string | null>(() => {
    return localStorage.getItem('intan_hero_bridal_photo') || null;
  });

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      {/* Background soft ambient luxury gradient */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Split Screen 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-stone-500 uppercase">
              <span>Spesialis Bridal & Adat Aceh / Nusantara</span>
              <span aria-hidden="true">·</span>
              <span>Banda Aceh dan sekitarnya</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.15] [text-wrap:balance]">
              Elegansi Abadi, Sentuhan Alami &{' '}
              <span className="italic font-normal text-rose-900/90 underline decoration-rose-300 decoration-1 underline-offset-8">
                Flawless
              </span>
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
              {MUA_PROFILE.bio}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold tracking-wide rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Konsultasi & Reservasi</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onExplorePortfolio}
                className="px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-stone-800 hover:text-stone-950 text-sm font-medium rounded-lg transition-colors bg-white/70 backdrop-blur-xs cursor-pointer"
              >
                Lihat Galeri Karya
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>100% Produk High-End Original</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>UV Sterilized Tool Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-stone-700" />
                <span>Certified International MUA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Artpiece (Selector 1) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-stone-300/80 bg-stone-900 text-white shadow-xl group">
              {/* Elegant Artistic Bridal Visual Canvas with User's Photo */}
              <div className="relative aspect-4/5 w-full bg-linear-to-b from-[#3D0A14] via-[#5A121E] to-stone-950 flex flex-col justify-between p-7 overflow-hidden">
                
                {/* Real Photo Image Layer (download.jpg) */}
                <img
                  src={heroImg || "/download.jpg"}
                  alt="Rias Pengantin Mahkota Adat Aceh oleh Intan Meutia"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 z-0"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!heroImg) {
                      target.style.display = 'none';
                    }
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* Contrast scrim for readability */}
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/95 via-stone-950/40 to-black/30 z-1 pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest text-amber-200 uppercase bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded">
                    Signature Adat Aceh
                  </span>
                  <span className="text-xs text-amber-100 font-editorial italic bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded">
                    Mahkota Emas & Beludru Maroon
                  </span>
                </div>

                {/* Bottom Card Summary */}
                <div className="relative z-10 border-t border-white/15 pt-3.5 flex items-center justify-between text-xs text-stone-200 bg-black/40 backdrop-blur-xs -mx-7 -mb-7 px-7 py-4">
                  <div>
                    <span className="block text-[10px] text-amber-200/80 uppercase tracking-wider">MUA Lead</span>
                    <span className="font-semibold text-white">Intan Meutia</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-amber-200/80 uppercase tracking-wider">Lokasi Layanan</span>
                    <span className="font-mono text-amber-200 font-medium">Banda Aceh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Luxury Accent Note */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md border border-stone-200 rounded-xl p-3.5 shadow-lg items-center gap-3 max-w-xs z-20">
              <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 text-rose-800">
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-stone-900">850+ Pengantin</p>
                <p className="text-stone-500 text-[11px]">Telah mempercayakan momen sakralnya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Row below split (Adhering to Section 2.B rules) */}
        <div className="mt-16 pt-10 border-t border-stone-200/90 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tabular-nums">
              {MUA_PROFILE.happyBrides}+
            </div>
            <div className="text-xs text-stone-500 mt-1">Pengantin & Klien Bahagia</div>
          </div>

          <div>
            <div className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tabular-nums">
              {MUA_PROFILE.experienceYears}+ Tahun
            </div>
            <div className="text-xs text-stone-500 mt-1">Pengalaman Artistik Profesional</div>
          </div>

          <div>
            <div className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tabular-nums">
              100%
            </div>
            <div className="text-xs text-stone-500 mt-1">Produk Premium & Dermatologi Teruji</div>
          </div>

          <div>
            <div className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tabular-nums">
              {MUA_PROFILE.clientSatisfaction}<span className="text-lg font-normal text-stone-400">/5.0</span>
            </div>
            <div className="text-xs text-stone-500 mt-1">Rating Kepuasan Pengantin</div>
          </div>
        </div>

      </div>
    </section>
  );
};
