import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/muaData';

interface PortfolioGalleryProps {
  onSelectBookingPackage?: (packageName: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bridal' | 'adat' | 'wisuda' | 'editorial'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portofolio" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
              Koleksi Riasan Pilihan
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight [text-wrap:balance]">
              Galeri Mahakarya Intan Meutia
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600">
              Setiap goresan mencerminkan keanggunan, karakter unik pengantin, dan ketahanan sempurna sepanjang hari.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Control conforming to Section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Semua Karya
            </button>
            <button
              onClick={() => setActiveFilter('bridal')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'bridal'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Bridal Modern
            </button>
            <button
              onClick={() => setActiveFilter('adat')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'adat'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Adat Nusantara
            </button>
            <button
              onClick={() => setActiveFilter('wisuda')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'wisuda'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Wisuda & Pesta
            </button>
            <button
              onClick={() => setActiveFilter('editorial')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'editorial'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Editorial & Prewedding
            </button>
          </div>
        </div>

        {/* Dynamic Bento Box Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer rounded-2xl border border-stone-200/90 bg-stone-50/50 hover:bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Visual Art Box */}
                <div
                  className={`relative w-full overflow-hidden bg-linear-to-br ${item.gradientTheme} p-6 sm:p-8 flex flex-col justify-between text-stone-900 ${
                    isFeatured ? 'aspect-16/9 sm:aspect-21/9' : 'aspect-4/3'
                  }`}
                >
                  {/* Subtle pattern texture */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:14px_14px]" />
                  
                  {/* Top metadata unboxed (Zero-pill discipline) */}
                  <div className="relative z-10 flex items-center justify-between text-xs text-stone-700">
                    <span className="font-semibold tracking-wider uppercase text-[11px]">
                      {item.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px] opacity-75">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  {/* Center Look Identity Showcase */}
                  <div className="relative z-10 my-auto py-4">
                    <h3 className="font-editorial text-xl sm:text-2xl lg:text-3xl font-medium text-stone-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-700/90 mt-2 line-clamp-2 max-w-xl font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Swatches & Action Indicator */}
                  <div className="relative z-10 pt-3 border-t border-stone-900/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {item.palette.map((color, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-4 h-4 rounded-full border border-white/60 shadow-xs"
                          style={{ backgroundColor: color }}
                          title={`Color shade: ${color}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:underline">
                      <span>Detail Riasan</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Card Content & Client Details */}
                <div className="p-5 bg-white border-t border-stone-200">
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="font-medium text-stone-900">{item.client}</span>
                    <span className="text-[11px]">{item.lookDetails.complexion.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-500 truncate">
                    <MapPin className="w-3 h-3 shrink-0 text-stone-400" />
                    <span className="truncate">{item.venue}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal Detail Viewer */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`p-6 sm:p-8 bg-linear-to-br ${selectedItem.gradientTheme} border-b border-stone-200 relative`}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 transition-colors cursor-pointer shadow-xs"
                aria-label="Tutup detail modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-semibold tracking-wider text-stone-700 uppercase mb-2">
                {selectedItem.categoryLabel} · {selectedItem.date}
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-900 font-medium">
                {selectedItem.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-stone-700 mt-2">
                <span className="font-semibold">{selectedItem.client}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {selectedItem.venue}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Konsep & Cerita Riasan
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Look Breakdown */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Spesifikasi Formula & Artistry
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <span className="font-semibold text-stone-900 block mb-1">Complexion & Base:</span>
                    <span className="text-stone-600">{selectedItem.lookDetails.complexion}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <span className="font-semibold text-stone-900 block mb-1">Mata & Alis:</span>
                    <span className="text-stone-600">{selectedItem.lookDetails.eyes}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <span className="font-semibold text-stone-900 block mb-1">Riasan Bibir:</span>
                    <span className="text-stone-600">{selectedItem.lookDetails.lips}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <span className="font-semibold text-stone-900 block mb-1">Highlight & Shading:</span>
                    <span className="text-stone-600">{selectedItem.lookDetails.highlights}</span>
                  </div>
                </div>
              </div>

              {/* Color Palette breakdown */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Palet Warna yang Digunakan
                </h4>
                <div className="flex items-center gap-3">
                  {selectedItem.palette.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span
                        className="w-6 h-6 rounded-md border border-stone-300 shadow-xs"
                        style={{ backgroundColor: color }}
                      />
                      <span className="font-mono text-xs text-stone-500 uppercase">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote if available */}
              {selectedItem.testimonialQuote && (
                <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80">
                  <p className="font-editorial italic text-sm text-rose-950">
                    &ldquo;{selectedItem.testimonialQuote}&rdquo;
                  </p>
                  <p className="text-[11px] font-semibold text-rose-800 mt-2">
                    — {selectedItem.client}
                  </p>
                </div>
              )}

              {/* Close Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                >
                  Tutup Tampilan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
