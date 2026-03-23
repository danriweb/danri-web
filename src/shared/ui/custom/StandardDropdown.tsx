import { ReactNode } from "react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@shadcn";

export interface StandardDropdownItem {
  id: string;
  label: ReactNode;
  badge?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export interface StandardDropdownProps {
  trigger: ReactNode;
  items: StandardDropdownItem[];
  align?: "center" | "start" | "end";
  contentClassName?: string;
}

/**
 * Стандартный дропдаун с кастомными стилями
 */
export const StandardDropdown = ({
  trigger,
  items,
  align = "end",
  contentClassName = "flex w-36 flex-col gap-1 p-1 py-1.5",
}: StandardDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent align={align} className={contentClassName}>
        {items.map(({ id, label, badge, isActive, onClick, disabled }) => (
          <DropdownMenuItem
            key={id}
            onClick={onClick}
            disabled={disabled}
            className={`cursor-pointer justify-between focus:bg-white/5 focus:text-white! focus:**:text-white! ${
              isActive
                ? "bg-primary/10 text-primary! focus:bg-primary/15 focus:text-primary! focus:**:text-primary!"
                : ""
            }`}
          >
            <span>{label}</span>
            {badge && (
              <span
                aria-hidden="true"
                className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-wider ${
                  isActive ? "bg-primary/20 text-primary" : "text-muted-foreground bg-white/10"
                }`}
              >
                {badge}
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
