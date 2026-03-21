"use client";

import { Field, FieldError, FieldLabel } from "@shadcn";
import { cn } from "@styles";

interface StandardFieldProps {
  label: string;
  error?: { message?: string };
  children: React.ReactNode;
  className?: string;
  /** Текст ошибки или массив ошибок */
  errors?: Array<{ message?: string } | undefined> | { message?: string };
  /** ID для связи Label и Input */
  id?: string;
}

/**
 * Стандартный конструктор поля ввода.
 * Объединяет Field, FieldLabel и FieldError в одну структуру.
 */
export const StandardField = ({ label, error, errors, children, className, id }: StandardFieldProps) => {
  // Нормализуем ошибки (одна ошибка или массив)
  const allErrors = errors ? (Array.isArray(errors) ? errors : [errors]) : error ? [error] : [];

  return (
    <Field className={cn("flex flex-col gap-2", className)}>
      <FieldLabel htmlFor={id} className="text-muted-foreground text-[11px] font-semibold tracking-wide uppercase">
        {label}
      </FieldLabel>
      {children}
      <FieldError errors={allErrors} className="border-0 text-[10px] font-medium tracking-wide uppercase" />
    </Field>
  );
};
