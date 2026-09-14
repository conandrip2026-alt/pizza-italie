import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { Magnetic } from "./magnetic";

export function OrderLinks({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { lang } = useI18n();
  return (
    <div className={className}>
      <Magnetic>
        <Button
          href={SITE.pickupUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="cream"
          size={size}
        >
          {copy.cta.pickup[lang]}
        </Button>
      </Magnetic>
      <Magnetic>
        <Button
          href={SITE.deliveryUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="tomato"
          size={size}
        >
          {copy.cta.delivery[lang]}
        </Button>
      </Magnetic>
    </div>
  );
}
