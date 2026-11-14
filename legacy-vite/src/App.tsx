/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemSynergy } from './components/EcosystemSynergy';
import { DivisionSection } from './components/DivisionSection';
import { CompetitiveMatrix } from './components/CompetitiveMatrix';
import { ImpactSection } from './components/ImpactSection';
import { FounderStory } from './components/FounderStory';
import { MarketOpportunity } from './components/MarketOpportunity';
import { BrandPaletteSection } from './components/BrandPaletteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { DivisionLandingPage } from './components/DivisionLandingPage';
import { TeamSection } from './components/TeamSection';
import { TeamPage } from './components/TeamPage';

export type PageView = 'home' | 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market' | 'team';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>('train');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [inquiryInitialTab, setInquiryInitialTab] = useState<string>('buyers');

  // Handle URL hash changes for browser back/forward and deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#/', '').replace('#', '');
      if (['academy', 'train'].includes(hash)) {
        setCurrentPage('academy');
      } else if (['zaosafi', 'zao-safi', 'produce'].includes(hash)) {
        setCurrentPage('zaosafi');
      } else if (['farmdatapod', 'farm-data-pod', 'digitise'].includes(hash)) {
        setCurrentPage('farmdatapod');
      } else if (['tcert', 'reactcert', 'assure'].includes(hash)) {
        setCurrentPage('tcert');
      } else if (['market', 'tradecare-market', 'connect'].includes(hash)) {
        setCurrentPage('market');
      } else if (['team', 'leadership', 'people'].includes(hash)) {
        setCurrentPage('team');
      } else if (hash === '' || hash === 'home' || hash === 'overview') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '#/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTeam = () => {
    setCurrentPage('team');
    window.location.hash = '#/team';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDivision = (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => {
    setCurrentPage(id);
    window.location.hash = `#/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (tab: string = 'buyers') => {
    setInquiryInitialTab(tab);
    setIsInquiryModalOpen(true);
  };

  const handleSelectDivisionOnHome = (id: string) => {
    setSelectedDivisionId(id);
    const element = document.getElementById('divisions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#133020] flex flex-col font-sans selection:bg-[#DD5C36] selection:text-white">
      {/* Universal 3-Zone Navbar */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        activePage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigateDivision={navigateToDivision}
        onNavigateTeam={navigateToTeam}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* 1. Rebranded Homepage Hero */}
            <Hero
              onOpenInquiry={() => handleOpenInquiry('buyers')}
              onSelectDivision={handleSelectDivisionOnHome}
              onNavigateDivision={navigateToDivision}
            />

            {/* 2. Interactive Ecosystem Synergy Engine (Closed-Loop Agricultural Control Tower) */}
            <EcosystemSynergy
              onSelectDivision={handleSelectDivisionOnHome}
              onOpenInquiry={() => handleOpenInquiry('produce')}
              onNavigateDivision={navigateToDivision}
            />

            {/* 3. Service Ecosystem: 5 Integrated Pillars */}
            <DivisionSection
              selectedDivisionId={selectedDivisionId}
              onSelectDivision={setSelectedDivisionId}
              onOpenInquiry={handleOpenInquiry}
              onNavigateDivision={navigateToDivision}
            />

            {/* 4. Empirical Impact (Embu & Lari Case Studies + Supply Chain Simulator) */}
            <ImpactSection
              onOpenInquiry={handleOpenInquiry}
            />

            {/* 5. Leadership & Division Heads (Positioned between Proven Impact and Founder) */}
            <TeamSection
              onNavigateDivision={navigateToDivision}
              onOpenInquiry={handleOpenInquiry}
              onNavigateTeam={navigateToTeam}
            />

            {/* 6. Founder & Leadership Spotlight: Joyce Wambui Gema */}
            <FounderStory
              onOpenInquiry={handleOpenInquiry}
            />

            {/* 7. Market Sizing & Revenue Engine (US$105M Kenya SAM / US$2.6B Africa TAM) */}
            <MarketOpportunity
              onOpenInquiry={handleOpenInquiry}
            />

            {/* 8. Official Brand Palette & Design System Showcase */}
            <BrandPaletteSection onNavigateDivision={navigateToDivision} />

            {/* 9. Competitive Defensibility & Market Comparison (At bottom of overview page) */}
            <CompetitiveMatrix />

            {/* 10. Contact & Commercial Engagement Callout */}
            <ContactSection
              onOpenInquiry={handleOpenInquiry}
            />
          </>
        ) : currentPage === 'team' ? (
          /* Dedicated Team Page for Leadership & Division Heads */
          <TeamPage
            onNavigateHome={navigateToHome}
            onNavigateDivision={navigateToDivision}
            onOpenInquiry={handleOpenInquiry}
          />
        ) : (
          /* Dedicated Individual Landing Page for the selected Service Ecosystem Pillar */
          <DivisionLandingPage
            divisionId={currentPage}
            onNavigateHome={navigateToHome}
            onNavigateDivision={navigateToDivision}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectDivision={handleSelectDivisionOnHome}
        onOpenInquiry={handleOpenInquiry}
        onNavigateHome={navigateToHome}
        onNavigateDivision={navigateToDivision}
        onNavigateTeam={navigateToTeam}
      />

      {/* Interactive Modal for Partnerships, Offtake & Hub Assessments */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialTab={inquiryInitialTab}
      />
    </div>
  );
}
