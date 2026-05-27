import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

interface InputSelectProps {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  required?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
}

export const InputSelect = ({
  id,
  label,
  placeholder = "Select an option",
  value,
  onChange,
  options,
  required = false,
  error,
  disabled = false,
  className,
  triggerClassName,
}: InputSelectProps) => {
  const { i18n } = useTranslation();

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label htmlFor={id} className="text-sm font-medium text-neutral-200">
          {label} {required && <span className="text-red-400">*</span>}
        </Label>
      )}

      <Select
        value={value}
        onValueChange={onChange}
        dir={i18n.dir()}
        disabled={disabled}
      >
        <SelectTrigger
          id={id}
          className={cn(
            "h-12 rounded-2xl border border-white/10 bg-neutral-900/80 px-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-fuchsia-400/30 focus:ring-0",
            error && "border-red-400/70 focus:border-red-400",
            triggerClassName,
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className="rounded-2xl border border-white/10 bg-neutral-950 text-neutral-100 shadow-2xl">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="cursor-pointer rounded-xl text-sm focus:bg-white/10 focus:text-white"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};
