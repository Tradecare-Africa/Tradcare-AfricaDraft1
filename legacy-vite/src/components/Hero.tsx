import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Sparkles, TrendingUp, Users } from 'lucide-react';
import { DIVISIONS, BRAND_COLORS } from '../data/tradecareData';
import { TRADECARE_IMAGES } from '../data/tradecareImages';

interface HeroProps {
  onOpenInquiry: () => void;
  onSelectDivision: (id: string) => void;
  onNavigateDivision: (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onSelectDivision, onNavigateDivision }) => {
  const divisionIdMap: Record<string, 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market'> = {
    train: 'academy',
    produce: 'zaosafi',
    digitise: 'farmdatapod',
    assure: 'tcert',
    connect: 'market',
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E5DFD3]">
      {/* Background architectural accents in warm brand tones */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDE8E2] rounded-full blur-3xl opacity-60 -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#E7F2EC] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial unboxed kicker (no pill boxes) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#526B5C] mb-6">
          <span className="text-[#DD5C36] font-bold">TradeCare Africa Limited</span>
          <span aria-hidden="true" className="text-[#A7C4A2]">·</span>
          <span>Founded 2014 by Joyce Wambui Gema</span>
          <span aria-hidden="true" className="text-[#A7C4A2]">·</span>
          <span className="text-[#133020]">Agricultural Consultancy Award Winner 2023</span>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Value Proposition & Headline */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Value Chain Hero Image on top of heading */}
            <div className="relative w-full h-48 sm:h-60 md:h-68 rounded-2xl overflow-hidden border border-[#E5DFD3] shadow-md group">
              <img
                src={TRADECARE_IMAGES.heroLandscape.src}
                alt={TRADECARE_IMAGES.heroLandscape.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F8EDD9]">
                  <span className="w-2 h-2 rounded-full bg-[#327039] animate-pulse" />
                  <span>Service Ecosystem · Five Integrated Operating Divisions</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">
                  Synchronizing Training, Field Agronomy, Digital Traceability, Accredited Certification, and Direct Offtake under one control tower.
                </p>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-extrabold text-[#133020] tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
              One company. <span className="text-[#DD5C36]">The whole chain.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#3A4F41] font-normal leading-relaxed max-w-2xl">
              A women-led Kenyan agri-services company trading since 2014. A complete Service Ecosystem operating under a single supply-chain control tower.
            </p>

            {/* Core Principle Quote Card */}
            <div className="p-4 sm:p-5 bg-white border border-[#E5DFD3] rounded-xl shadow-xs">
              <p className="text-sm sm:text-base font-medium text-[#133020] leading-snug">
                <span className="text-[#DD5C36] font-bold mr-1">“</span>
                Our Service Ecosystem unites all 5 stages under one roof: TradeCare Academy trains, Zao Safi coaches production, Farm Data Pod digitises records, TCert assures standards, and TradeCare Market connects farmers to high-value buyers.
                <span className="text-[#DD5C36] font-bold ml-1">”</span>
              </p>
              <div className="mt-2 text-xs text-[#6A7E72] flex items-center justify-between">
                <span>The 5 Divisions Service Ecosystem</span>
                <span className="text-[#133020] font-semibold">One Control Tower</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] active:bg-[#F29677] rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Partner With TradeCare</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#synergy"
                className="px-6 py-3.5 text-sm font-semibold text-[#133020] bg-[#F5F2EA] hover:bg-[#EDE8DC] border border-[#DDD6C8] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Explore Ecosystem Synergy
              </a>
            </div>

            {/* Service Ecosystem Sequence Bar */}
            <div className="pt-4 border-t border-[#E5DFD3]">
              <div className="text-xs font-semibold text-[#6A7E72] uppercase tracking-wider mb-3">
                Service Ecosystem · Five Integrated Pillars
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {DIVISIONS.map((div) => (
                  <button
                    key={div.id}
                    onClick={() => onNavigateDivision(divisionIdMap[div.id])}
                    className="group text-left p-2.5 rounded-lg bg-white border border-[#E5DFD3] hover:border-[#DD5C36] transition-all hover:shadow-sm cursor-pointer"
                  >
                    <div className="text-[11px] font-bold text-[#8A9C90] group-hover:text-[#DD5C36] transition-colors">
                      0{div.stepNumber} · {div.verb}
                    </div>
                    <div className="text-xs font-semibold text-[#133020] truncate mt-0.5">
                      {div.name.split(' ')[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Ecosystem Hub & Live Operations Snapshot */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-[#E5DFD3] p-6 sm:p-7 shadow-sm space-y-6">
              
              {/* Header inside card */}
              <div className="flex items-start justify-between border-b border-[#F0EBE1] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#DD5C36] uppercase tracking-wide">
                    Live Supply Chain Architecture
                  </span>
                  <h3 className="text-xl font-bold text-[#133020] mt-0.5">
                    Kenyan Agri-Services Engine
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#327039] bg-[#EBF4EC] px-2 py-1 rounded">
                    EST. 2014
                  </span>
                </div>
              </div>

              {/* Cold Chain Export Offtake Visual Banner */}
              <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden border border-[#E5DFD3] shadow-xs group">
                <img
                  src={TRADECARE_IMAGES.divisions.connect.src}
                  alt={TRADECARE_IMAGES.divisions.connect.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-3.5 text-white">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#F8EDD9]">
                    <span className="w-2 h-2 rounded-full bg-[#DD5C36] animate-pulse"></span>
                    <span>Stage 05 Offtake · Cold-Chain Export Packhouse</span>
                  </div>
                  <p className="text-xs font-semibold leading-tight text-white/95 mt-0.5">
                    Direct commercial linkage to Carrefour, QuickMart & European buyers
                  </p>
                </div>
              </div>

              {/* 5 Integrated Hub Stages Visual Flow */}
              <div className="space-y-3">
                {DIVISIONS.map((div, idx) => {
                  const divImage = TRADECARE_IMAGES.divisions[div.id as keyof typeof TRADECARE_IMAGES.divisions];
                  return (
                    <div
                      key={div.id}
                      className="flex items-center gap-3.5 p-2 rounded-xl transition-colors hover:bg-[#FAF7F2] cursor-pointer border border-transparent hover:border-[#E5DFD3] group"
                      onClick={() => onNavigateDivision(divisionIdMap[div.id])}
                    >
                      <div className="relative shrink-0 w-10 h-10 rounded-lg overflow-hidden border border-[#E5DFD3]">
                        <img
                          src={divImage?.src}
                          alt={divImage?.alt || div.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center font-bold text-[11px] text-white bg-black/35"
                        >
                          0{div.stepNumber}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#133020] truncate">
                            {div.verb} — {div.name}
                          </span>
                          <span className="text-[10px] font-mono font-medium text-[#7A8E81] shrink-0 ml-2 group-hover:text-[#DD5C36] transition-colors">
                            View Page →
                          </span>
                        </div>
                        <p className="text-[11px] text-[#556D5F] truncate mt-0.5">
                          {div.tagline}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>


              {/* Verified Proof Callout */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E5DFD3] flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-[#133020]">
                    Supermarket Offtake & Global Certs
                  </div>
                  <div className="text-[11px] text-[#556D5F] mt-0.5">
                    Active supply to Carrefour & QuickMart · Export-grade assurance
                  </div>
                </div>
                <a
                  href="#impact"
                  className="text-xs font-bold text-[#DD5C36] hover:underline whitespace-nowrap shrink-0"
                >
                  View Case Study →
                </a>
              </div>

              {/* Brand Palette Accent bar */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-[#718579]">
                <span>Cherry Grove · Forest Fern · Wheat Field · Tilled Earth</span>
                <span className="font-mono text-[10px] text-[#133020]">TCA-MSCT-001</span>
              </div>

            </div>
          </div>

        </div>

        {/* Quantitative Rigor Strip Below Hero (Full-width row) */}
        <div className="mt-14 pt-8 border-t border-[#E5DFD3] grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#133020] font-mono tabular-nums">
              10+ <span className="text-base font-normal text-[#526B5C]">Years</span>
            </div>
            <div className="text-xs text-[#526B5C] mt-1 font-medium">
              Trading in Kenya since 2014 under Joyce W. Gema
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#DD5C36] font-mono tabular-nums">
              +245%
            </div>
            <div className="text-xs text-[#526B5C] mt-1 font-medium">
              Net farmer income surge (Embu macadamia cohort)
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#327039] font-mono tabular-nums">
              300+
            </div>
            <div className="text-xs text-[#526B5C] mt-1 font-medium">
              Commercial paying assurance clients since 2017
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#133020] font-mono tabular-nums">
              3.15×
            </div>
            <div className="text-xs text-[#526B5C] mt-1 font-medium">
              Poverty line multiple achieved (up from 0.85×)
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#C27B08] font-mono tabular-nums">
              US$11.74
            </div>
            <div className="text-xs text-[#526B5C] mt-1 font-medium">
              Farm-level value created per $1 invested (IDH Audited)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
