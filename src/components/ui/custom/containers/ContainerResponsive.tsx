import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContainerResponsiveProps = {
  children: ReactNode;
  className?: string;
};

export const ContainerResponsive = ({
  children,
  className,
}: ContainerResponsiveProps) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl px-4 py-10 sm:rounded-[2.5rem] sm:border sm:border-white/10 sm:bg-white/[0.04] sm:px-6 sm:shadow-2xl sm:shadow-black/20 sm:backdrop-blur-xl lg:px-8 lg:py-12",
        className,
      )}
    >
      {children}
    </div>
  );
};
