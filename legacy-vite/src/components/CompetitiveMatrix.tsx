import React from 'react';
import { Check, X, Shield, Lock, Award, Building, Sparkles } from 'lucide-react';
import { COMPETITOR_COMPARISON } from '../data/tradecareData';

export const CompetitiveMatrix: React.FC = () => {
  return (
    <section id="competitive-edge" className="py-16 sm:py-24 bg-white border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-[#DD5C36] tracking-wider uppercase mb-2">
            Market Defensibility & Moats
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133020] tracking-tight leading-tight text-balance">
            Every competitor sells one stage. <br className="hidden sm:inline" />
            Nobody else assembles the system.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#445D4E] leading-relaxed">
            While conventional players in Kenya operate in functional silos, TradeCare Africa integrates all five stages under one control tower, making our model uniquely resilient and defensible.
          </p>
        </div>

        {/* 5-Stage Comparative Grid Table */}
        <div className="mt-10 overflow-x-auto border border-[#E5DFD3] rounded-2xl bg-[#FAF7F2] shadow-xs">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#E5DFD3] bg-[#F5F2EA]">
                <th className="py-4 px-6 text-xs font-bold text-[#133020] uppercase tracking-wider">
                  One System — Five Stages
                </th>
                <th className="py-4 px-4 text-xs font-bold text-center text-[#DD5C36] bg-[#FDE8E2]/60 uppercase tracking-wider">
                  TradeCare Africa
                </th>
                <th className="py-4 px-4 text-xs font-bold text-center text-[#5A7062] uppercase tracking-wider">
                  Certification Bodies
                </th>
                <th className="py-4 px-4 text-xs font-bold text-center text-[#5A7062] uppercase tracking-wider">
                  Agritech Platforms
                </th>
                <th className="py-4 px-4 text-xs font-bold text-center text-[#5A7062] uppercase tracking-wider">
                  NGO / Donors
                </th>
                <th className="py-4 px-4 text-xs font-bold text-center text-[#5A7062] uppercase tracking-wider">
                  Brokers & Traders
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DFD3] text-sm">
              
              {/* Row 1: TRAIN */}
              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-bold text-[#133020]">01 · TRAIN</div>
                  <div className="text-xs text-[#556D5F]">TradeCare Academy — accredited, applied on farm</div>
                </td>
                <td className="py-4 px-4 text-center bg-[#FDE8E2]/30">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#327039] text-white">
                    <Check className="w-4 h-4" />
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#327039]">
                  <Check className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
              </tr>

              {/* Row 2: PRODUCE */}
              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-bold text-[#133020]">02 · PRODUCE</div>
                  <div className="text-xs text-[#556D5F]">Zao Safi Hub — graduate agronomists, demo farms</div>
                </td>
                <td className="py-4 px-4 text-center bg-[#FDE8E2]/30">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#327039] text-white">
                    <Check className="w-4 h-4" />
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#327039]">
                  <Check className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
              </tr>

              {/* Row 3: DIGITISE */}
              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-bold text-[#133020]">03 · DIGITISE</div>
                  <div className="text-xs text-[#556D5F]">FarmDataPod — farm, plot, spray records at source</div>
                </td>
                <td className="py-4 px-4 text-center bg-[#FDE8E2]/30">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#327039] text-white">
                    <Check className="w-4 h-4" />
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#327039]">
                  <Check className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
              </tr>

              {/* Row 4: ASSURE */}
              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-bold text-[#133020]">04 · ASSURE</div>
                  <div className="text-xs text-[#556D5F]">TCert — Independent accredited assurance</div>
                </td>
                <td className="py-4 px-4 text-center bg-[#FDE8E2]/30">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#327039] text-white">
                    <Check className="w-4 h-4" />
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-[#327039]">
                  <Check className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
              </tr>

              {/* Row 5: CONNECT */}
              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-bold text-[#133020]">05 · CONNECT</div>
                  <div className="text-xs text-[#556D5F]">TradeCare Market + Mazao Safi — Carrefour / QuickMart</div>
                </td>
                <td className="py-4 px-4 text-center bg-[#FDE8E2]/30">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#327039] text-white">
                    <Check className="w-4 h-4" />
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#9EABA3]">
                  <X className="w-4 h-4 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center text-[#327039]">
                  <Check className="w-4 h-4 mx-auto" />
                </td>
              </tr>

            </tbody>
          </table>
          <div className="p-4 bg-[#F5F2EA] border-t border-[#E5DFD3] text-[11px] text-[#718579] flex flex-wrap items-center justify-between gap-2">
            <span>Certification bodies: SGS, Bureau Veritas, Control Union, AfriCert · Agritech: Apollo, iProcure, DigiCow</span>
            <span className="font-semibold text-[#133020]">TradeCare Africa: 5 of 5 Stages Integrated</span>
          </div>
        </div>

        {/* The 4 Unfair Barriers Grid */}
        <div className="mt-14 space-y-4">
          <div className="text-xs font-bold text-[#133020] uppercase tracking-wider">
            What Keeps Competitors Out — Four Structural Barriers
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPETITOR_COMPARISON.barriers.map((barrier, idx) => (
              <div
                key={barrier.division}
                className="p-5 bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl space-y-2 hover:bg-white hover:border-[#DD5C36] transition-all hover:shadow-sm"
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#DD5C36]">
                  <span>Barrier 0{idx + 1}</span>
                  <span className="text-[#718579] uppercase">{barrier.division}</span>
                </div>
                <h4 className="text-sm font-bold text-[#133020] leading-snug">
                  {barrier.title}
                </h4>
                <p className="text-xs text-[#526B5C] leading-relaxed">
                  {barrier.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
