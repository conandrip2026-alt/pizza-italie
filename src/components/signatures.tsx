import { FoodImage } from "@/components/food-image";
import { SIGNATURES, type MenuCat } from "@/lib/menu";
import { copy } from "@/lib/copy";
import { formatPrice } from "@/lib/format";
import { useI18n } from "@/lib/i18n";

export function Signatures({ onPick }: { onPick: (cat: MenuCat) => void }) {
  const { lang } = useI18n();

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <p className="font-sans text-xs uppercase tracking-[0.32em] text-gold-muted">
        {copy.signatures.kicker[lang]}
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-cream">
        {copy.signatures.title[lang]}
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {SIGNATURES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onPick(item.cat)}
            className="group relative overflow-hidden rounded-xl bg-charcoal text-left"
          >
            <FoodImage
              src={item.image}
              alt={item[lang]}
              width={900}
              height={1200}
              className="aspect-[3/4]"
              imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso via-espresso/70 to-transparent p-5 pt-16">
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.22em] text-gold-muted">
                {copy.menu.cats[item.cat][lang]}
              </p>
              <h3 className="mt-1 font-display text-2xl text-cream">{item[lang]}</h3>
              <p className="mt-1 font-sans text-sm text-cream/70">{item.line[lang]}</p>
              <p className="price mt-3 font-sans text-sm text-gold tabular-nums transition-transform duration-300 group-hover:-translate-y-1">
                {formatPrice(item.price, lang)}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
