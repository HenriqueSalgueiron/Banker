"use client";

import { useState } from "react";
import { Transaction } from "@/types/transaction";
import { TransactionCard } from "@/components/TransactionCard/TransactionCard";

interface TransactionListProps {
  transactions: Transaction[];
  isLoading?: boolean;
  error?: string;
}

export function TransactionList({
  transactions,
  isLoading,
  error,
}: TransactionListProps) {
  const [search, setSearch] = useState("");

  if (error) {
    return (
      <div
        className="rounded-2xl border border-red-200 bg-red-50 p-6"
        role="alert"
      >
        <p className="text-sm text-red-600">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div data-testid="loading-state" className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-16 animate-pulse rounded-xl bg-zinc-100 dark:bg-zinc-800"
          />
        ))}
      </div>
    );
  }

  // check: talvez alterar isso dps pra ser parametro de busca e a API fake retornar já filtrado
  const filtered = transactions.filter((t) =>
    t.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Buscar transação..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
        disabled={transactions.length === 0}
        aria-label="Buscar transação"
      />

      {filtered.length === 0 ? (
        <p
          className="py-8 text-center text-sm text-zinc-400 dark:text-zinc-500"
          data-testid="empty-state"
        >
          Nenhuma transação encontrada.
        </p>
      ) : (
        <div className="flex flex-col gap-3" role="list">
          {filtered.map((transaction) => (
            <div key={transaction.id} role="listitem">
              <TransactionCard transaction={transaction} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
