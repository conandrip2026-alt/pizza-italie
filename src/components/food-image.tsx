import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function FoodImage({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  priority,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("overflow-hidden bg-charcoal", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "size-full object-cover transition-[opacity,transform] duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName,
        )}
      />
    </div>
  );
}
