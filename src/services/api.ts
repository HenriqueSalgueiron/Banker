import { Account } from "@/types/account";
import { TransferRequest, TransferResponse } from "@/types/transfer";

const API_BASE = "/api";

export async function getAccount(): Promise<Account> {
  const response = await fetch(`${API_BASE}/account`);

  if (!response.ok) {
    throw new Error("Erro ao buscar conta");
  }

  return response.json();
}

export async function createTransfer(
  data: TransferRequest,
): Promise<TransferResponse> {
  const response = await fetch(`${API_BASE}/transfer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao realizar transferência");
  }

  return response.json();
}
