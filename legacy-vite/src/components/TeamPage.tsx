import React from 'react';
import { 
  ArrowLeft, ArrowRight, Award, ShieldCheck, CheckCircle2, 
  Users, BookOpen, Sprout, Database, ShoppingBag, 
  Sparkles, Mail, Check, ExternalLink 
} from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/tradecareData';

interface TeamPageProps {
  onNavigateHome: () => void;
  onNavigateDivision: (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => void;
  onOpenInquiry: (category?: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({
  onNavigateHome,
  onNavigateDivision,
  onOpenInquiry,
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
      case 'train': return <BookOpen className="w-5 h-5" />;
      case 'produce': return <Sprout className="w-5 h-5" />;
      case 'digitise': return <Database className="w-5 h-5" />;
      case 'assure': return <ShieldCheck className="w-5 h-5" />;
      case 'connect': return <ShoppingBag className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      
      {/* 1. Top Breadcrumb & Return Bar */}
      <div className="bg-white border-b border-[#E5DFD3] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 font-bold text-[#133020] hover:text-[#DD5C36] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Overview</span>
            </button>
            <span className="text-[#A7C4A2]" aria-hidden="true">/</span>
            <span className="text-[#718579]">Service Ecosystem</span>
            <span className="text-[#A7C4A2]" aria-hidden="true">/</span>
            <span className="font-bold text-[#133020]">Leadership & Division Heads</span>
          </div>

          <button
            onClick={() => onOpenInquiry('buyers')}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] rounded-lg transition-colors cursor-pointer shadow-2xs"
          >
            Contact Leadership
          </button>
        </div>
      </div>

      {/* 2. Hero Header */}
      <section className="bg-white border-b border-[#E5DFD3] py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDE8E2] rounded-full blur-3xl opacity-60 pointer-events-none -mr-20 -mt-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#DD5C36] uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Leadership · TradeCare Africa Service Ecosystem</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133020] tracking-tight leading-tight">
              One unified team across all five stages of African agriculture.
            </h1>
            <p className="text-base sm:text-lg text-[#445D4E] leading-relaxed">
              TradeCare Africa is a women-led Kenyan agricultural power founded in 2014 by Joyce Wambui Gema. Rather than disconnected consultants or fragmented apps, our 5 division heads manage an integrated, closed-loop control tower spanning education, field agronomy, farm data, independent certification, and commercial offtake.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Founder & Managing Director Full Profile */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E5DFD3] rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Headshot & Accolades */}
            <div className="lg:col-span-5 space-y-6 text-center sm:text-left">
              <div className="relative inline-block">
                <img
                  src={founder.image}
                  alt={founder.imageAlt}
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl object-cover object-top border-4 border-[#FAF7F2] shadow-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-3 -right-3 bg-[#DD5C36] text-white p-2.5 rounded-full border-4 border-white shadow-md">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-[#FDE8E2] text-[#DD5C36] border border-[#F29677]/40 mb-2">
                  Founder & Managing Director
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133020]">
                  {founder.name}
                </h2>
                <p className="text-xs text-[#526B5C] font-semibold mt-1">
                  Founded 2014 by Joyce Wambui Gema · Agricultural Consultancy Award Winner 2023
                </p>
              </div>

              {/* Award Badge Card */}
              <div className="p-4 bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl text-left space-y-1">
                <div className="text-xs font-bold text-[#C27B08] flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>National Recognition</span>
                </div>
                <div className="text-sm font-bold text-[#133020]">
                  Agricultural Consultancy Award Winner 2023
                </div>
                <p className="text-xs text-[#6A7E72] leading-snug">
                  Recognizing over 10 years of transformational value-chain design across East Africa.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {founder.credentials.map((cred, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#FAF7F2] border border-[#E5DFD3] text-[#133020]"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            {/* Founder Biography & Strategic Impact */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#E5DFD3] lg:pl-10">
              
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E5DFD3] text-sm text-[#133020] italic font-medium leading-relaxed">
                “{founder.quote}”
              </div>

              <div className="space-y-3 text-sm text-[#445D4E] leading-relaxed">
                <p>
                  Joyce Wambui Gema founded TradeCare Africa in 2014 having witnessed decades of well-intentioned donor programs fail because they addressed only isolated fragments of the farming equation.
                </p>
                <p>
                  Her pioneering insight was structural: smallholders must retain ownership of their land and harvests, while one integrated company operates the five stages needed to meet rigorous commercial standards. Under her stewardship, TradeCare Africa has proven its model through 10-year cohorts yielding +245% net smallholder income improvements.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-[#133020] uppercase tracking-wider">
                  Core Executive Mandates:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {founder.coreResponsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3] text-xs text-[#133020] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#327039] shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Heads of the 5 Divisions in the Service Ecosystem */}
      <section className="py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="border-b border-[#E5DFD3] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#DD5C36] uppercase tracking-wider mb-1">
              Service Ecosystem Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133020]">
              Heads of the 5 Integrated Divisions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6A7E72] max-w-md">
            Each head directs their domain with deep technical expertise, while participating in the closed-loop synergy control tower.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisionHeads.map((head, index) => {
            const targetPage = getDivisionId(head);
            return (
              <div
                key={head.id}
                className="bg-white border border-[#E5DFD3] rounded-3xl overflow-hidden hover:border-[#DD5C36] transition-all duration-300 hover:shadow-lg flex flex-col group"
              >
                {/* Division Brand Color Header */}
                <div
                  className="px-6 py-4 text-white flex items-center justify-between"
                  style={{ backgroundColor: head.brandColor }}
                >
                  <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase">
                    {getDivisionIcon(head.divisionId)}
                    <span>Pillar 0{index + 1} · {head.verb}</span>
                  </div>
                  <span className="text-xs font-medium opacity-90">
                    {head.divisionName}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  
                  {/* Photo & Role */}
                  <div className="flex items-start gap-4">
                    <img
                      src={head.image}
                      alt={head.imageAlt}
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border border-[#E5DFD3] shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-[#133020] truncate">
                        {head.name}
                      </h3>
                      <p className="text-xs font-semibold" style={{ color: head.brandColor }}>
                        {head.role}
                      </p>
                      <p className="text-xs text-[#718579] mt-0.5">
                        {head.divisionName}
                      </p>
                    </div>
                  </div>

                  {/* Biography */}
                  <p className="text-xs sm:text-sm text-[#445D4E] leading-relaxed">
                    {head.bio}
                  </p>

                  {/* Philosophy Quote */}
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3] text-xs italic text-[#133020] leading-snug">
                    “{head.quote}”
                  </div>

                  {/* Credentials */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold text-[#718579] uppercase">
                      Qualifications & Accreditations:
                    </div>
                    <ul className="space-y-1 text-xs text-[#3A4F41]">
                      {head.credentials.map((cred, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#327039] shrink-0" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Responsibilities */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E5DFD3]">
                    <div className="text-[11px] font-bold text-[#718579] uppercase">
                      Division Responsibilities:
                    </div>
                    <ul className="space-y-1 text-xs text-[#526B5C]">
                      {head.coreResponsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: head.brandColor }} />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Division Action Button & Metric */}
                  <div className="pt-4 border-t border-[#E5DFD3] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-extrabold text-[#133020]">
                        {head.keyMetric.value}
                      </div>
                      <div className="text-[10px] text-[#718579] truncate max-w-[150px]">
                        {head.keyMetric.label}
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigateDivision(targetPage)}
                      className="px-4 py-2 text-xs font-bold rounded-xl text-white transition-all hover:opacity-90 flex items-center gap-1.5 cursor-pointer shadow-xs"
                      style={{ backgroundColor: head.brandColor }}
                    >
                      <span>Explore {head.verb}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 5. Closed-Loop Synergy Protocol Callout */}
        <div className="mt-12 bg-white border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold text-[#DD5C36] uppercase tracking-wider">
              Service Ecosystem Coordination
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#133020]">
              How our division heads eliminate value chain leakage.
            </h3>
            <p className="text-xs sm:text-sm text-[#445D4E] leading-relaxed">
              In conventional agriculture, training, production, technology, audits, and sales work as isolated silos with no mutual accountability. At TradeCare Africa, all 5 division heads meet weekly under the Ecosystem Control Tower, ensuring farmer compliance translates directly into verified crop volumes, accredited certificates, and premium retail sales.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('buyers')}
            className="px-6 py-3.5 text-xs font-bold text-white bg-[#DD5C36] hover:bg-[#EB7857] rounded-xl transition-all shadow-sm hover:shadow shrink-0 whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Engage With Our Leadership Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

    </div>
  );
};
