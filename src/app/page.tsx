import { BalanceCard } from "@/components/BalanceCard/BalanceCard";
import { TransactionList } from "@/components/TransactionList/TransactionList";
import { mockAccount } from "@/mocks/account";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-lg px-4 py-8">
        <BalanceCard owner={mockAccount.owner} balance={mockAccount.balance} />

        <section className="mt-6">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Extrato
          </h2>
          <TransactionList transactions={mockAccount.transactions} />
        </section>
      </main>
    </div>
  );
}
