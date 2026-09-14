import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { OrderLinks } from "@/components/order-links";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export function CtaBanner() {
  const { lang } = useI18n();
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = bg.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const y = (window.innerHeight - rect.top) * 0.12;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden py-24 lg:py-32">
      <div ref={bg} className="absolute inset-[-18%] will-change-transform">
        <img
          src="/images/cheese-pull.jpg"
          alt=""
          width={1600}
          height={900}
          loading="lazy"
          className="size-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-espresso/70" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] text-cream">
          {copy.banner.title[lang]}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-cream/75">{copy.banner.sub[lang]}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={SITE.phoneTel} variant="gold" size="lg">
            <Phone className="size-4" />
            {SITE.phoneDisplay}
          </Button>
          <OrderLinks size="lg" className="flex flex-wrap justify-center gap-3" />
        </div>
      </div>
    </section>
  );
}
