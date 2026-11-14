import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Shield, Mail, Phone, MapPin, Building2, Download } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, initialTab = 'buyers' }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    location: 'Kenya',
    divisionInterest: 'Whole Ecosystem',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialTab) {
      if (initialTab === 'train') setActiveTab('cooperatives');
      else if (initialTab === 'produce') setActiveTab('cooperatives');
      else if (initialTab === 'assure') setActiveTab('assurance');
      else if (initialTab === 'connect') setActiveTab('buyers');
      else if (initialTab === 'investors' || initialTab === 'leadership') setActiveTab('investors');
      else setActiveTab(initialTab);
    }
  }, [initialTab]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) errs.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.organization.trim()) errs.organization = 'Organization or Farm name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleDownloadDeckSummary = () => {
    const summaryText = `TradeCare Africa Limited - Ecosystem Summary
One Company. The Whole Chain.
Founded by Joyce Wambui Gema (2014) | Agricultural Consultancy Award 2023

1. TRAIN: TradeCare Academy - Graduate-led extension, Wageningen/Meru curriculum (+35-56% yield gain)
2. PRODUCE: Zao Safi Hub - 1:50 resident agronomists, RASTA methodology (0.5t to 8t commercial scale)
3. DIGITISE: FarmDataPod - EUDR plot geolocation, digital spray compliance, continuous audit ledger
4. ASSURE: TCert - Independent accredited certifier (GLOBALG.A.P., Organic, ISO 22000)
5. CONNECT: TradeCare Market - Mazao Safi brand, direct offtake with Carrefour Kenya & QuickMart, cold-chain haulage

Proven Track Record:
- Embu Macadamia: +245% net income by Year 10, tripled yield, 3.15x poverty line (IDH audited)
- Lari Cooperative: 275 registered producers, 144 running RASTA, 100% consent captured
- 300+ Paying assurance clients since 2017

Inquiries: info@tradecareafrica.com | Nairobi, Kenya`;

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'TradeCare_Africa_Executive_Brief.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl border border-[#E5DFD3] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#718579] hover:text-[#133020] rounded-lg transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 bg-[#EBF4EC] text-[#327039] rounded-2xl flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-[#133020]">
              Inquiry Received Successfully
            </h3>

            <p className="text-sm text-[#445D4E] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#133020]">{formData.fullName}</strong>. Our partnership lead from the Nairobi office has received your inquiry for <strong className="text-[#133020]">{formData.organization}</strong> and will follow up within 24 business hours.
            </p>

            <div className="p-4 bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl text-xs text-left max-w-md mx-auto space-y-1.5">
              <div className="text-[11px] font-bold text-[#718579] uppercase">Submission Summary:</div>
              <div className="text-[#133020]"><strong>Contact:</strong> {formData.email} {formData.phone && `· ${formData.phone}`}</div>
              <div className="text-[#133020]"><strong>Stream:</strong> {activeTab.toUpperCase()} · {formData.divisionInterest}</div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleDownloadDeckSummary}
                className="px-5 py-2.5 text-xs font-semibold text-[#133020] bg-[#F5F2EA] hover:bg-[#EDE8DC] border border-[#DDD6C8] rounded-lg transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Executive Briefing Summary</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div>
              <div className="text-xs font-bold text-[#DD5C36] uppercase tracking-wide">
                TradeCare Africa · Partnership Portal
              </div>
              <h3 className="text-2xl font-extrabold text-[#133020] mt-0.5">
                Engage Our Integrated Agricultural Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-[#526B5C] mt-1">
                Whether you are a supermarket buyer seeking verified produce, a cooperative seeking a Zao Safi Hub, or an agribusiness needing accredited audits.
              </p>
            </div>

            {/* Segmented Category Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-[#F5F2EA] rounded-xl border border-[#E5DFD3]">
              <button
                type="button"
                onClick={() => setActiveTab('buyers')}
                className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'buyers'
                    ? 'bg-white text-[#DD5C36] shadow-xs'
                    : 'text-[#5A7062] hover:text-[#133020]'
                }`}
              >
                Retailers & Buyers
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cooperatives')}
                className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'cooperatives'
                    ? 'bg-white text-[#327039] shadow-xs'
                    : 'text-[#5A7062] hover:text-[#133020]'
                }`}
              >
                Co-ops & Hubs
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('assurance')}
                className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'assurance'
                    ? 'bg-white text-[#22533B] shadow-xs'
                    : 'text-[#5A7062] hover:text-[#133020]'
                }`}
              >
                Certification
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('investors')}
                className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'investors'
                    ? 'bg-white text-[#133020] shadow-xs'
                    : 'text-[#5A7062] hover:text-[#133020]'
                }`}
              >
                Investors & Donors
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-bold text-[#133020] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Joyce Kariuki"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#DD5C36] ${
                      errors.fullName ? 'border-red-500' : 'border-[#E5DFD3]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#133020] mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. j.kariuki@company.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#DD5C36] ${
                      errors.email ? 'border-red-500' : 'border-[#E5DFD3]'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-bold text-[#133020] mb-1">
                    Organization / Farm / Cooperative *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Mount Kenya Horticulture Coop"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#DD5C36] ${
                      errors.organization ? 'border-red-500' : 'border-[#E5DFD3]'
                    }`}
                  />
                  {errors.organization && <p className="text-[10px] text-red-500 mt-0.5">{errors.organization}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#133020] mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 7..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#E5DFD3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#DD5C36]"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#133020] mb-1">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.divisionInterest}
                    onChange={(e) => setFormData({ ...formData, divisionInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#E5DFD3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#DD5C36]"
                  >
                    <option value="Whole Ecosystem">Full 5-Division Integrated Ecosystem</option>
                    <option value="Produce Offtake">TradeCare Market Produce Offtake (Carrefour/QuickMart spec)</option>
                    <option value="Hub Establishment">Zao Safi Hub Establishment (Kiambu / Embu model)</option>
                    <option value="Farmer Academy">TradeCare Academy Training Modules</option>
                    <option value="FarmDataPod">FarmDataPod Software & EUDR Geolocation</option>
                    <option value="TCert Audits">TCert (GLOBALG.A.P. / Organic / ISO)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#133020] mb-1">
                    Location / Country
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#E5DFD3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#DD5C36]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#133020] mb-1">
                  Specific Specifications or Project Scope
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details on your crop types, expected tonnage, target market standards, or cooperative member count..."
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#E5DFD3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#DD5C36]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleDownloadDeckSummary}
                  className="text-xs text-[#526B5C] hover:text-[#133020] font-medium flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Briefing Summary</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs font-semibold text-[#526B5C] hover:text-[#133020] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-[#DD5C36] hover:bg-[#EB7857] active:bg-[#F29677] rounded-lg transition-all shadow-xs flex items-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
