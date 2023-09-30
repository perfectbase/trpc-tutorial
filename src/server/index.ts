import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  listTodos: publicProcedure.query(async () => {
    return [
      { id: 1, text: "Buy milk", done: false },
      { id: 2, text: "Buy eggs", done: true },
    ];
  }),
});

export type AppRouter = typeof appRouter;
