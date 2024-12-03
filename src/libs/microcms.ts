import { createClient } from "microcms-js-sdk";

if (
  !process.env.NEXT_PUBLIC_SERVICE_DOMAIN ||
  !process.env.NEXT_PUBLIC_API_KEY
) {
  throw new Error(
    "必要な環境変数 SERVICE_DOMAIN または API_KEY が設定されていません。"
  );
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
