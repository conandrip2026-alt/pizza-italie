import { useEffect, useState } from "react";
import { OrderLinks } from "@/components/order-links";
import { cn } from "@/lib/utils";

export function OrderBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0.08 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-gold-muted/15 bg-espresso/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <OrderLinks size="md" className="grid grid-cols-2 gap-2" />
    </div>
  );
}
