import { useState } from "react";
import { createTransfer } from "@/services/api";
import { TransferRequest, TransferResponse } from "@/types/transfer";

export function useTransfer() {
  const [data, setData] = useState<TransferResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function transfer(request: TransferRequest) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await createTransfer(request);
      setData(response);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, error, transfer };
}
