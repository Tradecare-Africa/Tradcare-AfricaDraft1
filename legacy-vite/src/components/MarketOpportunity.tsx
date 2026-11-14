import React from 'react';
import { TrendingUp, Globe2, Target, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { MARKET_DATA } from '../data/tradecareData';

interface MarketOpportunityProps {
  onOpenInquiry: (tab?: string) => void;
}

export const MarketOpportunity: React.FC<MarketOpportunityProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-[#DD5C36] tracking-wider uppercase mb-2">
            Market Sizing & Commercial Scale
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133020] tracking-tight leading-tight text-balance">
            US$105M a year in Kenya alone.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#445D4E] leading-relaxed">
            Sized bottom-up from our own price book—every input is a unit count times a verified commercial price TradeCare already charges.
          </p>
        </div>

        {/* 3 Pillars: TAM -> SAM -> SOM */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* TAM */}
          <div className="p-6 bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#718579] uppercase tracking-wider">
                Total Addressable
              </span>
              <Globe2 className="w-4 h-4 text-[#718579]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#133020] tabular-nums">
              {MARKET_DATA.tam.value}
            </div>
            <div className="text-xs font-bold text-[#133020]">
              {MARKET_DATA.tam.label}
            </div>
            <p className="text-xs text-[#556D5F] leading-relaxed">
              {MARKET_DATA.tam.subtext}
            </p>
          </div>

          {/* SAM */}
          <div className="p-6 bg-white border-2 border-[#DD5C36] rounded-2xl space-y-3 shadow-sm relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#DD5C36] uppercase tracking-wider">
                Serviceable Addressable
              </span>
              <Target className="w-4 h-4 text-[#DD5C36]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#DD5C36] tabular-nums">
              {MARKET_DATA.sam.value}
            </div>
            <div className="text-xs font-bold text-[#133020]">
              {MARKET_DATA.sam.label}
            </div>
            <p className="text-xs text-[#556D5F] leading-relaxed">
              {MARKET_DATA.sam.subtext}
            </p>
          </div>

          {/* SOM */}
          <div className="p-6 bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#327039] uppercase tracking-wider">
                Obtainable by 2032
              </span>
              <TrendingUp className="w-4 h-4 text-[#327039]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#327039] tabular-nums">
              {MARKET_DATA.som.value}
            </div>
            <div className="text-xs font-bold text-[#133020]">
              {MARKET_DATA.som.label}
            </div>
            <p className="text-xs text-[#556D5F] leading-relaxed">
              {MARKET_DATA.som.subtext}
            </p>
          </div>

        </div>

        {/* Revenue Drivers Grid */}
        <div className="mt-12 space-y-4">
          <div className="text-xs font-bold text-[#133020] uppercase tracking-wider">
            What Makes The US$105M Serviceable Market:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MARKET_DATA.revenueDrivers.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl space-y-2"
              >
                <div className="text-[11px] font-mono font-bold text-[#718579] uppercase">
                  {item.division}
                </div>
                <h4 className="text-sm font-bold text-[#133020]">
                  {item.stream}
                </h4>
                <div className="text-xs font-medium text-[#445D4E] pt-1 border-t border-[#E5DFD3]">
                  {item.formula}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-4 bg-[#133020] text-white rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs">
          <span>
            <strong className="text-[#F0BE49]">Bottom-up validated:</strong> Every input is backed by real paying clients since 2017.
          </span>
          <button
            onClick={() => onOpenInquiry('investors')}
            className="font-bold text-[#F8EDD9] hover:text-[#DD5C36] flex items-center gap-1 transition-colors"
          >
            <span>Request Full Investor Briefing Deck</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
