import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Некорректный email"),
  message: z.string().min(10, "Сообщение должно быть содержательным (минимум 10 символов)"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
