import React from 'react';
import { Star, Quote, MapPin, Calendar, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/muaData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="ulasan" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
              Bukti Nyata Kepuasan Klien
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight [text-wrap:balance]">
              Cerita Bahagia Pengantin Intan Meutia
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
              Kisah nyata dari para pengantin yang telah merasakan ketenangan, kenyamanan, dan pesona abadi di hari istimewa mereka.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-stone-200 self-start md:self-auto shrink-0 shadow-xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs text-stone-700">
              <span className="font-bold text-stone-900">4.98 / 5.0</span>
              <span className="text-stone-400 ml-1">· 850+ Ulasan Terverifikasi</span>
            </div>
          </div>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating & Look type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                    {testi.lookType}
                  </span>
                </div>

                {/* Content Quote */}
                <p className="font-editorial text-stone-800 text-base sm:text-lg leading-relaxed italic mb-6">
                  &ldquo;{testi.content}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${testi.avatarBg}`}
                  >
                    {testi.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900">
                      {testi.clientName}
                    </h4>
                    <p className="text-[11px] text-stone-500">{testi.event}</p>
                  </div>
                </div>

                <div className="text-right text-[11px] text-stone-400">
                  <div className="flex items-center gap-1 justify-end">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    <span>{testi.venue.split(',')[0]}</span>
                  </div>
                  <div className="mt-0.5">{testi.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
