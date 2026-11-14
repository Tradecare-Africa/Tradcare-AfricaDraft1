import React from 'react';
import { ArrowUp, ShieldCheck, Award } from 'lucide-react';
import { DIVISIONS } from '../data/tradecareData';

interface FooterProps {
  onSelectDivision: (id: string) => void;
  onOpenInquiry: (tab?: string) => void;
  onNavigateHome: () => void;
  onNavigateDivision: (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => void;
  onNavigateTeam?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onSelectDivision, 
  onOpenInquiry,
  onNavigateHome,
  onNavigateDivision,
  onNavigateTeam,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const divisionIdMap: Record<string, 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market'> = {
    train: 'academy',
    produce: 'zaosafi',
    digitise: 'farmdatapod',
    assure: 'tcert',
    connect: 'market',
  };

  return (
    <footer className="bg-white border-t border-[#E5DFD3] text-[#133020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={onNavigateHome} className="inline-block text-left cursor-pointer">
              <img
                src="/assets/aistudio/TradeCare-Africa_Logo_43f9e153.png"
                alt="TradeCare Africa"
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </button>

            <p className="text-xs text-[#526B5C] leading-relaxed max-w-sm">
              TradeCare Africa is a women-led Kenyan agri-services company trading since 2014. Operating a comprehensive Service Ecosystem under a single supply-chain control tower to connect smallholder farmers with high-value formal markets.
            </p>

            <div className="pt-2 text-xs text-[#6A7E72] space-y-1">
              <div><strong>Founder:</strong> Founded 2014 by Joyce Wambui Gema</div>
              <div><strong>Recognition:</strong> Agricultural Consultancy Award Winner 2023</div>
            </div>
          </div>

          {/* Service Ecosystem Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#DD5C36] uppercase tracking-wider">
              Service Ecosystem
            </div>
            <ul className="space-y-2 text-xs">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <button
                    onClick={() => onNavigateDivision(divisionIdMap[div.id])}
                    className="hover:text-[#DD5C36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: div.brandColor }}
                    />
                    <span className="font-semibold">0{div.stepNumber} · {div.verb}</span>
                    <span className="text-[#718579]">({div.name.split(' ')[0]})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>


          {/* Quick Links & Case Studies (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-[#133020] uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#445D4E]">
              <li><a href="#synergy" className="hover:text-[#DD5C36] transition-colors">Ecosystem Synergy</a></li>
              <li><a href="#impact" className="hover:text-[#DD5C36] transition-colors">Impact</a></li>
              {onNavigateTeam ? (
                <li>
                  <button
                    onClick={onNavigateTeam}
                    className="hover:text-[#DD5C36] transition-colors text-left font-medium text-[#133020] cursor-pointer"
                  >
                    Leadership & Team
                  </button>
                </li>
              ) : (
                <li><a href="#team" className="hover:text-[#DD5C36] transition-colors">Leadership & Team</a></li>
              )}
              <li><a href="#founder" className="hover:text-[#DD5C36] transition-colors">Founder & Vision</a></li>
              <li>
                <button
                  onClick={() => onOpenInquiry('buyers')}
                  className="hover:text-[#DD5C36] transition-colors text-left font-semibold text-[#DD5C36] cursor-pointer"
                >
                  Partner Portal →
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & Standards (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#133020] uppercase tracking-wider">
              Operations & Standards
            </div>
            <div className="text-xs text-[#526B5C] space-y-2">
              <div>
                <strong className="text-[#133020] block">Headquarters:</strong>
                Nairobi, Kenya
              </div>
              <div>
                <strong className="text-[#133020] block">Active Hubs:</strong>
                Lari Horticulture Hub (Kiambu) & Embu Organic Clusters
              </div>
              <div>
                <strong className="text-[#133020] block">Standards in Scope:</strong>
                GLOBALG.A.P. · Organic · FSMS · ISO 22000 · EUDR Traceability · Mazao Safi
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 p-2 text-xs font-medium text-[#526B5C] hover:text-[#133020] bg-[#FAF7F2] rounded-lg border border-[#E5DFD3] flex items-center gap-1.5 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Quiet Legal Notices */}
        <div className="mt-12 pt-8 border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718579]">
          <p>
            © 2026 TradeCare Africa Limited. All rights reserved. Founded 2014 by Joyce Wambui Gema · Agricultural Consultancy Award Winner 2023.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>TCA-BUD-MSCT-001 V07/R00</span>
            <span aria-hidden="true">·</span>
            <span>Certification issued independently by TCert · Independent Standards Body</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
