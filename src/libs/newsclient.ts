import { createClient } from "microcms-js-sdk";

export const newsclient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_NEWS_SERVICE_DOMAIN_NEWS || "",
  apiKey: process.env.NEXT_PUBLIC_API_KEY_NEWS || "",
});
