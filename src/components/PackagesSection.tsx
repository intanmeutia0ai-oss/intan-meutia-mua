import React from 'react';
import { Check, Clock, CalendarCheck, MessageSquare } from 'lucide-react';
import { SERVICE_PACKAGES, PackageItem, MUA_PROFILE } from '../data/muaData';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="layanan" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Katalog Paket Rias & Layanan · Banda Aceh & Aceh Besar
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight [text-wrap:balance]">
            Paket Rias & Wisuda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Pilihan paket lengkap untuk wisuda, sidang sarjana, akad nikah, resepsi, hingga rias adat. Harga merupakan estimasi awal katalog dan dapat disesuaikan dengan kebutuhan fasilitas serta lokasi acara Anda di Banda Aceh dan sekitarnya.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between p-6 ${
                  pkg.isPopular
                    ? 'border-stone-900 bg-stone-900 text-white shadow-xl relative'
                    : 'border-stone-200 bg-stone-50/50 hover:bg-white text-stone-900 hover:shadow-md'
                }`}
              >
                {/* Badge from catalog */}
                {pkg.badge && (
                  <div className="mb-3">
                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase inline-block ${
                        pkg.isPopular ? 'text-amber-300' : 'text-stone-600 font-mono'
                      }`}
                    >
                      {pkg.isPopular ? `★ ${pkg.badge}` : pkg.badge}
                    </span>
                  </div>
                )}

                {/* Package Title & Price */}
                <div>
                  <h3
                    className={`font-editorial text-xl sm:text-2xl font-medium ${
                      pkg.isPopular ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-xs mt-1 min-h-[32px] ${
                      pkg.isPopular ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    {pkg.subtitle}
                  </p>

                  <div className="mt-4 pb-4 border-b border-stone-200/30">
                    <div
                      className={`text-2xl sm:text-3xl font-medium tracking-tight font-editorial tabular-nums ${
                        pkg.isPopular ? 'text-amber-200' : 'text-stone-900'
                      }`}
                    >
                      {pkg.price}
                    </div>
                    <div
                      className={`flex items-center gap-1.5 text-xs mt-1.5 ${
                        pkg.isPopular ? 'text-stone-400' : 'text-stone-500'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="py-5 space-y-2.5">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider block ${
                        pkg.isPopular ? 'text-stone-300' : 'text-stone-500'
                      }`}
                    >
                      Fasilitas yang Didapatkan:
                    </span>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs leading-relaxed">
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              pkg.isPopular ? 'text-amber-300' : 'text-stone-900'
                            }`}
                          />
                          <span className={pkg.isPopular ? 'text-stone-200' : 'text-stone-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Recommendation Note & Action */}
                <div className="pt-4 border-t border-stone-200/30 mt-auto space-y-3.5">
                  <p
                    className={`text-[11px] italic leading-normal min-h-[32px] ${
                      pkg.isPopular ? 'text-stone-400' : 'text-stone-500'
                    }`}
                  >
                    {pkg.recommendedFor}
                  </p>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      pkg.isPopular
                        ? 'bg-amber-300 hover:bg-amber-400 text-stone-950 font-bold shadow-md'
                        : 'bg-stone-900 hover:bg-stone-800 text-white shadow-xs'
                    }`}
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Pilih Paket & Cek Jadwal</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ringkasan Harga Table (from Page 4 of Catalog) */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-editorial text-xl font-medium text-stone-900">
                Ringkasan Harga Paket Rias
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Katalog Resmi Banda Aceh & Aceh Besar
              </p>
            </div>
            <a
              href={`https://wa.me/${MUA_PROFILE.whatsappNumber}?text=${encodeURIComponent(
                "Halo Mba Intan Meutia, saya ingin konsultasi ketersediaan jadwal untuk Paket Rias Pengantin Banda Aceh."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto transition-colors shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Tanya Vendor via WhatsApp</span>
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-stone-300 text-stone-500 uppercase tracking-wider text-[11px]">
                  <th className="py-2.5 font-semibold">Paket Rias</th>
                  <th className="py-2.5 font-semibold">Durasi Layanan</th>
                  <th className="py-2.5 font-semibold text-right">Estimasi Harga</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                {SERVICE_PACKAGES.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-white/60 transition-colors">
                    <td className="py-3 font-semibold text-stone-900">
                      {pkg.name}
                      <span className="block text-[11px] font-normal text-stone-500">{pkg.subtitle}</span>
                    </td>
                    <td className="py-3 font-mono text-stone-600">{pkg.duration}</td>
                    <td className="py-3 text-right font-editorial text-sm font-semibold text-stone-900 tabular-nums">
                      {pkg.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Official Catalog Note from PDF */}
          <div className="mt-5 pt-4 border-t border-stone-200 text-[11px] text-stone-500 space-y-1">
            <p>
              <strong>Catatan:</strong> Harga belum termasuk gedung, dekorasi pelaminan, catering, dan busana adat lengkap kecuali disepakati tersendiri.
            </p>
            <p>
              Transportasi ke luar area layanan (Banda Aceh & Aceh Besar) dapat dikenakan biaya tambahan sesuai jarak lokasi acara.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
