export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-4xl font-bold">{children}</h2>
      <div className="h-px w-16 bg-foreground/30 mt-4" />
    </div>
  );
}