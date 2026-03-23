import { TransactionCard } from "@/components/TransactionCard/TransactionCard";
import { render, screen } from "@testing-library/react";

describe("TransactionCard component", () => {
  it("should display the correct deposit description, date and value", () => {
    render(
      <TransactionCard
        transaction={{
          id: "1",
          type: "deposit",
          amount: 1000,
          description: "Pix recebido",
          date: "2024-01-15",
        }}
      />,
    );
    expect(screen.getByText("Pix recebido")).toBeInTheDocument();
    expect(screen.getByText("15/01/2024")).toBeInTheDocument();
    expect(screen.getByText("+ R$ 1.000,00")).toBeInTheDocument();
  });

  it("should display the correct withdraw description, date and value", () => {
    render(
      <TransactionCard
        transaction={{
          id: "1",
          type: "withdraw",
          amount: 1000,
          description: "Uber",
          date: "2024-01-15",
        }}
      />,
    );
    expect(screen.getByText("Uber")).toBeInTheDocument();
    expect(screen.getByText("15/01/2024")).toBeInTheDocument();
    expect(screen.getByText("- R$ 1.000,00")).toBeInTheDocument();
  });
});
