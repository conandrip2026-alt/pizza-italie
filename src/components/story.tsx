import { useEffect, useRef } from "react";
import { FoodImage } from "@/components/food-image";
import { copy } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export function Story() {
  const { lang } = useI18n();
  const imgRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const img = imgRef.current;
        const line = lineRef.current;
        if (!section || !img || !line) return;
        const rect = section.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight * 0.7 - rect.top) / (rect.height * 0.7)),
        );
        img.style.transform = `translate3d(0, ${progress * -24}px, 0)`;
        line.style.transform = `scaleY(${progress})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="scroll-mt-24 border-t border-gold-muted/10 bg-charcoal"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div ref={imgRef} className="overflow-hidden rounded-xl will-change-transform">
            <FoodImage
              src="/images/storefront.jpg"
              alt="Pizza Italie, Promenade du Portage, Hull"
              width={1600}
              height={1066}
              className="aspect-[3/2]"
            />
          </div>
          <div className="mt-4 overflow-hidden rounded-xl">
            <FoodImage
              src="/images/oven.jpg"
              alt=""
              width={900}
              height={1200}
              className="aspect-[4/3]"
            />
          </div>
        </div>

        <div>
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-gold-muted">
            {copy.story.kicker[lang]}
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-cream">
            {copy.story.title[lang]}
          </h2>
          <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-cream/80">
            <p>{copy.story.p1[lang]}</p>
            <p>{copy.story.p2[lang]}</p>
            <p>{copy.story.p3[lang]}</p>
          </div>

          <div className="relative mt-12 pl-8">
            <div className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gold-muted/25" />
            <div
              ref={lineRef}
              className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gold will-change-transform"
              style={{ transform: "scaleY(0)" }}
            />
            <ol className="space-y-8">
              {copy.story.marks.map((mark) => (
                <li key={mark.year} className="relative">
                  <span className="absolute -left-8 top-1.5 size-2.5 rounded-full bg-gold" />
                  <p className="font-display text-2xl text-cream">{mark.year}</p>
                  <p className="font-sans text-sm uppercase tracking-[0.18em] text-gold-muted">
                    {mark[lang]}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
