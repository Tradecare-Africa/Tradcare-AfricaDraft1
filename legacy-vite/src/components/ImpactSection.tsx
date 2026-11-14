import React, { useState } from 'react';
import { Award, CheckCircle2, TrendingUp, Users, DollarSign, Shield, ArrowRight, Sliders, ExternalLink } from 'lucide-react';
import { CASE_STUDIES } from '../data/tradecareData';

interface ImpactSectionProps {
  onOpenInquiry: (tab?: string) => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenInquiry }) => {
  // Simulator State
  const [farmerCount, setFarmerCount] = useState<number>(500);
  const [cropType, setCropType] = useState<'horticulture' | 'macadamia' | 'avocado'>('horticulture');
  const [targetMarket, setTargetMarket] = useState<'supermarket' | 'export' | 'both'>('both');

  // Multiplier math based on Embu & Lari empirically verified studies
  const cropDetails = {
    horticulture: {
      name: 'Fresh French Beans & Snow Peas',
      baseSurplus: 0.8, // tons/farmer baseline
      targetSurplus: 2.6, // tons/farmer under TradeCare
      baseRevenuePerTon: 850, // USD
      premiumMultiplier: 1.35, // +35% with Carrefour/QuickMart Mazao Safi
    },
    macadamia: {
      name: 'Organic Macadamia Nuts',
      baseSurplus: 0.5,
      targetSurplus: 1.8,
      baseRevenuePerTon: 1400,
      premiumMultiplier: 1.45,
    },
    avocado: {
      name: 'Hass Export Avocados',
      baseSurplus: 1.2,
      targetSurplus: 3.5,
      baseRevenuePerTon: 950,
      premiumMultiplier: 1.40,
    },
  };

  const selectedCrop = cropDetails[cropType];
  const marketMultiplier = targetMarket === 'export' ? 1.15 : targetMarket === 'both' ? 1.08 : 1.0;

  const baselineVolumeTons = Math.round(farmerCount * selectedCrop.baseSurplus);
  const projectedVolumeTons = Math.round(farmerCount * selectedCrop.targetSurplus);
  const additionalSurplusTons = projectedVolumeTons - baselineVolumeTons;

  const baselineIncome = Math.round(baselineVolumeTons * selectedCrop.baseRevenuePerTon);
  const projectedIncome = Math.round(
    projectedVolumeTons * selectedCrop.baseRevenuePerTon * selectedCrop.premiumMultiplier * marketMultiplier
  );
  const incomeIncreasePercent = Math.round(((projectedIncome - baselineIncome) / baselineIncome) * 100);
  const farmLevelValuePerDollar = (projectedIncome / (farmerCount * 250)).toFixed(2);

  return (
    <section id="impact" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-[#DD5C36] tracking-wider uppercase mb-2">
            Empirical Proof & Rigor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133020] tracking-tight leading-tight text-balance">
            Embu proved it. Lari is running it today.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#445D4E] leading-relaxed">
            Our model is not a speculative pitch deck. It was independently verified across 1,800 macadamia farmers in Embu by IDH and NewForesight, and is operating at scale in Lari, Kiambu right now.
          </p>
        </div>

        {/* 2 Flagship Case Studies Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Case Study 1: Embu (Jungle Nuts) */}
          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-start justify-between border-b border-[#F0EBE1] pb-4">
              <div>
                <span className="text-xs font-bold text-[#327039] uppercase tracking-wide">
                  Proven 2017–2019 · Embu County
                </span>
                <h3 className="text-xl font-bold text-[#133020] mt-1">
                  1,800 Organic Macadamia Farmers
                </h3>
                <p className="text-xs text-[#526B5C]">
                  Service delivery model with Jungle Nuts Kenya across 14 clusters
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#327039] bg-[#EBF4EC] px-2.5 py-1 rounded font-semibold shrink-0">
                IDH Audited
              </span>
            </div>

            {/* Metrics 4-grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
                <div className="text-3xl font-black font-mono text-[#DD5C36] tabular-nums">
                  +245%
                </div>
                <div className="text-xs text-[#526B5C] mt-1">
                  Net income for small farmers by Year 10
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
                <div className="text-3xl font-black font-mono text-[#327039] tabular-nums">
                  20 → 60+
                </div>
                <div className="text-xs text-[#526B5C] mt-1">
                  kg per tree — productivity tripled
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
                <div className="text-3xl font-black font-mono text-[#133020] tabular-nums">
                  3.15×
                </div>
                <div className="text-xs text-[#526B5C] mt-1">
                  The poverty line, up from 0.85×
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
                <div className="text-3xl font-black font-mono text-[#C27B08] tabular-nums">
                  US$11.74
                </div>
                <div className="text-xs text-[#526B5C] mt-1">
                  Farm-level value per US$1 invested
                </div>
              </div>
            </div>

            {/* Embu Lessons learned into System */}
            <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
              <div className="text-xs font-bold text-[#133020]">What Embu Taught Us — Now In The System:</div>
              <ul className="text-xs text-[#445D4E] space-y-1.5 list-disc pl-4">
                <li><strong className="text-[#133020]">The cluster is the unit:</strong> 30–170 farmers form the ideal hub footprint.</li>
                <li><strong className="text-[#133020]">Digital transparency builds trust:</strong> Now the FarmDataPod & TCert audit spine.</li>
                <li><strong className="text-[#133020]">Incentives reward practice:</strong> Realized through the Zao Safi premium price signal.</li>
              </ul>
            </div>

            <div className="text-[11px] text-[#718579] pt-2">
              Source: Public SDM Case Report, Jungle Nuts Kenya — IDH / NewForesight (April 2019).
            </div>
          </div>

          {/* Case Study 2: Lari, Kiambu (Running Now) */}
          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-start justify-between border-b border-[#F0EBE1] pb-4">
              <div>
                <span className="text-xs font-bold text-[#DD5C36] uppercase tracking-wide">
                  Running Now · Lari, Kiambu
                </span>
                <h3 className="text-xl font-bold text-[#133020] mt-1">
                  Lari Horticulture Cooperative (Kinale Hub)
                </h3>
                <p className="text-xs text-[#526B5C]">
                  The whole suite: Zao Safi extension, FarmDataPod records, demand matching
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#DD5C36] bg-[#FDE8E2] px-2.5 py-1 rounded font-semibold shrink-0">
                Active Offtake
              </span>
            </div>

            {/* Metrics 4-grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
                <div className="text-3xl font-black font-mono text-[#133020] tabular-nums">
                  275
                </div>
                <div className="text-xs text-[#526B5C] mt-1">
                  Producers registered (100% of coop)
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
                <div className="text-3xl font-black font-mono text-[#327039] tabular-nums">
                  144
                </div>
                <div className="text-xs text-[#526B5C] mt-1">
                  Already actively running RASTA
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
                <div className="text-3xl font-black font-mono text-[#C27B08] tabular-nums">
                  100%
                </div>
                <div className="text-xs text-[#526B5C] mt-1">
                  Consent & GPS boundary captured
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
                <div className="text-2xl font-black font-mono text-[#DD5C36] tabular-nums pt-1">
                  Oct 2026
                </div>
                <div className="text-xs text-[#526B5C] mt-1">
                  Full suite scale & TradeCare Market
                </div>
              </div>
            </div>

            {/* Buyers and Commercial Offtake */}
            <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
              <div className="text-xs font-bold text-[#133020]">Active Offtake Buyers:</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-[#FAF7F2] border border-[#E5DFD3] rounded-md font-semibold text-[#133020]">
                  Carrefour Kenya
                </span>
                <span className="px-3 py-1 bg-[#FAF7F2] border border-[#E5DFD3] rounded-md font-semibold text-[#133020]">
                  QuickMart Supermarkets
                </span>
                <span className="px-3 py-1 bg-[#FAF7F2] border border-[#E5DFD3] rounded-md font-semibold text-[#133020]">
                  Regional Wholesalers
                </span>
              </div>
            </div>

            <div className="text-[11px] text-[#718579] pt-2">
              Source: TradeCare Producer Registration Records, Kiambu County (August 2026).
            </div>
          </div>

        </div>

        {/* 300+ Paying Assurance Clients Highlight Ribbon */}
        <div className="mt-8 bg-[#133020] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F0BE49]">
              <Shield className="w-4 h-4" />
              <span>TCert (Assure) · Independent Certification</span>
            </div>
            <h3 className="text-2xl font-bold">
              300+ Paying Assurance Clients Since 2017
            </h3>
            <p className="text-sm text-[#A7C4A2] leading-relaxed">
              Every single client already needs audit-ready data. Assurance is how we enter; the full 5-stage system is how we grow.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('assure')}
            className="px-6 py-3 text-xs font-semibold text-[#133020] bg-white hover:bg-[#F8EDD9] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Request Certification Quotation →
          </button>
        </div>

        {/* Interactive Cooperative & Farm Value Simulator */}
        <div className="mt-14 bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#F0EBE1] pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#DD5C36] uppercase tracking-wide">
                <Sliders className="w-4 h-4" />
                <span>Interactive Supply Chain Economic Simulator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#133020] mt-1">
                Estimate the TradeCare Multiplier For Your Group
              </h3>
              <p className="text-sm text-[#526B5C] mt-1 max-w-2xl">
                Configure your producer cohort to calculate marketable surplus growth, export compliance readiness, and net farmer revenue impact.
              </p>
            </div>
            <div className="text-xs font-mono text-[#718579] bg-[#FAF7F2] p-2 rounded border border-[#E5DFD3]">
              Model: TCA-BUD-MSCT-001 V07
            </div>
          </div>

          {/* Controls: Sliders and Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Control 1: Farmer Count */}
            <div className="space-y-2 p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
              <div className="flex justify-between items-center text-xs font-bold text-[#133020]">
                <span>Producer Group Size:</span>
                <span className="font-mono text-[#DD5C36] text-sm tabular-nums">{farmerCount} Farmers</span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={farmerCount}
                onChange={(e) => setFarmerCount(Number(e.target.value))}
                className="w-full accent-[#DD5C36] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#718579]">
                <span>50 (Village Cluster)</span>
                <span>1,000 (Hub)</span>
                <span>2,500+ (Federation)</span>
              </div>
            </div>

            {/* Control 2: Crop Type */}
            <div className="space-y-2 p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
              <div className="text-xs font-bold text-[#133020]">Primary Crop System:</div>
              <select
                value={cropType}
                onChange={(e) => setCropType(e.target.value as any)}
                className="w-full p-2 bg-white border border-[#E5DFD3] rounded-lg text-xs font-semibold text-[#133020] focus:outline-none focus:ring-1 focus:ring-[#DD5C36]"
              >
                <option value="horticulture">Fresh French Beans & Snow Peas (Lari Spec)</option>
                <option value="macadamia">Organic Macadamia Nuts (Embu Spec)</option>
                <option value="avocado">Export Hass Avocados (Central Kenya)</option>
              </select>
              <div className="text-[11px] text-[#556D5F]">
                Standard baseline: 0.5–1.2 tons/farmer
              </div>
            </div>

            {/* Control 3: Target Market */}
            <div className="space-y-2 p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
              <div className="text-xs font-bold text-[#133020]">Target Market Channel:</div>
              <select
                value={targetMarket}
                onChange={(e) => setTargetMarket(e.target.value as any)}
                className="w-full p-2 bg-white border border-[#E5DFD3] rounded-lg text-xs font-semibold text-[#133020] focus:outline-none focus:ring-1 focus:ring-[#DD5C36]"
              >
                <option value="supermarket">Domestic Retail (Carrefour, QuickMart)</option>
                <option value="export">EU/UK Direct Export (EUDR & MRL Compliant)</option>
                <option value="both">Blended Multi-Channel (Recommended)</option>
              </select>
              <div className="text-[11px] text-[#556D5F]">
                Capacity-matched to prevent single-buyer risk
              </div>
            </div>

          </div>

          {/* Real-Time Calculated Results Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
              <div className="text-xs font-semibold text-[#526B5C]">Surplus Output</div>
              <div className="text-2xl font-black font-mono text-[#133020] tabular-nums mt-1">
                {projectedVolumeTons} <span className="text-sm font-normal">Tons</span>
              </div>
              <div className="text-[11px] text-[#327039] font-semibold mt-1">
                +{additionalSurplusTons} tons marketable gain
              </div>
            </div>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
              <div className="text-xs font-semibold text-[#526B5C]">Projected Revenue</div>
              <div className="text-2xl font-black font-mono text-[#DD5C36] tabular-nums mt-1">
                US${(projectedIncome / 1000).toFixed(0)}k
              </div>
              <div className="text-[11px] text-[#DD5C36] font-semibold mt-1">
                +{incomeIncreasePercent}% income trajectory
              </div>
            </div>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
              <div className="text-xs font-semibold text-[#526B5C]">Resident Agronomists</div>
              <div className="text-2xl font-black font-mono text-[#327039] tabular-nums mt-1">
                {Math.ceil(farmerCount / 50)} <span className="text-sm font-normal">Graduates</span>
              </div>
              <div className="text-[11px] text-[#526B5C] mt-1">
                1:50 Intensive coaching ratio
              </div>
            </div>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3]">
              <div className="text-xs font-semibold text-[#526B5C]">ROI Efficiency</div>
              <div className="text-2xl font-black font-mono text-[#C27B08] tabular-nums mt-1">
                US${farmLevelValuePerDollar}
              </div>
              <div className="text-[11px] text-[#526B5C] mt-1">
                Farm value per $1 invested
              </div>
            </div>

          </div>

          {/* Call to action at bottom of simulator */}
          <div className="p-4 bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#526B5C]">
              <strong className="text-[#133020]">Ready to deploy a Zao Safi Hub for your supply chain?</strong> We provide the agronomists, software, certification, and retail contracts.
            </div>
            <button
              onClick={() => onOpenInquiry('produce')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Deploy a Hub Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
