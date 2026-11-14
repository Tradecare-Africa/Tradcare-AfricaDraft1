'use client';

import { useState } from 'react';

// Front-end only: wire `onSubmit` to your mailing-list provider.
export function NewsletterForm() {
  const [done, setDone] = useState(false);
  if (done) return <p className="text-sm text-white">Thank you — you are subscribed to TradeCare updates.</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-3">
      <p className="text-sm">Updates on our hubs, certification and market offtake.</p>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input id="newsletter-email" type="email" required placeholder="Your email address"
        className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-link-light/60 transition focus:border-primary" />
      <button type="submit" className="btn-primary w-full">Subscribe</button>
    </form>
  );
}
