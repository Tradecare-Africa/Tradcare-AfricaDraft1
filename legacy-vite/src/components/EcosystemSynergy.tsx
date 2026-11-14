import React, { useState } from 'react';
import { ArrowRight, RefreshCw, AlertTriangle, Check, Layers, Cpu, ArrowUpRight, Shield, Zap, Sparkles } from 'lucide-react';
import { DIVISIONS, Division } from '../data/tradecareData';

interface EcosystemSynergyProps {
  onSelectDivision: (id: string) => void;
  onOpenInquiry: () => void;
  onNavigateDivision: (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => void;
}

export const EcosystemSynergy: React.FC<EcosystemSynergyProps> = ({ 
  onSelectDivision, 
  onOpenInquiry,
  onNavigateDivision,
}) => {
  const [activeStageId, setActiveStageId] = useState<string>('train');
  const [synergyMode, setSynergyMode] = useState<'loop' | 'simulation' | 'failure-test'>('loop');
  const [missingStage, setMissingStage] = useState<string | null>(null);

  const divisionIdMap: Record<string, 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market'> = {
    train: 'academy',
    produce: 'zaosafi',
    digitise: 'farmdatapod',
    assure: 'tcert',
    connect: 'market',
  };


  const activeDivision = DIVISIONS.find((d) => d.id === activeStageId) || DIVISIONS[0];

  // Failure simulation consequences when a stage is missing
  const failureScenarios: Record<string, { title: string; consequence: string; competitorType: string }> = {
    train: {
      title: 'Without TRAIN (TradeCare Academy)',
      consequence: 'Farmers spray without audit understanding. High chemical residue leads to 100% container rejection at the port or supermarket gate.',
      competitorType: 'Typical Middleman / Broker model',
    },
    produce: {
      title: 'Without PRODUCE (Zao Safi Hub)',
      consequence: 'Advice stays theoretical. Without resident 1:50 agronomists, smallholders stagnate at 0.5 tons surplus vs. 8 tons potential, leaving fixed costs stranded.',
      competitorType: 'Standard Agritech App model (advice via SMS only)',
    },
    digitise: {
      title: 'Without DIGITISE (FarmDataPod)',
      consequence: 'Farms fail EUDR geolocation and EU residue audits. Paper ledgers are rejected by European inspectors. Produce cannot be exported legally.',
      competitorType: 'Traditional Cooperative without digital systems',
    },
    assure: {
      title: 'Without ASSURE (TCert)',
      consequence: 'Even pristine organic crops sell as "unverified" in open street markets at rock-bottom prices. Supermarkets and exporters refuse to purchase.',
      competitorType: 'NGO donor projects without accredited certification',
    },
    connect: {
      title: 'Without CONNECT (TradeCare Market)',
      consequence: 'The "Certified, Unsold" tragedy. Farmers achieve global certifications but have no cold-chain transport, no contract, and no buyer, rotting in storage.',
      competitorType: 'Standalone Certification Bodies (SGS, Bureau Veritas)',
    },
  };

  return (
    <section id="synergy" className="py-16 sm:py-24 bg-white border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-[#DD5C36] tracking-wider uppercase mb-2">
            Supply Chain Control Tower · Service Ecosystem Synergy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133020] tracking-tight leading-tight text-balance">
            The closed-loop agricultural engine.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#445D4E] leading-relaxed">
            In traditional agriculture, training, farming, software, certification, and brokerage are splintered among disconnected actors. TradeCare Africa links all 5 pillars of the Service Ecosystem into a unified, reinforcing feedback loop.
          </p>
        </div>

