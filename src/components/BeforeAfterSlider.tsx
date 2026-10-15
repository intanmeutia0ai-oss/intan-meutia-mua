import React, { useState, useRef } from 'react';
import { Sparkles, SlidersHorizontal, Info, Eye } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(clamped);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
              The Magic Touch
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight [text-wrap:balance]">
              Transformasi Alami & Flawless
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
              Geser tuas pembanding untuk melihat langsung bagaimana teknik kompleksi Intan Meutia menyamarkan ketidaksempurnaan kulit sembari mempertahankan pori-pori sehat dan kilau alami.
            </p>
          </div>

          {/* Quick preset toggle buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 bg-stone-200/70 p-1.5 rounded-lg text-xs font-medium">
            <button
              onClick={() => setSliderPos(15)}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                sliderPos < 30 ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Fokus Before (Prep)
            </button>
            <button
              onClick={() => setSliderPos(50)}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                sliderPos >= 30 && sliderPos <= 70 ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Split 50:50
            </button>
            <button
              onClick={() => setSliderPos(85)}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                sliderPos > 70 ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Fokus After (Flawless)
            </button>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onPointerMove={handlePointerMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-16/10 sm:aspect-16/9 w-full rounded-2xl overflow-hidden border border-stone-300 shadow-lg select-none cursor-ew-resize bg-stone-900 touch-none"
          >
            {/* Layer 1: AFTER Riasan (Full Background) */}
            <div className="absolute inset-0 bg-linear-to-tr from-stone-950 via-rose-950/60 to-stone-900 flex items-center justify-center p-8 sm:p-12 text-white">
              {/* Subtle radiant background elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(244,114,182,0.18),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_65%,rgba(251,191,36,0.15),transparent_60%)]" />

              <div className="relative z-10 text-right ml-auto max-w-sm space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 border border-amber-300/40 rounded text-amber-200 text-xs font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AFTER: Flawless HD Glow</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-amber-50 font-normal leading-snug">
                  Radiant Complexion & Defined Features
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-200/90 text-right">
                  <li>✨ Pori-pori tersamarkan tanpa rasa tebal atau dempul</li>
                  <li>✨ Riasan mata berdimensi tajam namun teduh elegan</li>
                  <li>✨ Kontur wajah proporsional dan hidung berstruktur anggun</li>
                  <li>✨ Tahan air mata, keringat, dan sebum hingga 16 jam</li>
                </ul>
              </div>
            </div>

            {/* Layer 2: BEFORE Riasan (Clipped by slider position) */}
            <div
              className="absolute inset-0 bg-linear-to-tr from-stone-900 via-stone-800 to-stone-900 flex items-center justify-start p-8 sm:p-12 text-stone-300 border-r border-amber-400 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative z-10 text-left max-w-sm space-y-4 shrink-0 min-w-[280px]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-700/60 border border-stone-500/40 rounded text-stone-300 text-xs font-semibold tracking-wider uppercase">
                  <Eye className="w-3.5 h-3.5" />
                  <span>BEFORE: Clean Skin Prep</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-stone-100 font-normal leading-snug">
                  Bare Skin & Deep Hydration Prep
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-400 text-left">
                  <li>• Tekstur kulit asli sebelum koreksi warna & shading</li>
                  <li>• Tahapan hidrasi mendalam dengan peptide essence</li>
                  <li>• Pengecekan undertone kulit (Warm / Neutral / Cool)</li>
                  <li>• Priming pelindung pori dan pengunci kelembapan</li>
                </ul>
              </div>
            </div>

            {/* Slider Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-stone-900 text-white border-2 border-white shadow-xl flex items-center justify-center transform -translate-x-1/2">
                <SlidersHorizontal className="w-4 h-4 text-amber-300" />
              </div>
            </div>

            {/* Floating Guide Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] text-stone-300 flex items-center gap-1.5 pointer-events-none">
              <Info className="w-3 h-3 text-amber-300" />
              <span>Geser tuas horizontal untuk melihat perbandingan</span>
            </div>
          </div>

          {/* Details below slider */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-600 bg-white p-5 rounded-xl border border-stone-200">
            <div>
              <span className="font-semibold text-stone-900 block mb-1">Teknik Complexion:</span>
              <span>Micro-Layering Buffing & Air-Infused Setting untuk menghindari tampilan cakey.</span>
            </div>
            <div>
              <span className="font-semibold text-stone-900 block mb-1">Ketahanan Produk:</span>
              <span>Waterproof, cry-proof saat prosesi sungkeman, dan anti-transfer ke masker atau busana.</span>
            </div>
            <div>
              <span className="font-semibold text-stone-900 block mb-1">Perawatan Kulit:</span>
              <span>Disesuaikan dengan sensitivitas kulit (acne-prone, eczema, rosacea, atau kombinasi).</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
