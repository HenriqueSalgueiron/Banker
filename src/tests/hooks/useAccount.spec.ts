import { useAccount } from "@/hooks/useAccount";
import { getAccount } from "@/services/api";
import { renderHook, waitFor } from "@testing-library/react";

jest.mock("@/services/api", () => ({
  getAccount: jest.fn(),
}));

//fiz desse jeito pra forçar tipagem
const mockGetAccount = getAccount as jest.MockedFunction<typeof getAccount>;

describe("useAccount", () => {
  it("should fetch account data successfully", async () => {
    mockGetAccount.mockResolvedValue({
      id: "1",
      owner: "John Doe",
      balance: 1000,
      transactions: [],
    });
    // um hook não pode ser chamado fora de um componente React. renderHook cria um componente temporário, executa o hook dentro dele e retorna um objeto.
    const { result } = renderHook(() => useAccount());

    // waitFor faz retentativas da asserção até que ela seja verdadeira ou atinja timeout. isso é necessário para aguardar até que o useEffect do hook seja executado e atualize o estado.
    await waitFor(() => {
      expect(result.current.account).toEqual({
        id: "1",
        owner: "John Doe",
        balance: 1000,
        transactions: [],
      });
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });

  it("should return error", async () => {
    mockGetAccount.mockRejectedValue(new Error("Failed to fetch"));
    const { result } = renderHook(() => useAccount());

    await waitFor(() => {
      expect(result.current.account).toBeNull();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toEqual(new Error("Failed to fetch"));
    });
  });

  it("should be loading", async () => {
    mockGetAccount.mockReturnValue(new Promise(() => {}));
    const { result } = renderHook(() => useAccount());

    expect(result.current.account).toBeNull();
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBeNull();
  });
});
