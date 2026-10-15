import React, { useState } from 'react';
import { Sparkles, Check, RefreshCw, Calendar, ArrowRight } from 'lucide-react';

interface BeautyConsultationQuizProps {
  onStartBookingWithAdvice: (adviceData: {
    eventType: string;
    skinType: string;
    undertone: string;
    recommendation: string;
  }) => void;
}

export const BeautyConsultationQuiz: React.FC<BeautyConsultationQuizProps> = ({
  onStartBookingWithAdvice,
}) => {
  const [eventType, setEventType] = useState<string>('bridal_adat');
  const [skinType, setSkinType] = useState<string>('kombinasi');
  const [undertone, setUndertone] = useState<string>('warm');
  const [hasCalculated, setHasCalculated] = useState<boolean>(true);

  // Dynamic analysis generator
  const getRecommendation = () => {
    let styleTitle = "Modern Traditional Glow";
    let baseFinish = "Dewy Matte HD Foundation dengan teknik dual-layer baking";
    let lipShade = "Warm Rosy Terracotta Ombre (Peptide Plumping Gloss)";
    let skinPrepGuide = "Fokus hidrasi hyaluronic serum H-7 dan hindari eksfoliasi keras H-3.";

    if (eventType === 'bridal_modern') {
      styleTitle = "International Romantic Glass Skin";
      baseFinish = "Radiant Serum Complexion dengan champagne illuminator mikro";
      lipShade = "Velvet Nude Peach Pink bernuansa satin";
      skinPrepGuide = "Perbanyak minum air putih 2.5L/hari dan sheet mask ceramide setiap malam H-5.";
    } else if (eventType === 'wisuda') {
      styleTitle = "14-Hour High Definition Fresh Glam";
      baseFinish = "Ultra-matte sweatproof & transferproof base berdaya tahan tinggi";
      lipShade = "Petal Rosewood Longwear Matte";
      skinPrepGuide = "Gunakan gentle hydrating toner di pagi hari, hindari moisturizer terlalu berat.";
    } else if (eventType === 'prewedding') {
      styleTitle = "Cinematic Golden Hour Radiance";
      baseFinish = "Satin waterproof formula dengan warm bronzer contouring";
      lipShade = "Apricot Caramel Glow";
      skinPrepGuide = "Oleskan lip sleeping mask setiap malam agar bibir lembap dan tidak bergaris.";
    }

    if (skinType === 'berminyak') {
      baseFinish += " + Pore-blurring primer di area T-zone & blotting powder set";
    } else if (skinType === 'kering') {
      baseFinish += " + Squalane moisture booster & hydrating dewy mist finish";
    } else if (skinType === 'sensitif') {
      baseFinish += " + Hypoallergenic silicone-free base & calming cica mist";
    }

    let undertoneNote = "Nuansa keemasan & peach hangat sangat melengkapi rona kulit Anda.";
    if (undertone === 'cool') {
      undertoneNote = "Nuansa berry, dusty rose, dan pearl silver akan memberi kontras yang sangat anggun.";
    } else if (undertone === 'neutral') {
      undertoneNote = "Kombinasi nude mauve, neutral rosegold, dan soft bronze adalah perpaduan ideal Anda.";
    }

    return {
      styleTitle,
      baseFinish,
      lipShade,
      skinPrepGuide,
      undertoneNote
    };
  };

  const currentRec = getRecommendation();

  const handleApplyToBooking = () => {
    const eventLabels: Record<string, string> = {
      bridal_adat: "Pernikahan Adat Nusantara",
      bridal_modern: "Bridal Internasional Modern",
      wisuda: "Wisuda / Pesta Formal",
      prewedding: "Prewedding / Editorial Photoshoot"
    };

    onStartBookingWithAdvice({
      eventType: eventLabels[eventType] || eventType,
      skinType,
      undertone,
      recommendation: `${currentRec.styleTitle} (${currentRec.baseFinish})`
    });
  };

  return (
    <section id="konsultasi" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Konsultasi Interaktif
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight [text-wrap:balance]">
            Smart Skin & Shade Advisor
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Dapatkan rekomendasi formula riasan personal, panduan persiapan kulit (skin prep), dan palet warna ideal yang dirancang langsung berdasarkan standar kepakaran Intan Meutia.
          </p>
        </div>

        {/* 2-Column Consultation Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-7">
            
            {/* Step 1: Jenis Acara */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                1. Rencana Acara Anda
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'bridal_adat', label: 'Adat Aceh & Nusantara (Aceh/Sunda/Minang/Jawa)' },
                  { id: 'bridal_modern', label: 'Bridal Modern / Pemberkatan' },
                  { id: 'wisuda', label: 'Wisuda / Pesta Formal VIP' },
                  { id: 'prewedding', label: 'Prewedding / Photoshoot' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEventType(item.id)}
                    className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      eventType === item.id
                        ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                        : 'border-stone-200 bg-stone-50/50 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tipe Kulit */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                2. Kondisi & Karakter Kulit
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'kombinasi', label: 'Kombinasi' },
                  { id: 'berminyak', label: 'Berminyak' },
                  { id: 'kering', label: 'Kering / Dehidrasi' },
                  { id: 'sensitif', label: 'Sensitif / Acne' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSkinType(item.id)}
                    className={`p-2.5 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      skinType === item.id
                        ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                        : 'border-stone-200 bg-stone-50/50 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Skin Undertone */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                3. Undertone Kulit
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'warm', label: 'Warm (Kuning Langsat / Sawo Matang)', color: 'bg-amber-100 border-amber-300' },
                  { id: 'neutral', label: 'Neutral (Zaitun / Olive Seimbang)', color: 'bg-stone-200 border-stone-400' },
                  { id: 'cool', label: 'Cool (Pinkish / Cerah Bersemu)', color: 'bg-rose-100 border-rose-300' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUndertone(item.id)}
                    className={`p-3 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                      undertone === item.id
                        ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                        : 'border-stone-200 bg-stone-50/50 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border ${item.color}`} />
                    <span className="leading-tight">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] text-stone-500 flex items-center justify-between border-t border-stone-100">
              <span>* Rekomendasi diperbarui secara langsung (real-time).</span>
              <button
                type="button"
                onClick={() => {
                  setEventType('bridal_adat');
                  setSkinType('kombinasi');
                  setUndertone('warm');
                }}
                className="text-stone-700 hover:text-stone-950 flex items-center gap-1 cursor-pointer font-medium"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Pilihan</span>
              </button>
            </div>
          </div>

          {/* Right Column: Tailored Consultation Result Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-semibold tracking-wider uppercase text-stone-800">
                  Hasil Rekomendasi Khusus
                </span>
              </div>
              <span className="text-[11px] font-mono text-stone-400">Tailored by Intan Meutia</span>
            </div>

            <div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-400 block mb-1">
                Gaya Riasan Paling Direkomendasikan
              </span>
              <h3 className="font-editorial text-2xl font-medium text-stone-900">
                {currentRec.styleTitle}
              </h3>
            </div>

            {/* Recommendation Specs */}
            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90">
                <span className="font-semibold text-stone-900 block mb-0.5">Base & Complexion:</span>
                <span className="text-stone-600 leading-relaxed">{currentRec.baseFinish}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90">
                <span className="font-semibold text-stone-900 block mb-0.5">Palet Bibir & Blush:</span>
                <span className="text-stone-600 leading-relaxed">{currentRec.lipShade}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90">
                <span className="font-semibold text-stone-900 block mb-0.5">Analisis Harmoni Warna Kulit:</span>
                <span className="text-stone-600 leading-relaxed">{currentRec.undertoneNote}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <span className="font-semibold text-amber-950 block mb-0.5">Panduan Skin Prep H-7:</span>
                <span className="text-amber-900/80 leading-relaxed">{currentRec.skinPrepGuide}</span>
              </div>
            </div>

            {/* Direct Booking Link with Advice data */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleApplyToBooking}
                className="w-full py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold tracking-wide rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Gunakan Hasil Ini untuk Reservasi Jadwal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-stone-500 mt-2">
                Pilihan Anda akan otomatis terisi pada formulir konsultasi resmi.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
