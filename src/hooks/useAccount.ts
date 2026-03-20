import { useState, useEffect } from "react";
import { getAccount } from "@/services/api";
import { Account } from "@/types/account";

export function useAccount() {
  const [account, setAccount] = useState<Account | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getAccount()
      .then((account) => setAccount(account))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { account, isLoading, error };
}
