/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PortfolioGallery } from './components/PortfolioGallery';
import { BeautyConsultationQuiz } from './components/BeautyConsultationQuiz';
import { PackagesSection } from './components/PackagesSection';
import { HygieneStandards } from './components/HygieneStandards';
import { BookingForm } from './components/BookingForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PackageItem } from './data/muaData';

export default function App() {
  const [selectedPackageName, setSelectedPackageName] = useState<string>('');
  const [consultationNotes, setConsultationNotes] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    scrollToSection('reservasi');
  };

  const handleExplorePortfolio = () => {
    scrollToSection('portofolio');
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackageName(pkg.name);
    scrollToSection('reservasi');
  };

  const handleStartBookingWithAdvice = (adviceData: {
    eventType: string;
    skinType: string;
    undertone: string;
    recommendation: string;
  }) => {
    setConsultationNotes(
      `Hasil Konsultasi Quiz: Acara: ${adviceData.eventType}, Tipe Kulit: ${adviceData.skinType}, Undertone: ${adviceData.undertone}. Rekomendasi Rias: ${adviceData.recommendation}`
    );
    scrollToSection('reservasi');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-rose-200 selection:text-rose-950">
      {/* Top Bar adhering to Top Bar Contract */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Split Screen Hero with 4-Column Metric Strip below split */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExplorePortfolio={handleExplorePortfolio}
        />

        {/* Intan Meutia Biography, Philosophy & Vanity Kit */}
        <AboutSection />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider />

        {/* Filterable Bento Gallery with Lightbox Modal */}
        <PortfolioGallery />

        {/* Smart Skin & Shade Advisor Quiz */}
        <BeautyConsultationQuiz
          onStartBookingWithAdvice={handleStartBookingWithAdvice}
        />

        {/* Packages & Pricing Table */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* Hygiene Standards & Sterilization Commitments */}
        <HygieneStandards />

        {/* Booking & Date Consultation with WhatsApp Integration */}
        <BookingForm
          initialPackage={selectedPackageName}
          consultationNotes={consultationNotes}
        />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
