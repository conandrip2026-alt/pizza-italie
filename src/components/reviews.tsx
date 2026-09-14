import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SITE } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { REVIEWS } from "@/lib/reviews";
import { cn } from "@/lib/utils";

export function Reviews() {
  const { lang } = useI18n();
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const hover = useRef(false);

  function go(dir: number) {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("article");
    const w = card ? card.getBoundingClientRect().width + 16 : 360;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  }

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector("article");
      const w = card ? card.getBoundingClientRect().width + 16 : 360;
      setIndex(Math.round(el.scrollLeft / w));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (hover.current) return;
      const el = scroller.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth - 8;
      if (el.scrollLeft >= max) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        go(1);
      }
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="reviews" className="scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <p className="font-sans text-xs uppercase tracking-[0.32em] text-gold-muted">
          {copy.reviews.kicker[lang]}
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-end gap-4">
            <p className="font-display text-[clamp(4rem,10vw,8rem)] leading-none tracking-tight text-cream">
              4.7
            </p>
            <div className="mb-3">
              <div className="flex gap-1 text-gold" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold" />
                ))}
              </div>
              <p className="mt-1 font-display text-xl italic text-gold-muted">
                {copy.reviews.title[lang]}
              </p>
            </div>
          </div>
          <a
            href={SITE.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-draw font-sans text-sm text-cream"
          >
            {copy.reviews.all[lang]}
          </a>
        </div>
      </div>

      <div
        className="relative mt-10"
        onMouseEnter={() => {
          hover.current = true;
        }}
        onMouseLeave={() => {
          hover.current = false;
        }}
        onFocus={() => {
          hover.current = true;
        }}
        onBlur={() => {
          hover.current = false;
        }}
      >
        {/* Optional upgrade: swap static quotes for Places API or Elfsight/EmbedSocial later */}
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 lg:px-[max(1.5rem,calc((100vw-1440px)/2+2.5rem))] [&::-webkit-scrollbar]:hidden"
          aria-live="off"
        >
          {REVIEWS.map((review, i) => (
            <article
              key={review.id}
              className="review-enter w-[min(85vw,26rem)] shrink-0 snap-center rounded-xl border border-gold-muted/15 bg-charcoal p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-8 items-center justify-center rounded-full bg-offwhite font-sans text-sm font-semibold text-[#4285F4]">
                  G
                </span>
                <div className="flex gap-0.5 text-gold" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-gold" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 font-display text-lg leading-snug text-cream">
                “{review.quote[lang]}”
              </blockquote>
              <p className="mt-5 font-sans text-sm text-gold-muted">
                {review.name}
                <span className="mx-2 text-gold-muted/50">·</span>
                {copy.reviews.source[lang]}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <div className="flex gap-1.5">
            {REVIEWS.map((review, i) => (
              <button
                key={review.id}
                type="button"
                aria-label={`${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-gold-muted/40",
                )}
                onClick={() => {
                  const el = scroller.current;
                  const card = el?.querySelector("article");
                  const w = card ? card.getBoundingClientRect().width + 16 : 360;
                  el?.scrollTo({ left: i * w, behavior: "smooth" });
                }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label={copy.reviews.prev[lang]}
              onClick={() => go(-1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold-muted/30 text-cream hover:border-gold"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label={copy.reviews.next[lang]}
              onClick={() => go(1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold-muted/30 text-cream hover:border-gold"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
