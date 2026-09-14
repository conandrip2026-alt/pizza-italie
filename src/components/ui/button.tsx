import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide transition-[transform,background-color,color,border-color] duration-150 ease-out active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        tomato: "bg-tomato text-cream hover:bg-wine",
        gold: "bg-gold text-espresso hover:bg-gold-muted",
        cream: "bg-cream text-espresso hover:bg-offwhite",
        outline:
          "border border-gold-muted/60 bg-transparent text-cream hover:border-gold hover:text-gold",
        ghost: "text-cream hover:text-gold",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-5 text-sm",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "tomato", size: "md" },
  },
);

type Props = VariantProps<typeof buttonVariants> &
  ComponentProps<"a"> & {
    children: ReactNode;
    href?: string;
  };

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: Props) {
  const cls = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...(props as ComponentProps<"button">)}>
      {children}
    </button>
  );
}

export { buttonVariants };
