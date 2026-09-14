import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { SITE } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { todayIndex } from "@/lib/hours";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Contact() {
  const { lang } = useI18n();
  const [today, setToday] = useState(0);

  useEffect(() => {
    setToday(todayIndex());
  }, []);

  return (
    <section id="contact" className="scroll-mt-24 border-t border-gold-muted/10 bg-charcoal">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-gold-muted">
            {copy.contact.kicker[lang]}
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,4vw,3.6rem)] text-cream">
            {copy.contact.title[lang]}
          </h2>
          <p className="mt-4 max-w-md font-sans text-cream/70">{copy.contact.how[lang]}</p>

          <dl className="mt-10 space-y-6 font-sans">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-gold-muted">
                {copy.contact.address[lang]}
              </dt>
              <dd className="mt-1 text-cream">{SITE.address}</dd>
              <a
                href={SITE.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-draw mt-1 inline-flex items-center gap-2 text-sm text-gold"
              >
                <MapPin className="size-4" />
                {copy.contact.directions[lang]}
              </a>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-gold-muted">
                {copy.contact.phone[lang]}
              </dt>
              <dd className="mt-1">
                <a href={SITE.phoneTel} className="text-cream hover:text-gold">
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-gold-muted">
                {copy.contact.email[lang]}
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${SITE.email}`} className="text-cream hover:text-gold">
                  {SITE.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-muted">
              {copy.contact.hours[lang]}
            </p>
            <ul className="mt-3 divide-y divide-gold-muted/10">
              {copy.contact.days.map((day, i) => (
                <li
                  key={day.en}
                  className={cn(
                    "flex items-center justify-between py-2.5 font-sans text-sm",
                    i === today ? "text-gold" : "text-cream/75",
                  )}
                >
                  <span className={cn(i === today && "font-medium")}>{day[lang]}</span>
                  <span className="tabular-nums">{copy.contact.hoursValue}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold-muted/30 text-cream hover:border-gold hover:text-gold"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold-muted/30 text-cream hover:border-gold hover:text-gold"
            >
              <Youtube className="size-4" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold-muted/30 text-cream hover:border-gold hover:text-gold"
            >
              <Mail className="size-4" />
            </a>
            <a
              href={SITE.phoneTel}
              aria-label={copy.cta.call[lang]}
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold-muted/30 text-cream hover:border-gold hover:text-gold"
            >
              <Phone className="size-4" />
            </a>
          </div>
        </div>

        <div className="min-h-[360px] bg-espresso lg:min-h-full">
          <iframe
            title="Pizza Italie — 101 Promenade du Portage, Gatineau"
            src={SITE.mapsEmbed}
            className="size-full min-h-[360px] border-0 grayscale-[0.35] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
