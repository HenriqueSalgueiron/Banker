export interface TransferRequest {
  to: string;
  amount: number;
  description: string;
}

type TransferStatus = "pending" | "completed" | "failed";

export interface TransferResponse {
  id: string;
  status: TransferStatus;
}
