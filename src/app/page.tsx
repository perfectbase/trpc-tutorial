"use client";

import { trpc } from "@/trpc/client";

export default function Home() {
  const todos = trpc.listTodos.useQuery();

  return (
    <main>
      <pre>{JSON.stringify(todos.data, null, 2)}</pre>
    </main>
  );
}
