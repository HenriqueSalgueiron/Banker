import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TransactionList } from "@/components/TransactionList/TransactionList";

describe("TransactionList component", () => {
  it("should display a transaction list", () => {
    render(
      <TransactionList
        transactions={[
          {
            id: "1",
            type: "deposit",
            amount: 1000,
            description: "Pix recebido",
            date: "2024-01-15",
          },
          {
            id: "2",
            type: "withdraw",
            amount: 50,
            description: "Uber",
            date: "2024-01-16",
          },
        ]}
      />,
    );

    expect(screen.getByText("Pix recebido")).toBeInTheDocument();
    expect(screen.getByText("Uber")).toBeInTheDocument();
  });

  it("should display a filtered transaction list", async () => {
    const user = userEvent.setup();
    render(
      <TransactionList
        transactions={[
          {
            id: "1",
            type: "deposit",
            amount: 1000,
            description: "Pix recebido",
            date: "2024-01-15",
          },
          {
            id: "2",
            type: "withdraw",
            amount: 50,
            description: "Uber",
            date: "2024-01-16",
          },
        ]}
      />,
    );

    const input = screen.getByLabelText("Buscar transação");
    await user.type(input, "pix");

    expect(screen.getByText("Pix recebido")).toBeInTheDocument();
    expect(screen.queryByText("Uber")).not.toBeInTheDocument();
  });

  it("should display empty state for empty list", () => {
    render(<TransactionList transactions={[]} />);

    expect(
      screen.getByText("Nenhuma transação encontrada."),
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should display empty state for empty search results", async () => {
    const user = userEvent.setup();
    render(
      <TransactionList
        transactions={[
          {
            id: "1",
            type: "deposit",
            amount: 1000,
            description: "Pix recebido",
            date: "2024-01-15",
          },
          {
            id: "2",
            type: "withdraw",
            amount: 50,
            description: "Uber",
            date: "2024-01-16",
          },
        ]}
      />,
    );

    const input = screen.getByLabelText("Buscar transação");
    await user.type(input, "non existent transaction");

    expect(
      screen.getByText("Nenhuma transação encontrada."),
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeEnabled();
  });

  it("should display error message", () => {
    render(
      <TransactionList
        transactions={[]}
        error="Failed to load transactions. Please try again."
      />,
    );

    expect(
      screen.getByText("Failed to load transactions. Please try again."),
    ).toBeInTheDocument();
  });

  it("should display loading state", () => {
    render(<TransactionList transactions={[]} isLoading={true} />);

    expect(screen.getByTestId("loading-state")).toBeInTheDocument();
  });
});
