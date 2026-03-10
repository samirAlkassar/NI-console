import Image from "next/image";
import { twMerge } from "tailwind-merge";

type BrandHeaderProps = {
  variant?: "default" | "sm";
};

export default function BrandHeader({ variant = "default" }: BrandHeaderProps) {
  const isSmall = variant === "sm";

  return (
    <div className={twMerge("flex items-center",
        isSmall ? "gap-2" : "gap-3"
    )}>
      <div
        className={twMerge("flex items-center justify-center bg-card-foreground shrink-0",
          isSmall ? "h-6 w-6" : "h-8 w-8"
        )}
      >
        <Image
          src="/brand/NI-Mark.svg"
          alt="NexusIgnite"
          width={isSmall ? 18 : 24}
          height={isSmall ? 18 : 24}
        />
      </div>

      <span
        className={twMerge("font-medium tracking-normal",
          isSmall ? "text-base leading-6" : "text-xl leading-7"
        )}
      >
        NexusIgnite Console
      </span>
    </div>
  );
}