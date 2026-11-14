import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, BookOpen, Sprout, Database, ShieldCheck, 
  ShoppingBag, ExternalLink, Award, Sparkles, ChevronRight, Check
} from 'lucide-react';
import { DIVISIONS, Division, BRAND_COLORS, DIVISIONS_DETAILED } from '../data/tradecareData';
import { TRADECARE_IMAGES } from '../data/tradecareImages';

interface DivisionSectionProps {
  selectedDivisionId: string;
  onSelectDivision: (id: string) => void;
  onOpenInquiry: (tab?: string) => void;
  onNavigateDivision: (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => void;
}

export const DivisionSection: React.FC<DivisionSectionProps> = ({
  selectedDivisionId,
  onSelectDivision,
  onOpenInquiry,
  onNavigateDivision,
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedDivisionId || 'train');

  // Map 5 division ids
  const idToDetailedMap: Record<string, 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market'> = {
    train: 'academy',
    produce: 'zaosafi',
    digitise: 'farmdatapod',
    assure: 'tcert',
    connect: 'market',
  };

  // Sync state if prop changes
  React.useEffect(() => {
    if (selectedDivisionId) {
      setActiveTab(selectedDivisionId);
    }
  }, [selectedDivisionId]);

  const activeDivision = DIVISIONS.find((d) => d.id === activeTab) || DIVISIONS[0];
  const detailedData = DIVISIONS_DETAILED[idToDetailedMap[activeDivision.id]] || DIVISIONS_DETAILED['academy'];

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'train':
      case 'academy':
        return <BookOpen className="w-5 h-5" />;
      case 'produce':
      case 'zaosafi':
        return <Sprout className="w-5 h-5" />;
      case 'digitise':
      case 'farmdatapod':
        return <Database className="w-5 h-5" />;
      case 'assure':
      case 'tcert':
        return <ShieldCheck className="w-5 h-5" />;
      case 'connect':
      case 'market':
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="service-ecosystem" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div id="divisions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-[#DD5C36] tracking-wider uppercase mb-2">
            Service Ecosystem · Five Integrated Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133020] tracking-tight leading-tight text-balance">
            The Service Ecosystem: Five Pillars, One Whole Chain.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#445D4E] leading-relaxed">
            TradeCare Africa's Service Ecosystem forms a seamless journey from human training to global offtake. Each pillar possesses its own dedicated operating methodology, target audience, and clear call to action while contributing to the whole chain.
          </p>
        </div>

        {/* Prominent 5-Division Marquee Cards (Full Visual Differentiation) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {DIVISIONS.map((div) => {
            const detailedKey = idToDetailedMap[div.id];
            const detailed = DIVISIONS_DETAILED[detailedKey];
            const isSelected = div.id === activeTab;

            return (
              <div
                key={div.id}
                onClick={() => {
                  setActiveTab(div.id);
                  onSelectDivision(div.id);
                }}
                className={`rounded-2xl p-5 flex flex-col justify-between transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-white shadow-md border-2'
                    : 'bg-white/80 hover:bg-white border-[#E5DFD3] hover:border-[#C4BDB0]'
                }`}
                style={{
                  borderColor: isSelected ? div.brandColor : undefined,
                }}
              >
                <div>
                  {/* Top Bar with Step & Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className="w-7 h-7 rounded-lg text-xs font-bold text-white flex items-center justify-center shrink-0"
                      style={{ backgroundColor: div.brandColor }}
                    >
                      0{div.stepNumber}
                    </span>
                    <div className="flex flex-col items-end">
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider"
                        style={{ color: div.brandColor }}
                      >
                        {div.verb}
                      </span>
                    </div>
                  </div>

                  {/* Division Preview Photo */}
                  <div className="relative h-24 rounded-xl overflow-hidden border border-[#E5DFD3] mt-3 group-hover:shadow-xs transition-shadow">
                    <img
                      src={TRADECARE_IMAGES.divisions[div.id as keyof typeof TRADECARE_IMAGES.divisions]?.src}
                      alt={div.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Division Name & Tagline */}
                  <h3 className="text-sm font-extrabold text-[#133020] mt-3 leading-snug">
                    {div.name}
                  </h3>
                  <p className="text-[11px] text-[#556D5F] mt-1 leading-snug italic">
                    “{div.tagline}”
                  </p>

                  {/* Key metric badge */}
                  <div className="mt-3 p-2 bg-[#FAF7F2] rounded-lg border border-[#E5DFD3]">
                    <div className="text-base font-black font-mono" style={{ color: div.brandColor }}>
                      {div.solution.keyMetric.value}
                    </div>
                    <div className="text-[10px] text-[#718579] truncate">
                      {div.solution.keyMetric.label}
                    </div>
                  </div>
                </div>

                {/* Unique Call To Action & Dedicated Page Button */}
                <div className="pt-4 mt-4 border-t border-[#F0EBE1] space-y-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenInquiry(detailed.uniqueCta.formCategory);
                    }}
                    className="w-full py-2 px-2.5 text-[11px] font-bold text-white rounded-lg transition-transform hover:scale-[1.02] shadow-xs flex items-center justify-center gap-1.5"
                    style={{ backgroundColor: div.brandColor }}
                  >
                    <span>{detailed.uniqueCta.primaryLabel}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigateDivision(detailedKey);
                    }}
                    className="w-full text-center text-[11px] font-bold text-[#133020] hover:text-[#DD5C36] transition-colors flex items-center justify-center gap-1 py-1"
                  >
                    <span>Dedicated Landing Page</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Division Interactive Inspector */}
        <div
          id={`division-${activeDivision.id}`}
          className="mt-10 bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-10 shadow-sm transition-all relative overflow-hidden"
        >
          {/* Subtle colored accent glow in top right */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none -mr-20 -mt-20"
            style={{ backgroundColor: activeDivision.brandColor }}
          />

          {/* Division Header Banner */}
          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-[#F0EBE1] pb-8 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold uppercase tracking-wider text-[#718579]">
                <span
                  className="px-2.5 py-1 rounded text-white font-bold"
                  style={{ backgroundColor: activeDivision.brandColor }}
                >
                  Step 0{activeDivision.stepNumber} of 05
                </span>
                <span>·</span>
                <span className="font-semibold" style={{ color: activeDivision.brandColor }}>
                  {activeDivision.verb}
                </span>
                <span>·</span>
                <span className="text-[#133020]">{activeDivision.solution.statusBadge}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#133020] tracking-tight">
                {activeDivision.name}
              </h3>

              <p className="text-lg sm:text-xl font-medium text-[#DD5C36]">
                “{activeDivision.tagline}”
              </p>

              <p className="text-sm sm:text-base text-[#445D4E] leading-relaxed pt-1">
                {activeDivision.shortDesc}
              </p>
            </div>

            {/* Division Action Buttons */}
            <div className="flex flex-col gap-2 min-w-[220px]">
              <button
                onClick={() => onNavigateDivision(idToDetailedMap[activeDivision.id])}
                className="w-full py-3 px-4 text-xs font-bold text-white rounded-lg transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
                style={{ backgroundColor: activeDivision.brandColor }}
              >
                <span>Visit Dedicated {activeDivision.verb} Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenInquiry(detailedData.uniqueCta.formCategory)}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#133020] bg-[#FAF7F2] hover:bg-[#F0EBE1] border border-[#E5DFD3] rounded-lg transition-colors"
              >
                {detailedData.uniqueCta.primaryLabel}
              </button>
            </div>
          </div>

          {/* 3-Column Content Flow: Problem -> Solution -> Synergy */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            
            {/* Column 1: The Problem (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-bold text-[#8C2B0E] uppercase tracking-wider">
                The Ground Reality & Problem
              </div>

              <div className="p-4 bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl space-y-2">
                <div className="text-2xl font-black font-mono text-[#DD5C36] tabular-nums">
                  {activeDivision.problem.stat}
                </div>
                <div className="text-xs font-bold text-[#133020]">
                  {activeDivision.problem.label}
                </div>
                <p className="text-xs text-[#526B5C] leading-relaxed">
                  {activeDivision.problem.detail}
                </p>
                <div className="pt-2 border-t border-[#E5DFD3] text-xs font-semibold text-[#8C2B0E]">
                  {activeDivision.problem.summary}
                </div>
              </div>

              {/* Drivers list */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-[#133020]">What Is Driving This Gap:</div>
                {activeDivision.drivers.map((driver: string, i: number) => (
                  <div key={i} className="text-xs text-[#445D4E] flex items-start gap-2 leading-relaxed">
                    <span className="font-mono text-[#DD5C36] font-bold text-[11px] mt-0.5">0{i + 1}</span>
                    <span>{driver}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: What We Do (Solution Pillars) (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-[#327039] uppercase tracking-wider">
                The TradeCare System Solution
              </div>

              <div className="space-y-3">
                {activeDivision.solution.pillars.map((pillar: { title: string; desc: string }, i: number) => (
                  <div key={i} className="p-4 bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#327039] shrink-0" />
                      <h4 className="text-sm font-bold text-[#133020]">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-[#526B5C] pl-6 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Specific Methodology Card (e.g. RASTA for Produce) */}
              {activeDivision.methodologySteps && (
                <div className="p-4 bg-[#FEF6E6] border border-[#F0BE49]/40 rounded-xl space-y-3">
                  <div className="text-xs font-bold text-[#8C5202] uppercase tracking-wide flex items-center justify-between">
                    <span>{activeDivision.methodologyName}</span>
                    <span className="text-[10px] font-mono">Continuous Cycle</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {activeDivision.methodologySteps.map((step: { letter: string; name: string; desc: string }, stepIdx: number) => (
                      <div key={`${step.letter}-${stepIdx}`} className="text-center p-1.5 bg-white rounded border border-[#F0BE49]/30">
                        <div className="text-sm font-black text-[#C27B08] font-mono">{step.letter}</div>
                        <div className="text-[10px] font-bold text-[#133020] truncate">{step.name}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#8C5202] leading-tight">
                    Every RASTA record captured at source in the hub directly feeds Assure (Step 4) and FarmDataPod (Step 3).
                  </p>
                </div>
              )}
            </div>

            {/* Column 3: The Synergy Hand-off & Actions (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-xs font-bold text-[#133020] uppercase tracking-wider">
                Ecosystem Hand-off
              </div>

              <div className="p-4 bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl space-y-3">
                <div>
                  <div className="text-[11px] font-bold text-[#327039] uppercase">Inbound Synergy</div>
                  <div className="text-xs text-[#445D4E] mt-0.5 leading-relaxed">
                    {activeDivision.synergyInput}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E5DFD3]">
                  <div className="text-[11px] font-bold text-[#DD5C36] uppercase">Outbound Value</div>
                  <div className="text-xs text-[#445D4E] mt-0.5 leading-relaxed">
                    {activeDivision.synergyOutput}
                  </div>
                </div>
              </div>

              {/* Verified Partners */}
              <div className="p-4 bg-white border border-[#E5DFD3] rounded-xl space-y-2">
                <div className="text-xs font-bold text-[#133020]">Active Partners & Standards</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeDivision.partners.map((partner: string) => (
                    <span
                      key={partner}
                      className="text-[11px] text-[#445D4E] bg-[#F5F2EA] px-2 py-1 rounded"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Field Operations In Action */}
              <div className="relative h-32 rounded-xl overflow-hidden border border-[#E5DFD3] shadow-xs group">
                <img
                  src={TRADECARE_IMAGES.divisions[activeDivision.id as keyof typeof TRADECARE_IMAGES.divisions]?.src}
                  alt={activeDivision.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-2.5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8EDD9]">
                    Stage 0{activeDivision.stepNumber} Field Operation
                  </span>
                  <span className="text-xs font-semibold text-white/95 leading-tight truncate">
                    {TRADECARE_IMAGES.divisions[activeDivision.id as keyof typeof TRADECARE_IMAGES.divisions]?.caption}
                  </span>
                </div>
              </div>


              {/* Full Division Deep Dive Button */}
              <button
                onClick={() => onNavigateDivision(idToDetailedMap[activeDivision.id])}
                className="w-full py-3 px-4 text-xs font-bold text-white rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2"
                style={{ backgroundColor: activeDivision.brandColor }}
              >
                <span>Read Full {activeDivision.name.split(' ')[0]} Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
