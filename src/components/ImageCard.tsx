import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { productTheme, type ProductSlug } from '@/lib/productColors';

/**
 * Shared image card: project carousel, leadership grid and Service Ecosystem grids.
 * Pass `product` to theme the card with that product's colour identity.
 */
export function ImageCard({ href, image, imageAlt = '', kicker, title, text, cta = 'Read More', product }: {
  href: string; image: string; imageAlt?: string; kicker?: string; title: string; text?: string; cta?: string; product?: ProductSlug;
}) {
  const themed = Boolean(product);
  return (
    <article {...(product ? productTheme(product) : {})}
      className="card group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image quality={90} src={image} alt={imageAlt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {kicker && (
          themed
            ? <span className="mb-3 inline-block self-start rounded-full bg-product-tint px-3 py-1 text-xs font-bold tracking-[0.05em] text-product-ink uppercase">{kicker}</span>
            : <span className="eyebrow">{kicker}</span>
        )}
        <h3 className="mb-3 text-xl">
          <Link href={href} className={`transition ${themed ? 'hover:text-product-ink' : 'hover:text-primary'}`}>{title}</Link>
        </h3>
        {text && <p className="mb-5 text-sm">{text}</p>}
        <Link href={href} aria-label={`${cta}: ${title}`}
          className={`mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-bold transition ${themed ? 'text-product-ink hover:underline' : 'text-primary hover:text-primary-dark'}`}>
          {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
