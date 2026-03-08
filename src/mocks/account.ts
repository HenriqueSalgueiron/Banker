import { Account } from "@/types/account";

export const mockAccount: Account = {
  id: "1",
  owner: "Henrique",
  balance: 4850.75,
  transactions: [
    {
      id: "t1",
      type: "deposit",
      amount: 5000,
      description: "Salário",
      date: "2026-03-01",
    },
    {
      id: "t2",
      type: "withdraw",
      amount: 120.5,
      description: "Supermercado",
      date: "2026-03-02",
    },
    {
      id: "t3",
      type: "withdraw",
      amount: 45,
      description: "Farmácia",
      date: "2026-03-03",
    },
    {
      id: "t4",
      type: "deposit",
      amount: 200,
      description: "Pix recebido",
      date: "2026-03-04",
    },
    {
      id: "t5",
      type: "withdraw",
      amount: 89.9,
      description: "Conta de luz",
      date: "2026-03-05",
    },
    {
      id: "t6",
      type: "withdraw",
      amount: 93.85,
      description: "Internet",
      date: "2026-03-06",
    },
  ],
};
