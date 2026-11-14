import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Check, ArrowRight } from 'lucide-react';
import { FOUNDER_DATA } from '../data/tradecareData';
import { TRADECARE_IMAGES } from '../data/tradecareImages';

interface FounderStoryProps {
  onOpenInquiry: (tab?: string) => void;
}

export const FounderStory: React.FC<FounderStoryProps> = ({ onOpenInquiry }) => {
  return (
    <section id="founder" className="py-16 sm:py-24 bg-white border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-[#DD5C36] tracking-wider uppercase mb-2">
            Leadership & Purpose · Women-Led Agriculture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133020] tracking-tight leading-tight text-balance">
            The visionary driving Kenya's integrated agricultural revolution.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#445D4E] leading-relaxed">
            TradeCare Africa was founded in 2014 by Joyce Wambui Gema with a clear conviction: African smallholder farmers will never achieve enduring prosperity through disconnected aid or piecemeal advice. They need one cohesive company running the entire chain.
          </p>
        </div>

        {/* 2-Column Founder Feature */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Card & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xs">
              
              {/* Decorative warm aura */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FDE8E2] rounded-full blur-2xl opacity-70 pointer-events-none -mr-10 -mt-10" />

              {/* Founder Header / Portrait */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative shrink-0">
                  <img
                    src={TRADECARE_IMAGES.founderJoyceGema.src}
                    alt={TRADECARE_IMAGES.founderJoyceGema.alt}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-white shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#DD5C36] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-xs">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#133020]">
                    {FOUNDER_DATA.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#DD5C36]">
                    {FOUNDER_DATA.role}
                  </div>
                  <div className="text-xs text-[#526B5C] mt-1 leading-snug">
                    Founded 2014 by Joyce Wambui Gema · Agricultural Consultancy Award Winner 2023
                  </div>
                </div>
              </div>

              {/* Award Citation Badge */}
              <div className="p-4 bg-white rounded-xl border border-[#E5DFD3] space-y-1 relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#327039]">
                  <Award className="w-4 h-4 text-[#C27B08]" />
                  <span>National Industry Honor</span>
                </div>
                <div className="text-sm font-bold text-[#133020]">
                  {FOUNDER_DATA.award}
                </div>
                <p className="text-xs text-[#556D5F]">
                  Recognizing over a decade of groundbreaking work transforming smallholder agricultural value chains.
                </p>
              </div>

              {/* Core Philosophy Quote */}
              <div className="relative z-10 p-4 bg-[#F5F2EA] rounded-xl border border-[#DDD6C8] text-xs font-medium text-[#133020] leading-relaxed italic">
                “{FOUNDER_DATA.quote}”
              </div>

              {/* Micro milestones */}
              <div className="pt-2 border-t border-[#E5DFD3] grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-bold text-[#133020] block">2014</span>
                  <span className="text-[#6A7E72]">Founded TradeCare Africa</span>
                </div>
                <div>
                  <span className="font-bold text-[#133020] block">2017</span>
                  <span className="text-[#6A7E72]">TCert (Independent Assurance)</span>
                </div>
                <div>
                  <span className="font-bold text-[#133020] block">2019</span>
                  <span className="text-[#6A7E72]">IDH Embu Study (+245%)</span>
                </div>
                <div>
                  <span className="font-bold text-[#133020] block">2023</span>
                  <span className="text-[#6A7E72]">Consultancy Award Winner</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Biography & Systems Architecture */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-sm sm:text-base text-[#3A4F41] leading-relaxed">
              {FOUNDER_DATA.biography.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Achievements Grid */}
            <div className="pt-4 border-t border-[#E5DFD3] space-y-3">
              <div className="text-xs font-bold text-[#133020] uppercase tracking-wider">
                Signature Institutional Milestones:
              </div>
              
              <div className="space-y-2.5">
                {FOUNDER_DATA.keyAchievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3]">
                    <span className="w-5 h-5 rounded-full bg-[#EBF4EC] text-[#327039] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs text-[#133020] font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry('leadership')}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] rounded-lg transition-colors shadow-xs flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Connect With Leadership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#divisions"
                className="px-6 py-3 text-xs font-semibold text-[#133020] bg-[#FAF7F2] hover:bg-[#F0EBE1] border border-[#E5DFD3] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Inspect The 5 Divisions
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
