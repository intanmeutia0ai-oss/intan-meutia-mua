import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Send, CheckCircle2, MessageSquare, Copy, Check, Sparkles } from 'lucide-react';
import { MUA_PROFILE, SERVICE_PACKAGES, PackageItem } from '../data/muaData';

interface BookingFormProps {
  initialPackage?: string;
  consultationNotes?: string;
  onClearPrefill?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialPackage,
  consultationNotes,
}) => {
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('06:00');
  const [venue, setVenue] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(
    initialPackage || SERVICE_PACKAGES[0].name
  );
  const [eventStyle, setEventStyle] = useState('Korean Glow / Glass Skin (Fresh & Youthful)');
  const [skinNotes, setSkinNotes] = useState(consultationNotes || '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPackage(initialPackage);
    }
  }, [initialPackage]);

  useEffect(() => {
    if (consultationNotes) {
      setSkinNotes(consultationNotes);
    }
  }, [consultationNotes]);

  const generateWhatsAppMessage = () => {
    return `*FORMULIR RESERVASI JADWAL MAKEUP ARTIST — INTAN MEUTIA*
---------------------------------------
Halo Mba Intan Meutia, saya ingin memeriksa ketersediaan slot tanggal dan reservasi jasa rias:

*Nama Klien*: ${fullName || '-'}
*WhatsApp*: ${whatsapp || '-'}
*Tanggal Acara*: ${eventDate || '-'}
*Waktu Mulai Rias*: ${eventTime || '-'} WIB
*Lokasi / Venue*: ${venue || '-'}
*Paket Rias*: ${selectedPackage}
*Konsep Acara / Adat*: ${eventStyle}
*Catatan Kulit / Request*: ${skinNotes || 'Tidak ada'}
---------------------------------------
Mohon informasi ketersediaan jadwal dan prosedur penguncian tanggal (lock date). Terima kasih!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !whatsapp || !eventDate || !venue) {
      alert("Mohon lengkapi Nama, WhatsApp, Tanggal Acara, dan Lokasi Acara.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    const url = `https://wa.me/${MUA_PROFILE.whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="reservasi" className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Konsultasi Jadwal & Reservasi
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight [text-wrap:balance]">
            Cek Ketersediaan Tanggal & Booking
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Demi menjaga eksklusivitas dan ketenangan pengantin, Intan Meutia hanya menerima maksimal 1–2 pengantin per hari. Pastikan slot tanggal impian Anda masih tersedia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Whatsapp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Nama Lengkap Calon Pengantin / Klien *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Sarah Anindita"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-stone-50/50"
                  />
                </div>
              </div>

              {/* Row 2: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Tanggal Hari H Acara *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-stone-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Waktu Mulai Rias di Lokasi
                  </label>
                  <input
                    type="time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-stone-50/50"
                  />
                </div>
              </div>

              {/* Row 3: Venue */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Lokasi / Nama Venue & Kota *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    placeholder="Contoh: Hermes Palace Hotel Banda Aceh / Amel Convention Hall / Rumah Pribadi"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-stone-50/50"
                  />
                </div>
              </div>

              {/* Row 4: Package & Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Pilihan Paket Rias
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-stone-50/50"
                  >
                    {SERVICE_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} ({pkg.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Gaya / Adat yang Diinginkan
                  </label>
                  <select
                    value={eventStyle}
                    onChange={(e) => setEventStyle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-stone-50/50"
                  >
                    <option value="Korean Glow / Glass Skin (Fresh & Youthful)">Korean Glow / Glass Skin (Fresh & Youthful)</option>
                    <option value="Pernikahan Adat Aceh (Mahkota Emas & Sunting)">Pernikahan Adat Aceh (Mahkota Emas & Sunting)</option>
                    <option value="Pernikahan Adat Sunda Siger">Sunda Siger (Klasik / Modifikasi)</option>
                    <option value="Pernikahan Adat Solo Putri / Paes">Jawa Solo Putri / Basahan</option>
                    <option value="Pernikahan Adat Jogja Paes Ageng">Jogja Paes Ageng</option>
                    <option value="Pernikahan Adat Minang Suntiang">Minang Suntiang</option>
                    <option value="Bridal Modern Internasional">Modern International Romantic</option>
                    <option value="Akad Minimalist Dewy Glow">Akad Minimalist Dewy Glow</option>
                    <option value="Wisuda Sarjana / Spesialis">Wisuda High Definition</option>
                    <option value="Prewedding / Photoshoot">Prewedding Editorial</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Catatan Khusus Kulit / Request Tambahan
                </label>
                <textarea
                  rows={3}
                  value={skinNotes}
                  onChange={(e) => setSkinNotes(e.target.value)}
                  placeholder="Contoh: Kulit cenderung berminyak di T-zone, alergi bulu mata berbahan tertentu, request softlens minus 2.0, ada sesi sungkeman..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-stone-50/50"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Pratinjau Format Booking & Hubungi WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right Column: Instant Booking Summary Card & Fast WhatsApp Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Ringkasan Pemesanan
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Fast Response &lt; 1 Jam
                </span>
              </div>

              <div className="space-y-3 text-xs text-stone-700">
                <div className="flex justify-between py-1 border-b border-stone-50">
                  <span className="text-stone-500">MUA:</span>
                  <span className="font-semibold text-stone-900">Intan Meutia</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-50">
                  <span className="text-stone-500">Paket:</span>
                  <span className="font-semibold text-stone-900 text-right">{selectedPackage}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-50">
                  <span className="text-stone-500">Tanggal Acara:</span>
                  <span className="font-mono text-stone-900 font-medium">
                    {eventDate ? new Date(eventDate).toLocaleDateString('id-ID', { dateStyle: 'long' }) : 'Belum dipilih'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-50">
                  <span className="text-stone-500">Lokasi:</span>
                  <span className="font-medium text-stone-900 text-right truncate max-w-[200px]">
                    {venue || 'Belum diisi'}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Konsep:</span>
                  <span className="font-medium text-stone-900 text-right">{eventStyle}</span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim ke WhatsApp Intan Meutia</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Teks Berhasil Disalin!' : 'Salin Format Pemesanan'}</span>
                </button>
              </div>

              {/* Contact direct numbers */}
              <div className="pt-4 border-t border-stone-100 text-[11px] text-stone-500 space-y-1">
                <div>
                  <span className="font-semibold text-stone-700">Official WhatsApp: </span>
                  <span className="font-mono">{MUA_PROFILE.whatsappDisplay}</span>
                </div>
                <div>
                  <span className="font-semibold text-stone-700">Official Instagram: </span>
                  <span>{MUA_PROFILE.instagram}</span>
                </div>
                <div>
                  <span className="font-semibold text-stone-700">Official Email: </span>
                  <span>{MUA_PROFILE.email}</span>
                </div>
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Setiap pemesanan disertai Surat Perjanjian Kerjasama (SPK) resmi tertulis untuk kepastian jadwal dan kenyamanan kedua belah pihak.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal upon Submit */}
      {isSubmitted && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsSubmitted(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="text-center">
              <h3 className="font-editorial text-2xl font-medium text-stone-900">
                Format Booking Anda Siap
              </h3>
              <p className="text-xs text-stone-600 mt-1 max-w-sm mx-auto">
                Langkah terakhir: Kirim pesan ini ke WhatsApp resmi Intan Meutia untuk memeriksa ketersediaan slot tanggal secara instan.
              </p>
            </div>

            {/* Generated text box */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono text-stone-700 max-h-48 overflow-y-auto whitespace-pre-wrap leading-relaxed">
              {generateWhatsAppMessage()}
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Buka WhatsApp Sekarang</span>
              </button>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="w-full py-2.5 px-4 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                Kembali & Perbaiki Data
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
