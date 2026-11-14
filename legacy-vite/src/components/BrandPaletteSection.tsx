import React, { useState } from 'react';
import { Palette, Sparkles, Check, Copy, ArrowRight, Layers } from 'lucide-react';

interface BrandPaletteSectionProps {
  onNavigateDivision?: (id: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market') => void;
}

interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
  meaning: string;
  textColor: string;
  border?: boolean;
}

interface PaletteData {
  id: string;
  divisionId: 'academy' | 'zaosafi' | 'farmdatapod' | 'tcert' | 'market';
  name: string;
  verb: string;
  headline: string;
  description: string;
  primaryHex: string;
  coreColors: ColorSwatch[];
  tints: { label: string; hex: string; textColor: string }[];
  shades: { label: string; hex: string; textColor: string }[];
  uiAccents: { label: string; hex: string; desc: string }[];
}

const PALETTES: Record<string, PaletteData> = {
  connect: {
    id: 'connect',
    divisionId: 'market',
    name: 'TradeCare Africa · Connect',
    verb: 'Master & Connect',
    headline: 'A warm, energetic and grounded palette.',
    description: 'Reflecting connection, people and progress across Africa. Sourced directly from TradeCare Africa’s design system specification.',
    primaryHex: '#DD5C36',
    coreColors: [
      {
        name: 'Cherry Grove',
        hex: '#DD5C36',
        role: 'Primary',
        meaning: 'Energy, Connection, Momentum',
        textColor: 'text-white',
      },
      {
        name: 'Forest Fern',
        hex: '#327039',
        role: 'Secondary',
        meaning: 'Growth, People, Sustainability',
        textColor: 'text-white',
      },
      {
        name: 'Wheat Field Sunrise',
        hex: '#F0BE49',
        role: 'Secondary',
        meaning: 'Opportunity, Prosperity, Optimism',
        textColor: 'text-[#133020]',
      },
      {
        name: 'Tilled Earth',
        hex: '#133020',
        role: 'Secondary',
        meaning: 'Stability, Strength, Trust',
        textColor: 'text-white',
      },
      {
        name: 'Alabaster Hay',
        hex: '#F8EDD9',
        role: 'Neutral',
        meaning: 'Balance, Clarity, Space',
        textColor: 'text-[#133020]',
        border: true,
      },
    ],
    tints: [
      { label: '10%', hex: '#FDE8E2', textColor: 'text-[#133020]' },
      { label: '20%', hex: '#FBD1C4', textColor: 'text-[#133020]' },
      { label: '30%', hex: '#F7B39D', textColor: 'text-[#133020]' },
      { label: '40%', hex: '#F29677', textColor: 'text-white' },
      { label: '60%', hex: '#EB7857', textColor: 'text-white' },
    ],
    shades: [
      { label: '80%', hex: '#C94A27', textColor: 'text-white' },
      { label: '90%', hex: '#B33E20', textColor: 'text-white' },
      { label: '100%', hex: '#983519', textColor: 'text-white' },
      { label: '120%', hex: '#7A2A13', textColor: 'text-white' },
      { label: '140%', hex: '#5E1F0E', textColor: 'text-white' },
    ],
    uiAccents: [
      { label: 'Primary', hex: '#DD5C36', desc: 'Main Action Buttons' },
      { label: 'Hover', hex: '#EB7857', desc: 'Interactive Hover State' },
      { label: 'Active', hex: '#F29677', desc: 'Selected Tabs & Chips' },
      { label: 'Highlight', hex: '#FDE8E2', desc: 'Badge Backgrounds' },
      { label: 'Success', hex: '#327039', desc: 'Confirmed Milestones' },
      { label: 'Warning', hex: '#F0BE49', desc: 'Notice & Alerts' },
      { label: 'Text / Heading', hex: '#133020', desc: 'Headings & Body Copy' },
      { label: 'Surface', hex: '#F5F2EA', desc: 'Card Background' },
    ],
  },

  train: {
    id: 'train',
    divisionId: 'academy',
    name: 'TradeCare Academy · Train',
    verb: 'Train',
    headline: 'A modern, trustworthy and inspiring palette.',
    description: 'Supporting learning, skills development and academic agronomy across TradeCare Africa.',
    primaryHex: '#012A4A',
    coreColors: [
      {
        name: 'Deep Azure',
        hex: '#012A4A',
        role: 'Primary',
        meaning: 'Trust, Knowledge, Leadership',
        textColor: 'text-white',
      },
      {
        name: 'Rich Azure',
        hex: '#015B83',
        role: 'Secondary',
        meaning: 'Learning, Innovation, Progress',
        textColor: 'text-white',
      },
      {
        name: 'Rich Teal',
        hex: '#2A9D8F',
        role: 'Secondary',
        meaning: 'Growth, Possibility, Skills Development',
        textColor: 'text-white',
      },
      {
        name: 'Pale Sunset',
        hex: '#F4A261',
        role: 'Secondary',
        meaning: 'Energy, Engagement, Inspiration',
        textColor: 'text-[#133020]',
      },
      {
        name: 'Pale Sunset Cream',
        hex: '#F6E1B5',
        role: 'Neutral',
        meaning: 'Clarity, Balance, Open Opportunity',
        textColor: 'text-[#133020]',
        border: true,
      },
    ],
    tints: [
      { label: '10%', hex: '#E3EEF7', textColor: 'text-[#012A4A]' },
      { label: '20%', hex: '#C9DFEF', textColor: 'text-[#012A4A]' },
      { label: '30%', hex: '#AFCFE8', textColor: 'text-[#012A4A]' },
      { label: '40%', hex: '#95C0E0', textColor: 'text-[#012A4A]' },
      { label: '60%', hex: '#79B1D9', textColor: 'text-white' },
    ],
    shades: [
      { label: '80%', hex: '#011F36', textColor: 'text-white' },
      { label: '90%', hex: '#013A5E', textColor: 'text-white' },
      { label: '100%', hex: '#014D72', textColor: 'text-white' },
      { label: '120%', hex: '#01506E', textColor: 'text-white' },
      { label: '140%', hex: '#013B50', textColor: 'text-white' },
    ],
    uiAccents: [
      { label: 'Primary', hex: '#012A4A', desc: 'Curriculum Headers' },
      { label: 'Hover', hex: '#015B83', desc: 'Module Links' },
      { label: 'Active', hex: '#2A9D8F', desc: 'Enrolled Status' },
      { label: 'Highlight', hex: '#E3EEF7', desc: 'Certificate Badges' },
      { label: 'Success', hex: '#F4A261', desc: 'Course Completion' },
      { label: 'Text', hex: '#2E3A46', desc: 'Editorial Typography' },
      { label: 'Border', hex: '#D9E2EC', desc: 'Card Frame Lines' },
      { label: 'Surface', hex: '#F7FAFC', desc: 'Learning Portal Canvas' },
    ],
  },

  produce: {
    id: 'produce',
    divisionId: 'zaosafi',
    name: 'Zao Safi Hub · Produce',
    verb: 'Produce',
    headline: 'A vibrant, optimistic and fresh palette.',
    description: 'Reflecting quality produce, field nourishment and commercial opportunity across TradeCare Africa.',
    primaryHex: '#076333',
    coreColors: [
      {
        name: 'Golden Yellow',
        hex: '#FFDD00',
        role: 'Primary Identity',
        meaning: 'Energy, Optimism, Opportunity',
        textColor: 'text-[#1B2E1F]',
      },
      {
        name: 'La Salle Green',
        hex: '#076333',
        role: 'Primary UI / Contrast',
        meaning: 'Growth, Agriculture, Sustainability',
        textColor: 'text-white',
      },
      {
        name: 'Light Yellow',
        hex: '#FFFCE1',
        role: 'Secondary',
        meaning: 'Clarity, Freshness, Open Opportunity',
        textColor: 'text-[#1B2E1F]',
        border: true,
      },
      {
        name: 'Jasper',
        hex: '#D84040',
        role: 'Secondary',
        meaning: 'Vitality, Action, Impact',
        textColor: 'text-white',
      },
      {
        name: 'Wheat Beige',
        hex: '#F7E7B7',
        role: 'Neutral',
        meaning: 'Warmth, Balance, Natural',
        textColor: 'text-[#1B2E1F]',
        border: true,
      },
    ],
    tints: [
      { label: '10%', hex: '#FFF9B3', textColor: 'text-[#1B2E1F]' },
      { label: '20%', hex: '#FFF58C', textColor: 'text-[#1B2E1F]' },
      { label: '30%', hex: '#FFF14D', textColor: 'text-[#1B2E1F]' },
      { label: '40%', hex: '#FFEC1A', textColor: 'text-[#1B2E1F]' },
      { label: '60%', hex: '#FFE400', textColor: 'text-[#1B2E1F]' },
    ],
    shades: [
      { label: '80%', hex: '#E6C200', textColor: 'text-[#1B2E1F]' },
      { label: '90%', hex: '#CCA800', textColor: 'text-white' },
      { label: '100%', hex: '#B08F00', textColor: 'text-white' },
      { label: '120%', hex: '#947600', textColor: 'text-white' },
      { label: '140%', hex: '#7A5E00', textColor: 'text-white' },
    ],
    uiAccents: [
      { label: 'Primary Brand', hex: '#FFDD00', desc: 'Solar Vitality Yellow' },
      { label: 'Primary UI', hex: '#076333', desc: 'Accessible Dark Green' },
      { label: 'Active', hex: '#FFEC1A', desc: 'Harvest Batch Tag' },
      { label: 'Highlight', hex: '#FFF58C', desc: 'Cluster Selector' },
      { label: 'Action / Error', hex: '#D84040', desc: 'Alert / Urgent Action' },
      { label: 'Text / Heading', hex: '#1B2E1F', desc: 'Deep Organic Forest' },
      { label: 'Border', hex: '#E8E0B8', desc: 'Container Dividers' },
      { label: 'Surface', hex: '#FFFCF2', desc: 'Field Log Background' },
    ],
  },

  digitise: {
    id: 'digitise',
    divisionId: 'farmdatapod',
    name: 'Farm Data pod · Digitise',
    verb: 'Digitise',
    headline: 'A precise, technical and forward-looking telemetry palette.',
    description: 'Grounding polygon geolocation, spray ledgers, and EUDR compliance in rugged field-tested tones.',
    primaryHex: '#4C7338',
    coreColors: [
      {
        name: 'Turf Green',
        hex: '#4C7338',
        role: 'Primary',
        meaning: 'Field Geometry, Agronomic Health, Nature',
        textColor: 'text-white',
      },
      {
        name: 'Storm Turquoise',
        hex: '#1E6E6B',
        role: 'Secondary',
        meaning: 'Digital Data Architecture, Rigour, Protocol',
        textColor: 'text-white',
      },
      {
        name: 'Puffin Orange',
        hex: '#E65217',
        role: 'Accent / Alert',
        meaning: 'Real-time Telemetry, Sensor Ping, Action',
        textColor: 'text-white',
      },
      {
        name: 'Cliff Grey',
        hex: '#3D3F42',
        role: 'Secondary',
        meaning: 'Precision, Secure Hardware, Longevity',
        textColor: 'text-white',
      },
      {
        name: 'Soft Ash',
        hex: '#F3F4F1',
        role: 'Neutral Canvas',
        meaning: 'Clean Screen Readability, Clarity',
        textColor: 'text-[#2E3233]',
        border: true,
      },
    ],
    tints: [
      { label: '10%', hex: '#E9EFE6', textColor: 'text-[#2E3233]' },
      { label: '20%', hex: '#D2DFCC', textColor: 'text-[#2E3233]' },
      { label: '30%', hex: '#BACFB2', textColor: 'text-[#2E3233]' },
      { label: '40%', hex: '#A5C29B', textColor: 'text-[#2E3233]' },
      { label: '60%', hex: '#8BAF80', textColor: 'text-white' },
    ],
    shades: [
      { label: '80%', hex: '#3D5C2D', textColor: 'text-white' },
      { label: '90%', hex: '#2E4622', textColor: 'text-white' },
      { label: '100%', hex: '#203117', textColor: 'text-white' },
      { label: '120%', hex: '#172311', textColor: 'text-white' },
      { label: '140%', hex: '#0E160A', textColor: 'text-white' },
    ],
    uiAccents: [
      { label: 'Primary', hex: '#4C7338', desc: 'Sync & Polygon Maps' },
      { label: 'Secondary', hex: '#1E6E6B', desc: 'Audit Ledger Stream' },
      { label: 'Telemetry Ping', hex: '#E65217', desc: 'EUDR Compliance Alert' },
      { label: 'Data Chip', hex: '#D2DFCC', desc: 'GPS Coordinate Tag' },
      { label: 'Heading', hex: '#2E3233', desc: 'Precision Data Monospace' },
      { label: 'Border', hex: '#D5DED0', desc: 'Device Frame Edge' },
      { label: 'Canvas', hex: '#F4F6F2', desc: 'Offline Field Screen' },
      { label: 'Surface', hex: '#FFFFFF', desc: 'Table Record Row' },
    ],
  },

  assure: {
    id: 'assure',
    divisionId: 'tcert',
    name: 'TCert · Assure (Independent Certification)',
    verb: 'Assure',
    headline: 'A calm, professional and modern palette.',
    description: 'Representing independent certification, trust, credibility and global standards across TradeCare Africa.',
    primaryHex: '#407E8C',
    coreColors: [
      {
        name: 'Teal',
        hex: '#407E8C',
        role: 'Primary',
        meaning: 'Trust, Certification, Professionalism',
        textColor: 'text-white',
      },
      {
        name: 'Navy',
        hex: '#083A4F',
        role: 'Secondary',
        meaning: 'Depth, Stability, Authority',
        textColor: 'text-white',
      },
      {
        name: 'Aqua',
        hex: '#C0D5D6',
        role: 'Secondary',
        meaning: 'Clarity, Transparency, Innovation',
        textColor: 'text-[#083A4F]',
      },
      {
        name: 'Gold',
        hex: '#A58D66',
        role: 'Secondary',
        meaning: 'Value, Excellence, Recognition',
        textColor: 'text-white',
      },
      {
        name: 'Sand',
        hex: '#E5E1DD',
        role: 'Neutral',
        meaning: 'Balance, Simplicity, Versatility',
        textColor: 'text-[#083A4F]',
        border: true,
      },
    ],
    tints: [
      { label: '10%', hex: '#E8F2F3', textColor: 'text-[#083A4F]' },
      { label: '20%', hex: '#D6E6E8', textColor: 'text-[#083A4F]' },
      { label: '30%', hex: '#B9D5D9', textColor: 'text-[#083A4F]' },
      { label: '40%', hex: '#9CC4CB', textColor: 'text-[#083A4F]' },
      { label: '60%', hex: '#7FB3BC', textColor: 'text-white' },
    ],
    shades: [
      { label: '80%', hex: '#366B77', textColor: 'text-white' },
      { label: '90%', hex: '#2C5863', textColor: 'text-white' },
      { label: '100%', hex: '#224651', textColor: 'text-white' },
      { label: '120%', hex: '#19353E', textColor: 'text-white' },
      { label: '140%', hex: '#0F252D', textColor: 'text-white' },
    ],
    uiAccents: [
      { label: 'Primary', hex: '#407E8C', desc: 'Audit Issuance Stamp' },
      { label: 'Hover', hex: '#5A9AA8', desc: 'Certificate Preview' },
      { label: 'Active', hex: '#74B1BD', desc: 'Scope Selection' },
      { label: 'Highlight', hex: '#D6E6E8', desc: 'Accreditation Pill' },
      { label: 'Success', hex: '#2E7D6B', desc: 'Compliant Verdict' },
      { label: 'Warning', hex: '#A58D66', desc: 'Annual Surveillance Due' },
      { label: 'Error', hex: '#C84B3A', desc: 'Critical Non-Conformance' },
      { label: 'Text / Heading', hex: '#083A4F', desc: 'Official Certificate Text' },
    ],
  },
};

