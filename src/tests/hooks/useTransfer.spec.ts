import { useTransfer } from "@/hooks/useTransfer";
import { createTransfer } from "@/services/api";
import { renderHook, act, waitFor } from "@testing-library/react";

jest.mock("@/services/api", () => ({
  createTransfer: jest.fn(),
}));

const mockCreateTransfer = createTransfer as jest.MockedFunction<
  typeof createTransfer
>;

describe("useTransfer", () => {
  it("should create a transfer successfully", async () => {
    mockCreateTransfer.mockResolvedValue({
      id: "1",
      status: "completed",
    });
    const { result } = renderHook(() => useTransfer());

    await act(() => {
      return result.current.transfer({
        to: "1",
        amount: 100,
        description: "Test transfer",
      });
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toEqual({
      id: "1",
      status: "completed",
    });
  });

  it("should return an error", async () => {
    mockCreateTransfer.mockRejectedValue(new Error("Failed to transfer"));
    const { result } = renderHook(() => useTransfer());

    await act(() => {
      return result.current.transfer({
        to: "1",
        amount: 100,
        description: "Test transfer",
      });
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(new Error("Failed to transfer"));
  });

  it("should be loading", async () => {
    mockCreateTransfer.mockReturnValue(new Promise(() => {}));
    const { result } = renderHook(() => useTransfer());

    act(() => {
      result.current.transfer({
        to: "1",
        amount: 100,
        description: "Test transfer",
      });
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
  });
});
