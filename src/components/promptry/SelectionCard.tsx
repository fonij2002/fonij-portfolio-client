import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  selected?: boolean;
  onClick: () => void;
}

export const SelectionCard = ({
  title,
  description,
  icon: Icon,
  selected,
  onClick,
}: SelectionCardProps) => {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border bg-white/5 p-6 text-left backdrop-blur-xl transition-all",
        selected
          ? "border-white/30 bg-white/10"
          : "border-white/10 hover:border-white/20 hover:bg-white/[0.07]",
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

      <div className="relative z-10">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
          <Icon className="h-6 w-6 text-white" />
        </div>

        <h3 className="text-lg font-medium text-white">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
      </div>
    </motion.button>
  );
};
