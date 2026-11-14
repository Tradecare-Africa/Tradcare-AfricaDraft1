export function SectionTitle({ eyebrow, title, intro, center = false }: {
  eyebrow: string; title: React.ReactNode; intro?: React.ReactNode; center?: boolean;
}) {
  return (
    <div className={center ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-12 max-w-3xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p className="mt-4">{intro}</p>}
    </div>
  );
}
