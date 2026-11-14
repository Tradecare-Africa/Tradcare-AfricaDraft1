import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (initialTab?: string) => void;
  activePage: 'home' | 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market' | 'team';
  onNavigateHome: () => void;
  onNavigateDivision: (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => void;
  onNavigateTeam?: () => void;
}


export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenInquiry, 
  activePage,
  onNavigateHome,
  onNavigateDivision,
  onNavigateTeam,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdownOpen, setDivisionsDropdownOpen] = useState(false);

  const divisionsList: { 
    id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market'; 
    name: string; 
    color: string; 
    verb: string;
  }[] = [
    { id: 'academy', name: 'TradeCare Academy', verb: 'Train', color: '#012A4A' },
    { id: 'zaosafi', name: 'Zao Safi Extension (Hub)', verb: 'Produce', color: '#076333' },
    { id: 'farmdatapod', name: 'Farm Data pod', verb: 'Digitise', color: '#4C7338' },
    { id: 'tcert', name: 'TCert (Assure)', verb: 'Assure', color: '#407E8C' },
    { id: 'market', name: 'TradeCare Market', verb: 'Connect', color: '#DD5C36' },
  ];


  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single Brand Logo Element */}
          <button 
            onClick={onNavigateHome} 
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DD5C36] text-left cursor-pointer"
          >
            <img
              src="/assets/aistudio/TradeCare-Africa_Logo_43f9e153.png"
              alt="TradeCare Africa - Growing Fair and Ethical Practices"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Zone 2: Clean 4–5 single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#133020]">
            <button
              onClick={onNavigateHome}
              className={`hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer ${
                activePage === 'home' ? 'text-[#DD5C36] font-bold' : ''
              }`}
            >
              Overview
            </button>

            {/* Service Ecosystem Dropdown (Renamed from The 5 Divisions) */}
            <div 
              className="relative"
              onMouseEnter={() => setDivisionsDropdownOpen(true)}
              onMouseLeave={() => setDivisionsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer ${
                  activePage !== 'home' && activePage !== 'team' ? 'text-[#DD5C36] font-bold' : ''
                }`}
              >
                <span>Service Ecosystem</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${divisionsDropdownOpen ? 'rotate-180 text-[#DD5C36]' : ''}`} />
              </button>

              {/* Sub-menu dropdown with all 5 ecosystem pillars */}
              {divisionsDropdownOpen && (
                <div className="absolute left-0 top-full w-80 bg-white border border-[#E5DFD3] shadow-lg rounded-xl p-2 py-2 flex flex-col gap-1 transition-all z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#718579] border-b border-[#F0EBE1]">
                    Service Ecosystem Pillars
                  </div>
                  {divisionsList.map((div, i) => (
                    <button
                      key={div.id}
                      onClick={() => {
                        setDivisionsDropdownOpen(false);
                        onNavigateDivision(div.id);
                      }}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-between text-left cursor-pointer ${
                        activePage === div.id ? 'bg-[#F5F2EA] text-[#DD5C36]' : 'text-[#133020] hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: div.color }} />
                        <span>0{i + 1} · {div.verb} ({div.name.split(' ')[0]})</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ArrowRight className="w-3 h-3 opacity-60" />
                      </div>
                    </button>
                  ))}
                  <div className="pt-2 mt-1 border-t border-[#F0EBE1] px-3">
                    <span className="text-[11px] text-[#718579]">Integrated Service Ecosystem · One Control Tower</span>
                  </div>
                </div>
              )}
            </div>

            {activePage === 'home' ? (
              <>
                <a href="#synergy" className="hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0">
                  Ecosystem Synergy
                </a>
                <a href="#impact" className="hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0">
                  Impact
                </a>
                <a href="#team" className="hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0">
                  Team
                </a>
                <a href="#founder" className="hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0">
                  Founder
                </a>
              </>
            ) : (
              <>
                {onNavigateTeam ? (
                  <button
                    onClick={onNavigateTeam}
                    className={`hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0 py-2 text-xs cursor-pointer ${
                      activePage === 'team' ? 'text-[#DD5C36] font-bold' : ''
                    }`}
                  >
                    Team
                  </button>
                ) : null}
                <button
                  onClick={() => onNavigateDivision('academy')}
                  className={`hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0 text-xs ${activePage === 'academy' ? 'text-[#327039] font-bold' : ''}`}
                >
                  Train
                </button>
                <button
                  onClick={() => onNavigateDivision('zaosafi')}
                  className={`hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0 text-xs ${activePage === 'zaosafi' ? 'text-[#C27B08] font-bold' : ''}`}
                >
                  Produce
                </button>
                <button
                  onClick={() => onNavigateDivision('farmdatapod')}
                  className={`hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0 text-xs ${activePage === 'farmdatapod' ? 'text-[#133020] font-bold' : ''}`}
                >
                  Digitise
                </button>
                <button
                  onClick={() => onNavigateDivision('tcert')}
                  className={`hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0 text-xs ${activePage === 'tcert' ? 'text-[#22533B] font-bold' : ''}`}
                >
                  Assure
                </button>
                <button
                  onClick={() => onNavigateDivision('market')}
                  className={`hover:text-[#DD5C36] transition-colors whitespace-nowrap shrink-0 text-xs ${activePage === 'market' ? 'text-[#DD5C36] font-bold' : ''}`}
                >
                  Connect
                </button>
              </>
            )}
          </nav>


          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry()}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#DD5C36] hover:bg-[#EB7857] active:bg-[#F29677] rounded-lg transition-all shadow-sm hover:shadow flex items-center gap-2 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#DD5C36] cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenInquiry()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#DD5C36] rounded-md"
            >
              Partner
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#133020] hover:text-[#DD5C36] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E5DFD3] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-[#133020]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome();
              }}
              className="py-1.5 text-left text-[#DD5C36]"
            >
              Overview (Homepage)
            </button>

            {onNavigateTeam && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateTeam();
                }}
                className="py-1.5 text-left text-sm font-semibold text-[#133020] hover:text-[#DD5C36] flex items-center justify-between"
              >
                <span>Leadership & Team</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8A9C90]" />
              </button>
            )}

            <div className="text-[11px] font-bold text-[#718579] uppercase pt-2">
              Service Ecosystem Pillars:
            </div>
            {divisionsList.map((div, i) => (
              <button
                key={div.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateDivision(div.id);
                }}
                className="py-1.5 text-left text-xs font-semibold flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: div.color }} />
                  <span>0{i + 1} · {div.name} ({div.verb})</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#8A9C90]" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E5DFD3] flex flex-col gap-3">
            <div className="text-xs text-[#526B5C]">
              Founded 2014 by Joyce Wambui Gema · Agricultural Consultancy Award Winner 2023
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Initiate Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

