export type TransactionType = "deposit" | "withdraw";

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  date: string; // formato ISO: "2024-01-15"
}
