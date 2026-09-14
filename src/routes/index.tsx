import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/contact";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { MenuGrid } from "@/components/menu-grid";
import { OrderBar } from "@/components/order-bar";
import { Reviews } from "@/components/reviews";
import { Signatures } from "@/components/signatures";
import { Stats } from "@/components/stats";
import { Story } from "@/components/story";
import { copy } from "@/lib/copy";
import { I18nProvider, useI18n } from "@/lib/i18n";
import type { MenuCat } from "@/lib/menu";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  );
}

function Page() {
  const { lang } = useI18n();
  const [filter, setFilter] = useState<MenuCat | "all">("all");

  useEffect(() => {
    document.title =
      lang === "fr"
        ? "Pizza Italie | Pizza, poutine & ailes à Gatineau (Hull) depuis 1995"
        : "Pizza Italie | Pizza, poutine & wings in Gatineau (Hull) since 1995";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        lang === "fr"
          ? "Pizzeria de Hull depuis 1995. Pizza, poutine et ailes. Ouvert tous les jours de 16 h à 4 h. Pickup et livraison — 101 Promenade du Portage, Gatineau."
          : "Hull’s pizzeria since 1995. Pizza, poutine and wings. Open every day 4pm–4am. Pickup and delivery — 101 Promenade du Portage, Gatineau.",
      );
    }
  }, [lang]);

  function pick(cat: MenuCat) {
    setFilter(cat);
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <JsonLd />
      <div className="grain" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-espresso"
      >
        {copy.skip[lang]}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Signatures onPick={pick} />
        <MenuGrid filter={filter} onFilter={setFilter} />
        <Story />
        <Reviews />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <OrderBar />
    </>
  );
}
