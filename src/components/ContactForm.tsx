'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { ecosystemList } from '@/lib/site';

const TOPICS = [...ecosystemList.map((d) => d.detail.uniqueCta.formCategory), 'General Partnership'];
const field = 'w-full rounded-md border border-line bg-cream min-h-11 px-4 py-3 text-base text-ink sm:text-sm transition focus:border-primary';

// Front-end only: connect `onSubmit` to an API route or form service to receive inquiries.
export function ContactForm() {
  const topic = useSearchParams().get('topic');
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-lg bg-white p-10 text-center shadow-md">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="mb-2 text-2xl">Thank you</h3>
        <p>We have received your inquiry. Response time within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5 rounded-lg bg-white p-5 shadow-md sm:p-8">
      <h3 className="text-2xl">Send an inquiry</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className="mb-1.5 block text-sm font-bold text-ink">Full name</label><input id="name" required className={field} /></div>
        <div><label htmlFor="org" className="mb-1.5 block text-sm font-bold text-ink">Organisation</label><input id="org" className={field} /></div>
        <div><label htmlFor="email" className="mb-1.5 block text-sm font-bold text-ink">Email</label><input id="email" type="email" required className={field} /></div>
        <div><label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-ink">Phone / WhatsApp (Optional)</label><input id="phone" type="tel" placeholder="+254 7..." className={field} /></div>
      </div>
      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-bold text-ink">Inquiry type</label>
        <select id="topic" defaultValue={topic && TOPICS.includes(topic) ? topic : TOPICS[TOPICS.length - 1]} className={field}>
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div><label htmlFor="msg" className="mb-1.5 block text-sm font-bold text-ink">Message</label><textarea id="msg" rows={5} required className={field} /></div>
      <button type="submit" className="btn-primary w-full">Submit Inquiry</button>
    </form>
  );
}
