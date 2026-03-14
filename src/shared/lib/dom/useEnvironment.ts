"use client";

import { useSyncExternalStore } from "react";

const emptyEnv = { local: false, vcl: false };

// Подписка (для hostname она не нужна, так как он не меняется без перезагрузки)
const subscribe = () => () => {};

const getSnapshot = () => {
  if (typeof window === "undefined") return emptyEnv;
  const host = window.location.hostname;
  return {
    local: host.includes("localhost") || host === "127.0.0.1",
    vcl: host.includes("vercel.app"),
  };
};

const getServerSnapshot = () => emptyEnv;

/**
 * Хук для определения текущего окружения (хоста).
 */
export function useEnvironment() {
  // Этот хук сам поймет, когда данные изменились, и не будет спамить рендерами
  const env = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isTest = env.local || env.vcl;

  return {
    isTest,
    isLocal: env.local,
    isVercel: env.vcl,
    isProduction: !isTest,
  };
}
