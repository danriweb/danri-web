"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LazyMotion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { toast } from "sonner";

import { Toaster, TooltipProvider } from "@shadcn";

// Гарантирует гидратацию без анимаций
const loadFeatures = () => import("framer-motion").then((m) => m.domAnimation);

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 минут
            retry: 2, // 2 попытки при ошибке
          },
          mutations: {
            onError: (error) => {
              toast.error(error.message);
            },
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="theme-danri" enableSystem={false}>
        <TooltipProvider>
          {/* 
            LazyMotion для гидратации без анимаций и сжатия бандла 
          */}
          <LazyMotion features={loadFeatures} strict>
            {children}
            <Toaster />
          </LazyMotion>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
