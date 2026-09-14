import type { Lang } from "./i18n";

export function formatPrice(frPrice: string, lang: Lang) {
  if (lang === "fr") return frPrice;
  const num = frPrice.replace("dès ", "").replace(" $", "").replace(",", ".");
  return `from $${num}`;
}
