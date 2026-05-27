import { cn } from "@/lib/utils";
import type { MouseEvent, ReactNode } from "react";

type LinkIconProps = {
  href: string;
  children: ReactNode;
  icon: ReactNode;
  download?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export const LinkIcon = ({
  href,
  children,
  icon,
  download,
  className,
  onClick,
}: LinkIconProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || download || !href.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const target = document.querySelector(href);

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      download={download}
      className={cn(
        "group inline-flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-4 text-xs font-medium text-neutral-200 transition hover:bg-white/10 hover:text-white sm:min-h-0 sm:flex-row sm:gap-2 sm:px-4 sm:text-sm",
        className,
      )}
    >
      <span className="text-neutral-300 transition group-hover:text-white">
        {icon}
      </span>
      <span className="leading-none">{children}</span>
    </a>
  );
};
