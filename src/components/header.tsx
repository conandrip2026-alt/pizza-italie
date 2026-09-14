import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { isOpenNow } from "@/lib/hours";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LINKS = ["home", "menu", "story", "reviews", "contact"] as const;

export function Header() {
  const { lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [live, setLive] = useState(false);

  useEffect(() => {
    setLive(isOpenNow());
    const id = window.setInterval(() => setLive(isOpenNow()), 30_000);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearInterval(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300",
        scrolled || open
          ? "bg-espresso/90 shadow-[0_1px_0_color-mix(in_oklab,var(--color-gold-muted)_18%,transparent)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((key) => (
            <a
              key={key}
              href={`#${key === "home" ? "top" : key}`}
              className="underline-draw font-sans text-sm text-cream/85 hover:text-cream"
            >
              {copy.nav[key][lang]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-sans text-[0.68rem] uppercase tracking-[0.16em] sm:px-3",
              live
                ? "bg-basil/20 text-cream ring-1 ring-basil/50"
                : "bg-charcoal text-gold-muted ring-1 ring-gold-muted/30",
            )}
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                live ? "bg-basil" : "bg-gold-muted",
              )}
              aria-hidden
            />
            <span className="hidden sm:inline">
              {live ? copy.open.now[lang] : copy.open.later[lang]}
            </span>
            <span className="sm:hidden">
              {live ? (lang === "fr" ? "Ouvert" : "Open") : lang === "fr" ? "16h" : "4pm"}
            </span>
          </span>

          <div
            className="flex items-center rounded-full border border-gold-muted/30 p-0.5 font-sans text-[0.7rem] tracking-[0.14em]"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
              className={cn(
                "rounded-full px-2.5 py-1 transition-colors",
                lang === "fr" ? "bg-gold text-espresso" : "text-gold-muted hover:text-cream",
              )}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={cn(
                "rounded-full px-2.5 py-1 transition-colors",
                lang === "en" ? "bg-gold text-espresso" : "text-gold-muted hover:text-cream",
              )}
            >
              EN
            </button>
          </div>

          <Button
            href={SITE.pickupUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="hidden md:inline-flex"
          >
            {copy.cta.pickup[lang]}
          </Button>
          <Button
            href={SITE.deliveryUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="tomato"
            size="sm"
            className="hidden md:inline-flex"
          >
            {copy.cta.delivery[lang]}
          </Button>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-gold-muted/15 bg-espresso lg:hidden"
      >
        <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Mobile">
          {LINKS.map((key) => (
            <a
              key={key}
              href={`#${key === "home" ? "top" : key}`}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-2xl text-cream"
            >
              {copy.nav[key][lang]}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Button href={SITE.phoneTel} variant="outline" size="lg">
              <Phone className="size-4" />
              {SITE.phoneDisplay}
            </Button>
            <Button
              href={SITE.pickupUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="cream"
              size="lg"
            >
              {copy.cta.pickup[lang]}
            </Button>
            <Button
              href={SITE.deliveryUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="tomato"
              size="lg"
            >
              {copy.cta.delivery[lang]}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
