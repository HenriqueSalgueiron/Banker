import { Transaction } from "./transaction";

export interface Account {
  id: string;
  owner: string;
  balance: number;
  transactions: Transaction[];
}
