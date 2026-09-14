import { useEffect, useRef, useState } from "react";
import { copy } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCount(end: number, play: boolean, duration = 1900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!play) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      setValue(end * easeOutExpo(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, end, duration]);
  return value;
}

function Stat({
  end,
  format,
  label,
  play,
  delay,
}: {
  end: number;
  format: (n: number) => string;
  label: string;
  play: boolean;
  delay: string;
}) {
  const value = useCount(end, play);
  return (
    <div className="px-4 py-8 sm:px-6">
      <p className="font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-none tracking-tight text-cream tabular-nums">
        {format(value)}
      </p>
      <div className={cn("gold-rule mt-3 max-w-24", play && "is-on")} style={{ animationDelay: delay }} />
      <p className="mt-3 font-sans text-xs uppercase tracking-[0.22em] text-gold-muted">{label}</p>
    </div>
  );
}

export function Stats() {
  const { lang } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = bgRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const y = (window.innerHeight - rect.top) * 0.08;
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
    <section ref={ref} className="relative overflow-hidden border-y border-gold-muted/15 bg-charcoal">
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-[0.12] will-change-transform"
      />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
        <Stat
          end={1995}
          play={play}
          delay="0ms"
          format={(n) => String(Math.round(n))}
          label={copy.stats.year[lang]}
        />
        <Stat
          end={30}
          play={play}
          delay="80ms"
          format={(n) => `${Math.round(n)}+`}
          label={copy.stats.years[lang]}
        />
        <Stat
          end={4.7}
          play={play}
          delay="160ms"
          format={(n) => n.toFixed(1)}
          label={copy.stats.rating[lang]}
        />
        <Stat
          end={4}
          play={play}
          delay="240ms"
          format={(n) => `${Math.round(n)}:00`}
          label={copy.stats.until[lang]}
        />
      </div>
    </section>
  );
}