        {/* Interactive Mode Selector (segmented control compliant) */}
        <div className="mt-8 flex items-center gap-1.5 p-1.5 bg-[#F5F2EA] rounded-xl max-w-md border border-[#E5DFD3]">
          <button
            onClick={() => {
              setSynergyMode('loop');
              setMissingStage(null);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              synergyMode === 'loop'
                ? 'bg-white text-[#133020] shadow-sm'
                : 'text-[#5A7062] hover:text-[#133020]'
            }`}
          >
            Continuous Synergy Loop
          </button>
          <button
            onClick={() => {
              setSynergyMode('simulation');
              setMissingStage(null);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              synergyMode === 'simulation'
                ? 'bg-white text-[#133020] shadow-sm'
                : 'text-[#5A7062] hover:text-[#133020]'
            }`}
          >
            Trace a Harvest
          </button>
          <button
            onClick={() => {
              setSynergyMode('failure-test');
              setMissingStage('connect');
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              synergyMode === 'failure-test'
                ? 'bg-white text-[#DD5C36] shadow-sm'
                : 'text-[#5A7062] hover:text-[#DD5C36]'
            }`}
          >
            Simulate Broken Link
          </button>
        </div>

        {/* MODE 1: CONTINUOUS SYNERGY LOOP */}
        {synergyMode === 'loop' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive 5-Stage Stepper */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-semibold text-[#718579] uppercase tracking-wider mb-2">
                Click a stage to inspect its data exchange:
              </div>

              {DIVISIONS.map((div) => {
                const isSelected = div.id === activeStageId;
                return (
                  <button
                    key={div.id}
                    onClick={() => setActiveStageId(div.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all border ${
                      isSelected
                        ? 'bg-white border-[#DD5C36] shadow-md ring-1 ring-[#DD5C36]/30'
                        : 'bg-[#FAF7F2] border-[#E5DFD3] hover:border-[#C4BDB0] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                          style={{ backgroundColor: div.brandColor }}
                        >
                          0{div.stepNumber}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-[#133020]">
                            {div.verb} · {div.name}
                          </div>
                          <div className="text-[11px] text-[#556D5F] truncate max-w-[220px]">
                            {div.tagline}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#DD5C36] translate-x-1' : 'text-[#A7C4A2]'}`} />
                    </div>
                  </button>
                );
              })}

              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E5DFD3] text-xs text-[#526B5C] flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#DD5C36] shrink-0 animate-spin-slow" />
                <span>Stage 5 feeds back market pricing into Stage 1 & 2 to update training automatically.</span>
              </div>
            </div>

            {/* Right Column: Synergy Inspector Card */}
            <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 space-y-6">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5DFD3] pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#718579]">
                    <span>Stage 0{activeDivision.stepNumber} of 05</span>
                    <span>·</span>
                    <span style={{ color: activeDivision.brandColor }}>{activeDivision.verb}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#133020] mt-1">
                    {activeDivision.name}
                  </h3>
                  <p className="text-sm text-[#445D4E] mt-0.5">
                    {activeDivision.tagline}
                  </p>
                </div>

                <button
                  onClick={() => onNavigateDivision(divisionIdMap[activeDivision.id])}
                  className="px-4 py-2 text-xs font-bold text-white rounded-lg transition-colors shadow-xs flex items-center gap-1.5"
                  style={{ backgroundColor: activeDivision.brandColor }}
                >
                  <span>Dedicated {activeDivision.name.split(' ')[0]} Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

              {/* Inbound & Outbound Synergy Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Inbound */}
                <div className="p-4 bg-white border border-[#E5DFD3] rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#133020] mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#327039]" />
                    <span>Inbound Handshake (What it Receives)</span>
                  </div>
                  <p className="text-xs text-[#445D4E] leading-relaxed">
                    {activeDivision.synergyInput}
                  </p>
                </div>

                {/* Outbound */}
                <div className="p-4 bg-white border border-[#E5DFD3] rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#DD5C36] mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#DD5C36]" />
                    <span>Outbound Fuel (What it Passes Forward)</span>
                  </div>
                  <p className="text-xs text-[#445D4E] leading-relaxed">
                    {activeDivision.synergyOutput}
                  </p>
                </div>

              </div>

              {/* Why Traditional Single-Service Competitors Fail Here */}
              <div className="p-4 sm:p-5 bg-white border border-[#E5DFD3] rounded-xl space-y-3">
                <div className="text-xs font-bold text-[#133020] flex items-center justify-between">
                  <span>The Single-Stage Vulnerability</span>
                  <span className="text-[11px] font-mono text-[#DD5C36]">Why competitors break</span>
                </div>
                <p className="text-xs sm:text-sm text-[#445D4E] leading-relaxed">
                  {activeDivision.problem.detail}
                </p>
                <div className="text-xs font-medium text-[#7A8E81] pt-2 border-t border-[#F0EBE1] flex items-center gap-2">
                  <span className="font-semibold text-[#133020]">TradeCare Solution:</span>
                  <span>{activeDivision.solution.subheadline}</span>
                </div>
              </div>

              {/* Partners and Key Metric */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="text-xs text-[#556D5F]">
                  <span className="font-semibold text-[#133020]">Integrated Partners: </span>
                  <span>{activeDivision.partners.join(' · ')}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-[#133020] font-mono tabular-nums">
                    {activeDivision.solution.keyMetric.value}
                  </span>
                  <span className="text-xs text-[#718579] ml-1.5">
                    ({activeDivision.solution.keyMetric.label})
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* MODE 2: INTERACTIVE HARVEST SIMULATION */}
        {synergyMode === 'simulation' && (
          <div className="mt-10 bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#327039] uppercase tracking-wide">
                Live Journey Walkthrough
              </span>
              <h3 className="text-2xl font-bold text-[#133020] mt-1">
                How a 2.5-Acre French Bean Harvest Moves from Kiambu to Carrefour
              </h3>
              <p className="text-sm text-[#445D4E] mt-1 max-w-3xl">
                Watch how all five divisions collaborate in lockstep from pre-planting soil tests to final supermarket shelf payout.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              
              <div className="p-4 bg-white border border-[#E5DFD3] rounded-xl space-y-2">
                <div className="text-[11px] font-bold text-[#327039] uppercase">Month -1 · TRAIN</div>
                <h4 className="text-sm font-bold text-[#133020]">TradeCare Academy</h4>
                <p className="text-xs text-[#556D5F]">
                  Farmer Mary attends interactive hub module on GlobalG.A.P. compliant biological sprays with resident graduate agronomist.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#327039] border-t border-[#F0EBE1]">
                  ✓ Standards Mastered
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E5DFD3] rounded-xl space-y-2">
                <div className="text-[11px] font-bold text-[#C27B08] uppercase">Month 1–2 · PRODUCE</div>
                <h4 className="text-sm font-bold text-[#133020]">Zao Safi Hub</h4>
                <p className="text-xs text-[#556D5F]">
                  Resident agronomist visits weekly (1:50 ratio). Executes RASTA cycle. Harvest yields jump from 0.8t to 2.4t export grade.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#C27B08] border-t border-[#F0EBE1]">
                  ✓ 3× Yield Surge
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E5DFD3] rounded-xl space-y-2">
                <div className="text-[11px] font-bold text-[#133020] uppercase">Day 45 · DIGITISE</div>
                <h4 className="text-sm font-bold text-[#133020]">FarmDataPod</h4>
                <p className="text-xs text-[#556D5F]">
                  Plot GPS polygon & spray logs logged live at source. Automated EUDR compliance package verified before harvest begins.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#133020] border-t border-[#F0EBE1]">
                  ✓ EUDR Ready
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E5DFD3] rounded-xl space-y-2">
                <div className="text-[11px] font-bold text-[#407E8C] uppercase flex items-center justify-between">
                  <span>Day 55 · ASSURE</span>
                  <span className="text-[9px] font-mono font-bold text-[#083A4F] bg-[#E8F2F3] px-1.5 py-0.5 rounded">
                    Independent Audit
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#133020]">TCert (Assure)</h4>
                <p className="text-xs text-[#556D5F]">
                  Independent accredited auditor validates the FarmDataPod trail without asking Mary for paper receipts. TCert issued.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#407E8C] border-t border-[#F0EBE1]">
                  ✓ TCert Issued (Accredited Assurance)
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E5DFD3] rounded-xl space-y-2">
                <div className="text-[11px] font-bold text-[#DD5C36] uppercase">Day 60 · CONNECT</div>
                <h4 className="text-sm font-bold text-[#133020]">TradeCare Market</h4>
                <p className="text-xs text-[#556D5F]">
                  Refrigerated haulier collects produce for Carrefour. Mary receives payment at +35% premium directly on mobile.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#DD5C36] border-t border-[#F0EBE1]">
                  ✓ Premium Offtake
                </div>
              </div>

            </div>

            <div className="p-4 bg-white border border-[#E5DFD3] rounded-xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#133020]">Total Result for Smallholder Mary:</span>
                <span className="text-xs text-[#556D5F] ml-2">
                  Retained 100% crop title · Net income jumped from KES 42,000 to KES 118,000 · Full compliance proof for next season.
                </span>
              </div>
              <button
                onClick={onOpenInquiry}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Inquire For Your Cooperative →
              </button>
            </div>
          </div>
        )}

        {/* MODE 3: SIMULATE BROKEN LINK (DIAGNOSTIC TEST) */}
        {synergyMode === 'failure-test' && (
          <div className="mt-10 bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#DD5C36] uppercase tracking-wide">
                Why Fragmented Solutions Fail Smallholders
              </span>
              <h3 className="text-2xl font-bold text-[#133020] mt-1">
                Remove any single stage to see why the entire supply chain collapses:
              </h3>
              <p className="text-sm text-[#445D4E] mt-1">
                Select a stage below to simulate the exact commercial breakdown experienced under single-service competitors.
              </p>
            </div>

            {/* Stage Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {DIVISIONS.map((div) => {
                const isSevered = missingStage === div.id;
                return (
                  <button
                    key={div.id}
                    onClick={() => setMissingStage(div.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSevered
                        ? 'bg-[#FDE8E2] border-[#DD5C36] shadow-sm'
                        : 'bg-white border-[#E5DFD3] hover:border-[#DD5C36]'
                    }`}
                  >
                    <div className="text-[11px] font-bold text-[#718579]">
                      Stage 0{div.stepNumber}
                    </div>
                    <div className="text-xs font-bold text-[#133020] truncate">
                      {div.verb}
                    </div>
                    <div className="text-[10px] text-[#DD5C36] font-semibold mt-1">
                      {isSevered ? '⚠ Severed Link' : 'Click to Sever'}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Result Card */}
            {missingStage && failureScenarios[missingStage] && (
              <div className="p-5 sm:p-6 bg-white border border-[#DD5C36] rounded-xl shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#DD5C36]">
                  <AlertTriangle className="w-5 h-5" />
                  <span>{failureScenarios[missingStage].title}</span>
                </div>

                <div className="text-sm text-[#133020] font-medium leading-relaxed">
                  {failureScenarios[missingStage].consequence}
                </div>

                <div className="pt-3 border-t border-[#F0EBE1] flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="text-[#6A7E72]">
                    <span className="font-semibold text-[#133020]">Who operates this way: </span>
                    <span>{failureScenarios[missingStage].competitorType}</span>
                  </div>
                  <div className="text-[#327039] font-bold">
                    ✓ TradeCare Africa keeps this link intact inside the control tower.
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
