import { render, screen } from "@testing-library/react";
import { BalanceCard } from "@/components/BalanceCard/BalanceCard";

describe("BalanceCard component", () => {
  it("should display the correct name and balance value", () => {
    render(<BalanceCard balance={1000} owner="John Doe" />);

    expect(
      screen.getByRole("region", { name: "Saldo de John Doe" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Saldo disponível")).toBeInTheDocument();
    expect(screen.getByText("R$ 1.000,00")).toBeInTheDocument();
  });

  it("should render the loading state", () => {
    render(<BalanceCard isLoading={true} balance={0} owner="" />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("should render the error state", () => {
    render(
      <BalanceCard
        balance={1000}
        owner="John Doe"
        error="Não possui permissão"
      />,
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Não possui permissão")).toBeInTheDocument();
  });
});
