import React from 'react';
import { Award, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Users, BookOpen, Sprout, Database, ShoppingBag } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/tradecareData';
import { PageView } from '../App';

interface TeamSectionProps {
  onNavigateDivision: (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => void;
  onOpenInquiry: (category?: string) => void;
  onNavigateTeam?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  onNavigateDivision,
  onOpenInquiry,
  onNavigateTeam,
}) => {
  const founder = TEAM_MEMBERS.find((m) => m.isFounder) || TEAM_MEMBERS[0];
  const divisionHeads = TEAM_MEMBERS.filter((m) => !m.isFounder);

  const getDivisionId = (head: TeamMember): 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market' => {
    switch (head.divisionId) {
      case 'train': return 'academy';
      case 'produce': return 'zaosafi';
      case 'digitise': return 'farmdatapod';
      case 'assure': return 'tcert';
      case 'connect': return 'market';
      default: return 'academy';
    }
  };

  const getDivisionIcon = (id?: string) => {
    switch (id) {
      case 'train': return <BookOpen className="w-4 h-4" />;
      case 'produce': return <Sprout className="w-4 h-4" />;
      case 'digitise': return <Database className="w-4 h-4" />;
      case 'assure': return <ShieldCheck className="w-4 h-4" />;
      case 'connect': return <ShoppingBag className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  return (
    <section id="team" className="py-16 sm:py-24 bg-white border-b border-[#E5DFD3] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FDE8E2]/50 rounded-full blur-3xl pointer-events-none -mt-20" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#E7F2EC]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
          <div>
            <div className="text-xs font-bold text-[#DD5C36] tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>Leadership & Division Heads · Service Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133020] tracking-tight leading-tight text-balance">
              The specialists heading the 5 pillars of our Service Ecosystem.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#445D4E] leading-relaxed">
              Under the strategic guidance of founder Joyce Wambui Gema, each division operates under proven technical leadership—ensuring seamless synergy across training, production, digitization, certification, and commercial offtake.
            </p>
          </div>

          {onNavigateTeam && (
            <button
              onClick={onNavigateTeam}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#133020] hover:text-[#DD5C36] bg-[#FAF7F2] hover:bg-[#F5F2EA] border border-[#DDD6C8] rounded-lg transition-colors shrink-0 cursor-pointer self-start md:self-end"
            >
              <span>View Full Leadership Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 1. Founder & Managing Director Spotlight Banner */}
        <div className="mt-12 bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Founder Photo & Credentials */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start text-center sm:text-left gap-5">
              <div className="relative shrink-0">
                <img
                  src={founder.image}
                  alt={founder.imageAlt}
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl object-cover object-top border-4 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#DD5C36] text-white p-1.5 rounded-full border-2 border-white shadow-xs">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#FDE8E2] text-[#DD5C36] border border-[#F29677]/40 mb-1.5">
                  Ecosystem Founder & MD
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#133020]">
                  {founder.name}
                </h3>
                <p className="text-xs text-[#526B5C] font-semibold mt-0.5">
                  Founded 2014 by Joyce Wambui Gema · Agricultural Consultancy Award Winner 2023
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                  {founder.credentials.map((cred, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-white border border-[#E5DFD3] text-[#445D4E]"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Vision & Cross-Subsidy Leadership */}
            <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-[#E5DFD3] lg:pl-8">
              <div className="p-4 bg-white rounded-xl border border-[#E5DFD3] text-sm text-[#133020] italic font-medium leading-relaxed">
                “{founder.quote}”
              </div>

              <p className="text-xs sm:text-sm text-[#445D4E] leading-relaxed">
                {founder.bio} Her breakthrough was assembling the whole chain—empowering smallholders to retain crop equity while coordinating high-rigour training, resident agronomy, tamper-proof traceability, independent accredited certification, and formal retail contracts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {founder.coreResponsibilities.map((resp, i) => (
                  <div key={i} className="p-3 bg-white/70 rounded-lg border border-[#E5DFD3] text-xs text-[#3A4F41] flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#327039] shrink-0 mt-0.5" />
                    <span className="leading-snug">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 2. Heads of the 5 Divisions (Service Ecosystem Grid) */}
        <div className="mt-10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#718579] uppercase tracking-wider">
              Heads of the 5 Service Ecosystem Divisions
            </h3>
            <span className="text-xs text-[#DD5C36] font-semibold">
              Closed-Loop Operational Leaders
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisionHeads.map((head, index) => {
              const targetPage = getDivisionId(head);
              return (
                <div
                  key={head.id}
                  className="bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl overflow-hidden hover:border-[#DD5C36]/70 transition-all duration-200 hover:shadow-md flex flex-col group"
                >
                  {/* Division Header Strip */}
                  <div
                    className="px-5 py-3 text-white flex items-center justify-between"
                    style={{ backgroundColor: head.brandColor }}
                  >
                    <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                      {getDivisionIcon(head.divisionId)}
                      <span>0{index + 1} · {head.verb}</span>
                    </div>
                    <span className="text-[11px] font-semibold opacity-90">
                      {head.divisionName.split(' ')[0]}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    
                    {/* Headshot & Identity */}
                    <div className="flex items-start gap-3.5">
                      <img
                        src={head.image}
                        alt={head.imageAlt}
                        className="w-14 h-14 rounded-xl object-cover border border-[#E5DFD3] shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-[#133020] truncate">
                          {head.name}
                        </h4>
                        <p className="text-xs font-semibold" style={{ color: head.brandColor }}>
                          {head.role}
                        </p>
                        <p className="text-[11px] text-[#718579] truncate mt-0.5">
                          {head.divisionName}
                        </p>
                      </div>
                    </div>

                    {/* Bio & Quote */}
                    <p className="text-xs text-[#445D4E] leading-relaxed line-clamp-3">
                      {head.bio}
                    </p>

                    <div className="p-2.5 rounded-lg bg-white border border-[#E5DFD3] text-[11px] italic text-[#133020] leading-snug">
                      “{head.quote}”
                    </div>

                    {/* Credentials Pills */}
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-[#718579] uppercase">
                        Expertise & Credentials:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {head.credentials.slice(0, 2).map((c, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] font-medium bg-white border border-[#E5DFD3] text-[#526B5C]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Core Metric & Division Navigation Action */}
                    <div className="pt-3 border-t border-[#E5DFD3] flex items-center justify-between">
                      <div>
                        <div className="text-xs font-extrabold text-[#133020]">
                          {head.keyMetric.value}
                        </div>
                        <div className="text-[10px] text-[#718579] truncate max-w-[150px]">
                          {head.keyMetric.label}
                        </div>
                      </div>

                      <button
                        onClick={() => onNavigateDivision(targetPage)}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer text-white hover:opacity-90 shadow-2xs"
                        style={{ backgroundColor: head.brandColor }}
                      >
                        <span>{head.verb} Pillar</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Synergy Link Strip */}
        <div className="mt-10 p-5 bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#526B5C] text-center sm:text-left">
            <strong className="text-[#133020] block sm:inline mr-2">Ecosystem Synergy:</strong>
            These 5 division heads coordinate weekly under the central control tower to eliminate handoff friction between training, field farming, digital data, audits, and supermarket delivery.
          </div>
          <button
            onClick={() => onOpenInquiry('produce')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            Connect With Division Leadership
          </button>
        </div>

      </div>
    </section>
  );
};
