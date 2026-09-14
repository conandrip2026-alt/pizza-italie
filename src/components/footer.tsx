import { Logo } from "@/components/logo";
import { copy } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

const LINKS = ["menu", "story", "reviews", "contact"] as const;

export function Footer() {
  const { lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-muted/15 bg-espresso">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 font-sans text-sm leading-relaxed text-cream/65">
            {copy.footer.blurb[lang]}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-cream/80">
          {LINKS.map((key) => (
            <a key={key} href={`#${key}`} className="underline-draw">
              {copy.nav[key][lang]}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-gold-muted/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-5 font-sans text-xs text-gold-muted sm:flex-row sm:justify-between sm:px-6 lg:px-10">
          <p>
            © {year} Pizza Italie. {copy.footer.rights[lang]}
          </p>
          <p>{copy.footer.powered}</p>
        </div>
      </div>
    </footer>
  );
}
