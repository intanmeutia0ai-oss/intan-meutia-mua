import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, HeartHandshake, Eye } from 'lucide-react';
import { MUA_PROFILE } from '../data/muaData';

export const HygieneStandards: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Standar Keamanan & Kebersihan
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight [text-wrap:balance]">
            100% Higienitas Medis & Kenyamanan Kulit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Kesehatan kulit Anda adalah prioritas tertinggi. Kami menerapkan protokol sterilisasi berlapis kelas rumah sakit untuk setiap sesi rias.
          </p>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MUA_PROFILE.hygieneCommitments.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-stone-200 bg-stone-50/40 hover:bg-white hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-900 mb-4">
                {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                {idx === 1 && <Eye className="w-5 h-5" />}
                {idx === 2 && <Sparkles className="w-5 h-5" />}
                {idx === 3 && <HeartHandshake className="w-5 h-5" />}
              </div>
              <h3 className="font-semibold text-stone-900 text-sm mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sanitization Checklist summary bar */}
        <div className="mt-10 p-5 rounded-xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
            <span className="font-normal text-stone-200">
              Setiap brush set telah melalui proses UV Cabinet Sterilizer selama 30 menit sebelum dibawa ke lokasi acara Anda.
            </span>
          </div>
          <span className="font-mono text-amber-300 text-[11px] whitespace-nowrap">
            ISO-Compliant Hygiene Routine
          </span>
        </div>

      </div>
    </section>
  );
};
