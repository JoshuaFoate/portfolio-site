export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="font-pixel text-lg md:text-2xl leading-relaxed text-heading">{children}</h2>
      <div className="h-px w-full bg-foreground/30 mt-4" />
    </div>
  );
}