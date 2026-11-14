import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, BookOpen, Sprout, 
  Database, ShoppingBag, Award, Users, Check, ChevronDown, ChevronUp,
  FileText, ExternalLink, HelpCircle, Layers, RefreshCw, Zap
} from 'lucide-react';
import { DIVISIONS_DETAILED, DivisionDetailed, BRAND_COLORS } from '../data/tradecareData';
import { TRADECARE_IMAGES } from '../data/tradecareImages';

interface DivisionLandingPageProps {
  divisionId: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market';
  onNavigateHome: () => void;
  onNavigateDivision: (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => void;
  onOpenInquiry: (category: string) => void;
}

export const DivisionLandingPage: React.FC<DivisionLandingPageProps> = ({
  divisionId,
  onNavigateHome,
  onNavigateDivision,
  onOpenInquiry,
}) => {
  const data: DivisionDetailed = DIVISIONS_DETAILED[divisionId] || DIVISIONS_DETAILED['academy'];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Interactive division-specific tools
  const [selectedStandard, setSelectedStandard] = useState<string>('globalgap');
  const [eudrPlotChecked, setEudrPlotChecked] = useState<boolean>(true);
  const [activeRastaStep, setActiveRastaStep] = useState<number>(0);

  const divisionOrder: ('academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market')[] = [
    'academy', 'zaosafi', 'farmdatapod', 'tcert', 'market'
  ];

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'academy': return <BookOpen className="w-5 h-5" />;
      case 'zaosafi': return <Sprout className="w-5 h-5" />;
      case 'farmdatapod': return <Database className="w-5 h-5" />;
      case 'tcert': return <ShieldCheck className="w-5 h-5" />;
      case 'market': return <ShoppingBag className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      
      {/* 1. Top Ecosystem Context & Breadcrumb Bar */}
      <div className="bg-white border-b border-[#E5DFD3] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          
          {/* Breadcrumb & Back to Home */}
          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 font-bold text-[#133020] hover:text-[#DD5C36] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>TradeCare Africa Overview</span>
            </button>
            <span className="text-[#A7C4A2]" aria-hidden="true">/</span>
            <span className="text-[#718579]">Service Ecosystem</span>
            <span className="text-[#A7C4A2]" aria-hidden="true">/</span>
            <span className="font-bold text-[#133020]">{data.name}</span>
          </div>

          {/* Quick Division Switcher Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {divisionOrder.map((key) => {
              const divItem = DIVISIONS_DETAILED[key];
              const isCurrent = key === divisionId;
              return (
                <button
                  key={key}
                  onClick={() => onNavigateDivision(key)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#133020] text-white shadow-xs'
                      : 'text-[#526B5C] hover:bg-[#F5F2EA] hover:text-[#133020]'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: divItem.brandColor }}
                  />
                  <span>0{divItem.stepNumber} · {divItem.verb}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* 2. Division Dedicated Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-[#E5DFD3] bg-white">
        {/* Ambient brand color wash */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none -mr-20 -mt-20"
          style={{ backgroundColor: data.brandColor }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#718579]">
                <span
                  className="px-2.5 py-1 rounded text-white font-bold"
                  style={{ backgroundColor: data.brandColor }}
                >
                  {data.badgeText}
                </span>
                <span>·</span>
                <span style={{ color: data.brandColor }}>{data.subtitle}</span>
                <span>·</span>
                <span>TradeCare Africa Ecosystem</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133020] tracking-tight leading-[1.15] text-balance">
                {data.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#3A4F41] font-normal leading-relaxed">
                {data.heroSubheadline}
              </p>

              {/* Featured Value Chain Banner for Connect Division */}
              {divisionId === 'market' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FDE8E2] border border-[#DD5C36]/40 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#DD5C36] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#DD5C36] animate-pulse" />
                    <span>Integrated Value Chain · From Kenyan Smallholder Farms to Global Markets</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#133020] font-semibold leading-relaxed">
                    Connecting smallholder growers directly to verified agronomy, traceability, certification, and premium buyers.
                  </p>
                </div>
              )}

              {/* Tagline Box */}
              <div
                className="p-4 rounded-xl border flex items-center gap-3"
                style={{ backgroundColor: data.accentBg, borderColor: `${data.brandColor}30` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 font-bold"
                  style={{ backgroundColor: data.brandColor }}
                >
                  {getDivisionIcon(divisionId)}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide" style={{ color: data.textColor }}>
                    Core Divisional Mandate
                  </div>
                  <div className="text-sm font-semibold text-[#133020]">
                    “{data.tagline}”
                  </div>
                </div>
              </div>

              {/* Division Primary Call to Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiry(data.uniqueCta.formCategory)}
                  className="px-6 py-3.5 text-xs font-semibold text-white rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap shrink-0"
                  style={{ backgroundColor: data.brandColor }}
                >
                  <span>{data.uniqueCta.primaryLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenInquiry(data.uniqueCta.formCategory)}
                  className="px-6 py-3.5 text-xs font-semibold text-[#133020] bg-[#FAF7F2] hover:bg-[#F0EBE1] border border-[#E5DFD3] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  {data.uniqueCta.secondaryLabel}
                </button>
              </div>

            </div>

            {/* Right KPI & Verified Evidence Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
                <div className="border-b border-[#E5DFD3] pb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#718579]">
                    Verified Benchmarks
                  </span>
                  <span className="font-mono text-xs font-bold text-[#133020]">
                    Stage 0{data.stepNumber}
                  </span>
                </div>

                {/* Division Operational Photo */}
                <div className="relative h-44 rounded-xl overflow-hidden border border-[#E5DFD3] shadow-xs group">
                  <img
                    src={TRADECARE_IMAGES.divisions[divisionId]?.src}
                    alt={TRADECARE_IMAGES.divisions[divisionId]?.alt || data.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8EDD9]">
                      {data.verb} Operations In Field
                    </span>
                    <span className="text-xs font-semibold text-white/95 mt-0.5 leading-tight">
                      {TRADECARE_IMAGES.divisions[divisionId]?.caption}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {data.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-[#E5DFD3]">
                      <div
                        className="text-2xl font-black font-mono tabular-nums"
                        style={{ color: data.brandColor }}
                      >
                        {m.value}
                      </div>
                      <div className="text-xs font-bold text-[#133020] mt-0.5">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-[#718579] mt-0.5">
                        {m.source}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-[#556D5F] flex flex-wrap items-center justify-between gap-1 border-t border-[#E5DFD3]">
                  <span>Founded 2014 by Joyce Wambui Gema</span>
                  <span className="font-semibold text-[#133020]">Agricultural Consultancy Award Winner 2023</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Division Detailed Services Section */}
      <section className="py-16 sm:py-20 border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl">
            <div
              className="text-xs font-bold tracking-wider uppercase mb-1"
              style={{ color: data.brandColor }}
            >
              Services & Core Deliverables
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133020] tracking-tight">
              How {data.name} Operates On The Ground
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#445D4E] leading-relaxed">
              {data.overview}
            </p>
          </div>

          {/* 3 Detailed Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-7 space-y-4 flex flex-col justify-between hover:shadow-sm transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="w-7 h-7 rounded-lg text-xs font-bold text-white flex items-center justify-center shrink-0"
                      style={{ backgroundColor: data.brandColor }}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-[#718579]">
                      Standard Service
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#133020]">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-[#526B5C] leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
                    <div className="text-[11px] font-bold text-[#133020]">Key Deliverables:</div>
                    {svc.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#445D4E]">
                        <Check className="w-3.5 h-3.5 text-[#327039] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0EBE1] text-[11px] text-[#718579]">
                  <strong className="text-[#133020]">Commercial Model: </strong>
                  {svc.pricingModel}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Target Audience & Stakeholder Value */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl">
            <div
              className="text-xs font-bold tracking-wider uppercase mb-1"
              style={{ color: data.brandColor }}
            >
              Audience & Value Propositions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133020] tracking-tight">
              Who {data.name} Serves
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#445D4E]">
              Engineered to resolve real commercial pain points for distinct actors across Africa's agricultural value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.targetAudience.map((aud, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl p-6 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#DD5C36]" />
                  <h3 className="text-sm font-bold text-[#133020]">{aud.persona}</h3>
                </div>

                <p className="text-xs text-[#526B5C] leading-relaxed">
                  {aud.description}
                </p>

                <div className="p-3 bg-white rounded-xl border border-[#E5DFD3] space-y-1.5 text-xs">
                  <div>
                    <span className="font-bold text-[#8C2B0E]">Critical Pain Point: </span>
                    <span className="text-[#556D5F]">{aud.keyNeed}</span>
                  </div>
                  <div className="pt-1.5 border-t border-[#F0EBE1]">
                    <span className="font-bold text-[#327039]">TradeCare Solution: </span>
                    <span className="text-[#556D5F]">{aud.solutionProvided}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quantified Benefits Banner */}
          <div className="p-6 bg-[#F5F2EA] border border-[#DDD6C8] rounded-2xl">
            <div className="text-xs font-bold text-[#133020] uppercase tracking-wide mb-4">
              Measurable Stakeholder Impact
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.benefits.map((b, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-lg font-black font-mono text-[#DD5C36]">
                    {b.metric}
                  </div>
                  <div className="text-xs font-bold text-[#133020]">
                    {b.stakeholder}
                  </div>
                  <p className="text-xs text-[#526B5C]">
                    {b.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. How This Division Integrates With The Other 4 Divisions (Synergy Focus) */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#DD5C36] tracking-wider uppercase mb-1">
              Supply Chain Control Tower · Ecosystem Synergy
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133020] tracking-tight">
              How {data.name} Integrates With The Sibling Divisions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#445D4E] leading-relaxed">
              No division in TradeCare Africa operates as an isolated silo. See exactly how {data.name} passes data, crops, and audit credentials into the rest of the chain.
            </p>
          </div>

          {/* 4 Handshake Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.howItIntegrates.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5DFD3] rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DD5C36]" />
                    <span className="text-xs font-bold text-[#133020]">
                      {item.targetDivisionName}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                    item.direction === 'passes_to'
                      ? 'bg-[#EBF4EC] text-[#327039]'
                      : 'bg-[#FDE8E2] text-[#DD5C36]'
                  }`}>
                    {item.direction === 'passes_to' ? 'OUTBOUND →' : '← INBOUND'}
                  </span>
                </div>

                <p className="text-xs text-[#445D4E] leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onNavigateDivision(item.targetDivisionId as any)}
                    className="text-xs font-semibold text-[#DD5C36] hover:underline flex items-center gap-1"
                  >
                    <span>View {item.targetDivisionName.split(' ')[0]} Page</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Synergy Guarantee Callout */}
          <div className="p-5 bg-white border border-[#E5DFD3] rounded-2xl flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-[#133020]">
                The Closed-Loop Advantage
              </div>
              <p className="text-xs text-[#526B5C]">
                Founded by Joyce Wambui Gema to end the cycle of fragmented, short-lived agri interventions in East Africa.
              </p>
            </div>
            <button
              onClick={onNavigateHome}
              className="px-4 py-2 text-xs font-semibold text-[#133020] bg-[#FAF7F2] hover:bg-[#EAE4D7] border border-[#DDD6C8] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Explore Full Control Tower Map →
            </button>
          </div>

        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div>
            <div className="text-xs font-bold text-[#718579] tracking-wider uppercase mb-1">
              Common Inquiries
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133020] tracking-tight">
              Frequently Asked Questions About {data.name}
            </h2>
          </div>

          <div className="space-y-3">
            {data.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E5DFD3] rounded-xl overflow-hidden bg-[#FAF7F2]"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm text-[#133020] flex items-center justify-between gap-4"
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#DD5C36] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#718579] shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#445D4E] leading-relaxed border-t border-[#E5DFD3]/60 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Dedicated Division Bottom CTA Banner */}
      <section className="py-16 sm:py-20 bg-[#133020] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-[#F0BE49] uppercase tracking-wider">
            Take The Next Step · {data.name}
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto text-balance">
            Ready to integrate with {data.name}?
          </h2>

          <p className="text-sm sm:text-base text-[#A7C4A2] max-w-xl mx-auto leading-relaxed">
            Our Nairobi operations team and field agronomists are ready to evaluate your farming cluster, outgrower scheme, or commercial procurement needs.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry(data.uniqueCta.formCategory)}
              className="px-8 py-3.5 text-xs font-bold text-white rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap shrink-0"
              style={{ backgroundColor: data.brandColor }}
            >
              <span>{data.uniqueCta.primaryLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateHome}
              className="px-6 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Back to Main TradeCare Website
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
