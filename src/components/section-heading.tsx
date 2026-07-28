type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "left" ? "max-w-2xl text-left" : "mx-auto max-w-2xl text-center"}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
