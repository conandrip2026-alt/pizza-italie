import { useMemo, useState } from "react";
import { FoodImage } from "@/components/food-image";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { formatPrice } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { MENU, MENU_CATS, type MenuCat } from "@/lib/menu";
import { cn } from "@/lib/utils";

export function MenuGrid({
  filter,
  onFilter,
}: {
  filter: MenuCat | "all";
  onFilter: (cat: MenuCat | "all") => void;
}) {
  const { lang } = useI18n();
  const [tick, setTick] = useState(0);

  const items = useMemo(
    () => (filter === "all" ? MENU : MENU.filter((item) => item.cat === filter)),
    [filter],
  );

  function setCat(cat: MenuCat | "all") {
    onFilter(cat);
    setTick((n) => n + 1);
  }

  return (
    <section id="menu" className="scroll-mt-24 bg-espresso pb-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <p className="font-sans text-xs uppercase tracking-[0.32em] text-gold-muted">
          {copy.menu.kicker[lang]}
        </p>
        <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-none text-cream">
          {copy.menu.title[lang]}
        </h2>

        <div className="mt-8 overflow-hidden rounded-xl border border-gold/30 bg-charcoal px-5 py-4 sm:px-7">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            {copy.menu.ribbonTitle[lang]}
          </p>
          <p className="mt-1 font-display text-xl text-cream sm:text-2xl">
            {copy.menu.ribbonSizes[lang]}
          </p>
          <p className="mt-1 font-sans text-sm text-gold-muted">{copy.menu.ribbonPrices[lang]}</p>
        </div>

        <div className="sticky top-[4.5rem] z-20 -mx-4 mt-8 border-y border-gold-muted/10 bg-espresso/90 px-4 py-3 backdrop-blur-md sm:mx-0 sm:rounded-full sm:border sm:px-2">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <FilterPill active={filter === "all"} onClick={() => setCat("all")}>
              {copy.menu.all[lang]}
            </FilterPill>
            {MENU_CATS.map((cat) => (
              <FilterPill key={cat} active={filter === cat} onClick={() => setCat(cat)}>
                {copy.menu.cats[cat][lang]}
              </FilterPill>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const primary = lang === "fr" ? item.fr : item.en;
            const secondary = lang === "fr" ? item.en : item.fr;
            return (
              <article
                key={`${item.id}-${tick}`}
                className={cn(
                  "menu-enter group flex flex-col overflow-hidden rounded-xl bg-charcoal",
                  item.featured && "sm:col-span-2 sm:grid sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]",
                )}
                style={{ animationDelay: `${(i % 8) * 40}ms` }}
              >
                <FoodImage
                  src={item.image}
                  alt={primary}
                  width={900}
                  height={1200}
                  className={cn(
                    "aspect-square",
                    item.featured && "sm:aspect-auto sm:h-full",
                  )}
                  imgClassName="transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div
                  className={cn(
                    "flex flex-1 flex-col p-4 sm:p-5",
                    item.featured && "sm:justify-center sm:p-8",
                  )}
                >
                  <span className="w-fit rounded-full border border-gold-muted/30 px-2 py-0.5 font-sans text-[0.62rem] uppercase tracking-[0.18em] text-gold-muted">
                    {copy.menu.cats[item.cat][lang]}
                  </span>
                  <h3 className="mt-2 font-display text-xl leading-tight text-cream">{primary}</h3>
                  {primary !== secondary && (
                    <p className="font-sans text-sm italic text-gold-muted">{secondary}</p>
                  )}
                  <p className="mt-2 line-clamp-1 font-sans text-sm text-cream/65">
                    {item.toppings[lang]}
                  </p>
                  <p className="mt-auto pt-4 text-right font-sans text-sm text-gold tabular-nums">
                    {formatPrice(item.price, lang)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 font-sans text-xs text-gold-muted">{copy.menu.footnote[lang]}</p>

        <div className="mt-10 flex justify-center">
          <Button
            href={SITE.pickupUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="tomato"
            size="lg"
          >
            {copy.cta.orderNow[lang]}
          </Button>
        </div>
      </div>
    </section>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "shrink-0 rounded-full px-4 py-2 font-sans text-sm transition-colors",
        active ? "bg-gold text-espresso" : "text-cream/80 hover:bg-charcoal hover:text-cream",
      )}
    >
      {children}
    </button>
  );
}
