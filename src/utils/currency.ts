function FormatMoney(
  value: number | bigint | Intl.StringNumericLiteral,
  locale: string,
  currency: string,
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  })
    .format(value)
    .replace(/\u00A0/g, " ");
}

export function formatBRLMoney(
  value: number | bigint | Intl.StringNumericLiteral,
): string {
  return FormatMoney(value, "pt-BR", "BRL");
}

// export function formatUSDMoney(value: number | bigint | Intl.StringNumericLiteral): string {
//   return FormatMoney(value, "en-US", "USD");
// }

// export function formatPYGMoney(value: number | bigint | Intl.StringNumericLiteral): string {
//   return FormatMoney(value, "es-PY", "PYG");
// }
