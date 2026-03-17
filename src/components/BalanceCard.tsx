import { formatBRLMoney } from "@/utils/currency";

interface BalanceCardProps {
  balance: number;
  owner: string;
  isLoading?: boolean;
  error?: string;
}

export function BalanceCard({
  balance,
  owner,
  isLoading,
  error,
}: BalanceCardProps) {
  if (error) {
    return (
      <div
        className="rounded-2xl border border-red-200 bg-red-50 p-6"
        role="alert"
        aria-label="Erro ao carregar saldo"
      >
        <p className="text-sm text-red-600">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        role="status"
        aria-label="Carregando saldo"
        className="animate-pulse rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-800"
      >
        <div
          aria-hidden="true"
          className="h-4 w-24 rounded bg-zinc-300 dark:bg-zinc-600"
        />
        <div
          aria-hidden="true"
          className="mt-4 h-8 w-40 rounded bg-zinc-300 dark:bg-zinc-600"
        />
      </div>
    );
  }

  return (
    <section
      aria-label={`Saldo de ${owner}`}
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
    >
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Olá, <span data-testid="owner-name">{owner}</span>
      </p>
      <dl>
        <dt className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
          Saldo disponível
        </dt>
        <dd
          className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          data-testid="balance-value"
        >
          {formatBRLMoney(balance)}
        </dd>
      </dl>
    </section>
  );
}
