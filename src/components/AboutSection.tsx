import React, { useState } from 'react';
import { Award, CheckCircle2, Sparkles, MapPin, HeartHandshake } from 'lucide-react';
import { MUA_PROFILE } from '../data/muaData';

export const AboutSection: React.FC = () => {
  const [profileImg] = useState<string | null>(() => {
    return localStorage.getItem('intan_meutia_profile_photo') || null;
  });

  return (
    <section id="profil" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Profil & Filosofi Rias
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight [text-wrap:balance]">
            Mengenal Intan Meutia
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Dedikasi tinggi dalam seni tata rias pengantin yang memadukan keanggunan tradisi luhur dengan teknik modern internasional.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Studio Vibe Card (Selector 1 & 2) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 shadow-sm p-6 relative">
              <div className="aspect-square rounded-xl bg-linear-to-tr from-stone-900 via-stone-800 to-rose-950 p-6 flex flex-col justify-between text-white relative overflow-hidden group">
                
                {/* Real Photo Image Layer (Intan Meutia) */}
                <img
                  src={profileImg || "/intan_meutia.jpg"}
                  alt="Intan Meutia - Professional Makeup Artist Banda Aceh"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 z-0"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!profileImg && target.src.endsWith('/intan_meutia.jpg')) {
                      target.src = '/WhatsApp Image 2026-10-15 at 10.12.57.jpeg';
                    } else if (!profileImg) {
                      target.style.display = 'none';
                    }
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay for crystal-clear readability */}
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 via-stone-950/30 to-black/30 z-1 pointer-events-none" />
                
                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between text-xs text-stone-200">
                  <span className="font-mono uppercase text-[10px] tracking-wider text-amber-200 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded">
                    Professional MUA
                  </span>
                  <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded text-stone-200 text-[11px]">
                    Banda Aceh
                  </span>
                </div>

                {/* Bottom Signature Quote */}
                <div className="relative z-10 pt-3 border-t border-white/20 text-center bg-black/40 backdrop-blur-xs -mx-6 -mb-6 px-6 py-3">
                  <p className="font-editorial italic text-xs text-stone-200">
                    &ldquo;Kecantikan sejati tidak perlu disembunyikan di balik lapisan tebal; ia hanya perlu disentuh dengan ketulusan dan presisi.&rdquo;
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-4 flex items-start gap-3 text-xs text-stone-600">
                <MapPin className="w-4 h-4 text-rose-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Cakupan Wilayah: </span>
                  <span>{MUA_PROFILE.location} & Destinasi Wedding Seluruh Dunia.</span>
                </div>
              </div>
            </div>

            {/* Quick Vanity Kit Highlights */}
            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50/60">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Luxury Vanity Kit Portfolio</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Hanya menggunakan formula teruji klinis kelas dunia untuk memastikan ketahanan riasan tanpa kompromi pada kesehatan kulit:
              </p>
              <div className="flex flex-wrap gap-2">
                {MUA_PROFILE.luxuryBrands.map((brand, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-white border border-stone-200 rounded text-stone-700 font-medium"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                Lahir dengan kecintaan mendalam pada seni rupa dan estetika visual, Intan Meutia menempuh pendidikan formal seni rupa (Sarjana Seni) sebelum memperdalam spesialisasi tata rias pengantin di akademi kecantikan internasional terkemuka.
              </p>
              <p>
                Bagi Intan, setiap calon pengantin memiliki karakter anatomis dan aura unik. Oleh karena itu, Intan tidak pernah menerapkan &lsquo;formula rias cetakan seragam&rsquo;. Melalui analisis mendalam terhadap bentuk mata, struktur tulang pipi, dan undertone kulit, setiap goresan dirancang khusus (custom-tailored) agar pengantin tetap dikenali sebagai dirinya sendiri—namun dalam versi paling bercahaya dan memesona.
              </p>
              <p>
                Kepiawaiannya dalam memadukan kemegahan mahkota adat Aceh dan adat nusantara lainnya dengan teknik kompleksi dewy modern menjadikannya rujukan terpercaya bagi para calon pengantin di wilayah Banda Aceh dan sekitarnya.
              </p>
            </div>

            {/* Sertifikasi & Penghargaan */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-900 uppercase">
                <Award className="w-4 h-4 text-amber-700" />
                <span>Sertifikasi & Kualifikasi Profesional</span>
              </div>
              <div className="space-y-3">
                {MUA_PROFILE.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-stone-200/90 bg-stone-50/50 hover:bg-stone-50 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Commitment */}
            <div className="pt-2 p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70">
              <div className="flex items-start gap-3.5">
                <HeartHandshake className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-amber-950">
                    Janji Layanan Personal & Ketenangan di Hari Bahagia
                  </h4>
                  <p className="text-xs text-amber-900/80 mt-1 leading-relaxed">
                    &ldquo;Saya memahami bahwa pagi hari pernikahan adalah momen yang penuh debaran. Kehadiran saya bukan hanya sebagai penata rias, melainkan pendamping yang menghadirkan suasana tenang, tepat waktu, dan penuh perhatian agar Anda melangkah ke pelaminan dengan percaya diri.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
