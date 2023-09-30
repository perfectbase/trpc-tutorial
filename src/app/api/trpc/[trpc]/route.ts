import type { NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server";

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req: req,
    createContext: () => ({}),
    onError: ({ error, path }) => {
      console.log("Error in tRPC handler (lambda) on path", path);
      console.error(error);
    },
  });

export { handler as GET, handler as POST };
