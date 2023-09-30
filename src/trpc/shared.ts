export const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
};

export const getTRPCUrl = () => {
  return `${getBaseUrl()}/api/trpc`;
};
