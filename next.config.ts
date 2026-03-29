import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const withBundleAnalyzerPlugin = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
  analyzerMode: "static",
});

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", "http://localhost:3000", "http://127.0.0.1:3000"],
  output: "standalone",
};

export default withBundleAnalyzerPlugin(withNextIntl(nextConfig));
