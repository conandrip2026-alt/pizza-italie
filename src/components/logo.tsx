import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="14.25"
        fill="#0C0A09"
        stroke="#D4A017"
        strokeWidth="1.7"
      />
      <path
        fill="#2F6B3A"
        d="M16 7c5.2 3.4 8.8 8 7.1 12.6-1.4 3.8-5.7 5.9-9.9 4.4C9.6 22.8 7.4 19.2 8 15.3 8.6 11.6 11.8 8.6 16 7z"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <a
      href="#top"
      className="group inline-flex items-center gap-3 text-cream no-underline"
      aria-label="Pizza Italie"
    >
      <Mark className="size-9 transition-transform duration-300 group-hover:rotate-6" />
      <span className="leading-none">
        <span className="mb-1 hidden font-sans text-[0.62rem] uppercase tracking-[0.28em] text-gold-muted sm:block">
          Hull · 1995
        </span>
        <span className="block font-display text-base tracking-wide sm:text-lg">
          Pizza Italie
        </span>
      </span>
    </a>
  );
}
