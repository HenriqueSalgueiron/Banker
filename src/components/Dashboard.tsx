"use client";

import { BalanceCard } from "@/components/BalanceCard";
import { TransactionList } from "@/components/TransactionList";
import { useAccount } from "@/hooks/useAccount";

export function Dashboard() {
  const { account, error, isLoading } = useAccount();

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <main className="mx-auto max-w-lg px-4 py-8">
          <p className="text-center text-red-500">{error?.message}</p>
        </main>
      </div>
    );
  }

  if (isLoading || !account) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <main className="mx-auto max-w-lg px-4 py-8">
          <p className="text-center text-zinc-500 dark:text-zinc-400">
            Carregando...
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-lg px-4 py-8">
        <BalanceCard owner={account.owner} balance={account.balance} />

        <section className="mt-6">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Extrato
          </h2>
          <TransactionList transactions={account.transactions} />
        </section>
      </main>
    </div>
  );
}