export const BrandPaletteSection: React.FC<BrandPaletteSectionProps> = ({ onNavigateDivision }) => {
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>('connect');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const active = PALETTES[selectedPaletteId] || PALETTES.connect;

  return (
    <section id="brand-palette" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#DD5C36] uppercase tracking-wider mb-2">
              <Palette className="w-4 h-4" />
              <span>Official Design System · 5 Distinct Division Palettes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133020] tracking-tight">
              Color harmony across the entire agricultural chain.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#445D4E] max-w-2xl">
              Each division carries its own dedicated color identity directly derived from TradeCare Africa brand guidelines, ensuring recognizability while maintaining brand synergy.
            </p>
          </div>
          <div className="text-xs text-[#718579] font-mono bg-white px-3 py-1.5 rounded-lg border border-[#E5DFD3]">
            Click any swatch to copy HEX
          </div>
        </div>

        {/* 5-Division Palette Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {Object.values(PALETTES).map((p) => {
            const isSelected = p.id === selectedPaletteId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPaletteId(p.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-white text-[#133020] border-[#133020] shadow-sm ring-1 ring-[#133020]'
                    : 'bg-[#F2EDE4] text-[#556D5F] border-[#E0D7C9] hover:bg-white hover:text-[#133020]'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full shrink-0 shadow-2xs"
                  style={{ backgroundColor: p.primaryHex }}
                />
                <span>{p.name.split('·')[0].trim()}</span>
                <span className="text-[10px] font-mono text-[#718579]">({p.verb})</span>
              </button>
            );
          })}
        </div>

        {/* Active Palette Overview Header */}
        <div className="mt-6 p-6 bg-white border border-[#E5DFD3] rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: active.primaryHex }}
              />
              <span className="text-xs font-bold text-[#718579] uppercase tracking-wider">
                {active.name}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#133020] mt-1">
              {active.headline}
            </h3>
            <p className="text-xs sm:text-sm text-[#445D4E] mt-0.5 max-w-2xl">
              {active.description}
            </p>
          </div>

          {onNavigateDivision && (
            <button
              onClick={() => onNavigateDivision(active.divisionId)}
              className="px-4 py-2.5 text-xs font-bold text-white rounded-lg transition-transform hover:scale-[1.02] shadow-xs flex items-center gap-1.5 shrink-0"
              style={{ backgroundColor: active.primaryHex === '#FFDD00' ? '#076333' : active.primaryHex }}
            >
              <span>Explore {active.name.split('·')[0].trim()} Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 5 Core Swatches Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {active.coreColors.map((color) => (
            <div
              key={color.name}
              onClick={() => copyToClipboard(color.hex)}
              className={`rounded-2xl p-5 flex flex-col justify-between h-56 cursor-pointer transition-all hover:scale-[1.02] shadow-xs relative group ${
                color.border ? 'border border-[#E5DFD3]' : ''
              }`}
              style={{ backgroundColor: color.hex }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${color.textColor} opacity-85`}>
                  {color.role}
                </span>
                <span className={`text-xs ${color.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  {copiedColor === color.hex ? <Check className="w-4 h-4" /> : <Copy className="w-3.5 h-3.5" />}
                </span>
              </div>

              <div>
                <h4 className={`text-lg font-extrabold leading-tight ${color.textColor}`}>
                  {color.name}
                </h4>
                <div className={`text-xs font-mono font-bold mt-0.5 ${color.textColor} opacity-90`}>
                  {color.hex}
                </div>
                <div className={`text-[11px] font-medium mt-2 pt-2 border-t border-black/10 ${color.textColor} opacity-80 leading-snug`}>
                  {color.meaning}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tints, Shades & UI Accents Card */}
        <div className="mt-8 bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-7 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tints */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#133020] uppercase tracking-wide flex items-center justify-between">
                <span>Lighter Shades (Tints)</span>
                <span className="text-[10px] font-mono text-[#718579]">10% – 60%</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {active.tints.map((tint) => (
                  <button
                    key={tint.label}
                    onClick={() => copyToClipboard(tint.hex)}
                    className="p-3 rounded-xl text-center transition-transform hover:scale-105 border border-black/5 cursor-pointer"
                    style={{ backgroundColor: tint.hex }}
                    title={`Click to copy ${tint.hex}`}
                  >
                    <div className={`text-xs font-bold ${tint.textColor}`}>{tint.label}</div>
                    <div className={`text-[10px] font-mono ${tint.textColor} opacity-80`}>{tint.hex}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Shades */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#133020] uppercase tracking-wide flex items-center justify-between">
                <span>Darker Shades (Tones)</span>
                <span className="text-[10px] font-mono text-[#718579]">80% – 140%</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {active.shades.map((shade) => (
                  <button
                    key={shade.label}
                    onClick={() => copyToClipboard(shade.hex)}
                    className="p-3 rounded-xl text-center transition-transform hover:scale-105 cursor-pointer shadow-2xs"
                    style={{ backgroundColor: shade.hex }}
                    title={`Click to copy ${shade.hex}`}
                  >
                    <div className={`text-xs font-bold ${shade.textColor}`}>{shade.label}</div>
                    <div className={`text-[10px] font-mono ${shade.textColor} opacity-80`}>{shade.hex}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* UI and Brand Accents */}
          <div className="pt-6 border-t border-[#F0EBE1] space-y-3">
            <div className="text-xs font-bold text-[#133020] uppercase tracking-wide">
              UI & Application Token Mapping ({active.name.split('·')[0].trim()})
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {active.uiAccents.map((accent) => (
                <div
                  key={accent.label}
                  onClick={() => copyToClipboard(accent.hex)}
                  className="p-2.5 rounded-xl border border-[#E5DFD3] hover:border-[#133020] transition-colors cursor-pointer bg-[#FAF7F2]"
                >
                  <div
                    className="w-full h-8 rounded-lg mb-1.5 border border-black/5 shadow-2xs"
                    style={{ backgroundColor: accent.hex }}
                  />
                  <div className="text-xs font-bold text-[#133020] truncate">
                    {accent.label}
                  </div>
                  <div className="text-[10px] font-mono text-[#556D5F]">
                    {accent.hex}
                  </div>
                  <div className="text-[9px] text-[#718579] mt-0.5 truncate" title={accent.desc}>
                    {accent.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#F0EBE1] flex flex-wrap items-center justify-between text-xs text-[#718579] gap-2">
            <span>Official Specification: TradeCare Africa Styleguide System</span>
            <span className="font-semibold text-[#133020]">100% Brand Palette Compliant</span>
          </div>
        </div>

      </div>
    </section>
  );
};
