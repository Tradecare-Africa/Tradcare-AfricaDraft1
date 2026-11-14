import React from 'react';
import { Mail, Phone, MapPin, Building, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface ContactSectionProps {
  onOpenInquiry: (tab?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#133020] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-md">
          {/* Decorative Warm Swirls */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DD5C36] rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#327039] rounded-full blur-3xl opacity-25 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold text-[#F0BE49] tracking-wider uppercase">
                Connect With TradeCare Africa
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-balance text-white">
                Ready to transform your agricultural supply chain?
              </h2>

              <p className="text-sm sm:text-base text-[#C2D6CA] leading-relaxed max-w-xl">
                Whether you are a supermarket chain sourcing export-grade fresh produce, a cooperative seeking to anchor a Zao Safi Hub, or an agribusiness requiring accredited third-party certification.
              </p>

              {/* Trust Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#E5F0E8]">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#327039] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span>100% Kenyan Women-Led Agribusiness</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#327039] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span>Independent Accredited Audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#327039] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span>EUDR Geolocation & MRL Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#327039] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span>Active Offtake: Carrefour & QuickMart</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiry('buyers')}
                  className="px-7 py-3.5 text-xs font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] active:bg-[#F29677] rounded-lg transition-all shadow-md flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Open Partnership Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenInquiry('produce')}
                  className="px-6 py-3.5 text-xs font-semibold text-[#133020] bg-[#F8EDD9] hover:bg-white rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  Schedule Hub Consultation
                </button>
              </div>
            </div>

            {/* Right Information Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 space-y-5 text-xs">
                
                <div className="border-b border-white/10 pb-4">
                  <div className="text-[11px] font-bold text-[#F0BE49] uppercase tracking-wide">
                    Headquarters & Hub Network
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    TradeCare Africa Limited
                  </div>
                  <div className="text-white/80 text-[11px]">
                    Founded 2014 by Joyce Wambui Gema · Agricultural Consultancy Award Winner 2023
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#DD5C36] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Central Operations</div>
                      <div className="text-white/70">Nairobi, Kenya</div>
                      <div className="text-white/60 text-[10px]">Field Hubs: Kiambu (Lari / Kinale) & Embu County</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#DD5C36] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Direct Email Inquiries</div>
                      <div className="text-white/70">info@tradecareafrica.com</div>
                      <div className="text-white/60 text-[10px]">Response time within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#407E8C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white flex items-center gap-2">
                        <span>TCert Assurance</span>
                        <span className="text-[9px] font-mono font-bold text-[#083A4F] bg-[#E8F2F3] px-1.5 py-0.5 rounded">
                          Independent Body
                        </span>
                      </div>
                      <div className="text-white/70">Operating independently since 2017</div>
                      <div className="text-white/60 text-[10px]">FLOCERT Structural Governance Separation Model</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] text-white/60 flex items-center justify-between">
                  <span>Agricultural Consultancy Award 2023</span>
                  <span className="font-mono">TCA-BUD-MSCT-001</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
