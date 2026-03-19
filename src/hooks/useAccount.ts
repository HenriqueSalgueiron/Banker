import { useState, useEffect } from "react";
import { getAccount } from "@/services/api";
import { Account } from "@/types/account";

export function useAccount() {
  const [data, setData] = useState<Account | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getAccount()
      .then((account) => setData(account))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
}
