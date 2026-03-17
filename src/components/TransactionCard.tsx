import { Transaction } from "@/types/transaction";
import { formatBRLMoney } from "@/utils/currency";
import { formatStringDateToBR } from "@/utils/date";

interface TransactionCardProps {
  transaction: Transaction;
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  const isDeposit = transaction.type === "deposit";

  return (
    <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-5 py-4 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          {transaction.description}
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          {formatStringDateToBR(transaction.date)}
        </p>
      </div>

      <p
        className={`text-sm font-semibold ${
          isDeposit
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-red-600 dark:text-red-400"
        }`}
        data-testid="transaction-amount"
      >
        {isDeposit ? "+ " : "- "}
        {formatBRLMoney(transaction.amount)}
      </p>
    </div>
  );
}
