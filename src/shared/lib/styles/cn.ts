import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/*
  Этот хелпер используется для объединения классов Tailwind CSS.
  Он использует clsx для объединения классов и twMerge для слияния дублирующихся классов.
*/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
