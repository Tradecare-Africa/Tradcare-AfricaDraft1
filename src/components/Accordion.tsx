import { ChevronDown } from 'lucide-react';

export function Accordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details key={item.title} open={i === 0} className="group rounded-lg border border-line bg-white shadow-sm open:border-l-4 open:border-l-product">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg min-h-11 px-5 py-4 font-bold text-ink transition hover:text-product-ink sm:px-6 [&::-webkit-details-marker]:hidden">
            {item.title}
            <ChevronDown className="h-5 w-5 shrink-0 text-product transition group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="border-t border-line px-5 py-5 text-sm sm:px-6">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
