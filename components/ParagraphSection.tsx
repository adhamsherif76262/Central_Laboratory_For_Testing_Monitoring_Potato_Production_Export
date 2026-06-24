import clsx from "clsx";

// components/ParagraphSection.tsx
type Props = {
  title: string;
  paragraphs: string[];
  rtl?: boolean;
};

export default function ParagraphSection({ title, paragraphs, rtl = false }: Props) {
  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="w-full mt-12 px-4 py-4 sm:px-6 lg:px-12 bg-[#FAFAF0] rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width mx-auto"
    >
      <h2 className={clsx(
        "font-black mb-6 tracking-wider text-center bg_Gray",
        rtl ? "xxxs:text-2xl xs:text-3xl" : "xxxs:text-xl xxs:text-2xl"
      )}>
        {title}
      </h2>

      <div className={clsx(
        "space-y-6 text-gray-300 text-sm text-center",
        rtl ? "xxxs:text-xl xs:text-2xl font-black" : "xxxs:text-lg xxs:text-xl lg:text-2xl"
      )}>
        {paragraphs.map((p, i) => (
          <p key={i} className={clsx(
            "hover:text-blue-950 transition-colors duration-200 font-black text-black",
            rtl ? "leading-relaxed" : "leading-relaxed"
          )}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
