import { formatBRLMoney } from "@/utils/currency";

describe("currency util functions", () => {
  it("should receive a value and return a BRL formatted string", () => {
    const numberValue = 1234.56;
    const bigintValue = BigInt(123456);
    const stringNumericLiteralValue = "1234.56";

    expect(formatBRLMoney(numberValue)).toBe("R$ 1.234,56");
    expect(formatBRLMoney(bigintValue)).toBe("R$ 123.456,00");
    expect(formatBRLMoney(stringNumericLiteralValue)).toBe("R$ 1.234,56");
    expect(formatBRLMoney(0)).toBe("R$ 0,00");
    expect(formatBRLMoney(-1234.56)).toBe("-R$ 1.234,56");
  });
});
