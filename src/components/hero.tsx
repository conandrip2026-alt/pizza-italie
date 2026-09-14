import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { OrderLinks } from "@/components/order-links";
import { SITE } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

function Basil({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="#2F6B3A"
        d="M32 6c18 12 28 26 22 40-5 12-20 18-34 12C12 54 6 42 8 30 10 18 20 10 32 6z"
      />
      <path
        fill="none"
        stroke="#1C1410"
        strokeWidth="1.2"
        d="M30 12c2 10 4 22 2 38"
        opacity="0.35"
      />
    </svg>
  );
}

export function Hero() {
  const { lang } = useI18n();
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
        }
        if (midRef.current) {
          midRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        }
      });
    };

    const onMove = (e: MouseEvent) => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const el = driftRef.current;
      if (!el) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-dvh items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-0"
    >
      <div ref={bgRef} className="absolute inset-[-12%] will-change-transform">
        <img
          src="/images/hero.jpg"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover"
        />
      </div>
      <div
        ref={midRef}
        className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/70 to-espresso/20 will-change-transform sm:via-espresso/55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/40" />

      <div
        ref={driftRef}
        className="pointer-events-none absolute inset-0 z-[1] hidden transition-transform duration-500 ease-out will-change-transform md:block"
      >
        <Basil className="absolute right-[10%] top-[26%] size-20 opacity-60" />
        <Basil className="absolute bottom-[18%] left-[7%] size-12 rotate-12 opacity-35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <p className="hero-rise mb-5 font-sans text-xs uppercase tracking-[0.32em] text-gold-muted">
          {copy.hero.kicker[lang]}
        </p>
        <h1 className="font-display text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.88] tracking-tight text-cream">
          <span className="hero-rise" style={{ animationDelay: "80ms" }}>
            Pizza
          </span>
          <span className="hero-rise italic" style={{ animationDelay: "160ms" }}>
            Italie
          </span>
        </h1>
        <p
          className="hero-rise mt-4 font-display text-[clamp(1.4rem,3vw,2.35rem)] italic text-gold"
          style={{ animationDelay: "240ms" }}
        >
          {copy.hero.sub[lang]}
        </p>
        <p
          className="hero-rise mt-5 max-w-xl font-sans text-base text-cream/80 sm:text-lg"
          style={{ animationDelay: "320ms" }}
        >
          {copy.hero.line[lang]}
        </p>

        <div
          className="hero-rise mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "400ms" }}
        >
          <OrderLinks size="lg" className="flex flex-wrap gap-3" />
          <a
            href={SITE.phoneTel}
            className="underline-draw inline-flex items-center gap-2 font-sans text-sm text-cream/80"
          >
            <Phone className="size-4 text-gold" />
            {SITE.phoneDisplay}
          </a>
        </div>

        <a
          href="#menu"
          className="hero-rise mt-14 hidden items-center gap-3 text-gold-muted sm:inline-flex"
          style={{ animationDelay: "520ms" }}
        >
          <span className="scroll-cue-line block h-10 w-px bg-gold" />
          <span className="font-sans text-xs uppercase tracking-[0.28em]">
            {copy.hero.scroll[lang]}
          </span>
        </a>
      </div>
    </section>
  );
}
