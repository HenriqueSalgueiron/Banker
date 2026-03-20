import { Dashboard } from "@/components/Dashboard";
import { getAccount } from "@/services/api";
import { Account } from "@/types/account";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("@/services/api", () => ({
  getAccount: jest.fn(),
}));

const mockGetAccount = getAccount as jest.MockedFunction<typeof getAccount>;

const accountData: Account = {
  id: "1",
  owner: "John Doe",
  balance: 1000,
  transactions: [
    {
      id: "t1",
      type: "deposit",
      amount: 500,
      description: "Salary",
      date: "2024-01-15",
    },
    {
      id: "t2",
      type: "withdraw",
      amount: 200,
      description: "Groceries",
      date: "2024-01-16",
    },
    {
      id: "t3",
      type: "deposit",
      amount: 300,
      description: "Freelance",
      date: "2024-01-17",
    },
  ],
};

describe("Dashboard", () => {
  it("should render dashboard with correct data", async () => {
    mockGetAccount.mockResolvedValue(accountData);
    render(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText("R$ 1.000,00")).toBeInTheDocument();
      expect(screen.getByText("R$ 500,00")).toBeInTheDocument();
      expect(screen.getByText("R$ 200,00")).toBeInTheDocument();
      expect(screen.getByText("R$ 300,00")).toBeInTheDocument();
    });
  });

  it("should only display error message returned from getAccount", async () => {
    mockGetAccount.mockRejectedValue(new Error("Failed to fetch"));
    render(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText("Failed to fetch")).toBeInTheDocument();
      expect(screen.queryByText("Saldo disponível")).not.toBeInTheDocument();
      expect(screen.queryByText("Extrato")).not.toBeInTheDocument();
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    });
  });

  it("should only display loading state", () => {
    mockGetAccount.mockImplementation(() => new Promise(() => {}));
    render(<Dashboard />);

    expect(screen.getByText("Carregando...")).toBeInTheDocument();
    expect(screen.queryByText("Saldo disponível")).not.toBeInTheDocument();
    expect(screen.queryByText("Extrato")).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });
});
