import {
  adjustToBusinessDay,
  formatDateExtension,
  formatStringDateToBR,
} from "@/utils/date";

describe("date util functions", () => {
  describe("formatDateExtension()", () => {
    it("should format date in extended pt-BR format", () => {
      const date = new Date(2024, 0, 1); // January 1, 2024
      expect(formatDateExtension(date)).toBe("1 de janeiro de 2024");
    });

    it("should return empty string for invalid date", () => {
      const date = new Date("");
      expect(formatDateExtension(date)).toBe("");
    });
  });

  describe("formatStringDateToBR()", () => {
    it("should format international date string in pt-BR date string", () => {
      const dateString = "2024-01-01";
      expect(formatStringDateToBR(dateString)).toBe("01/01/2024");
    });

    it("should return empty string for invalid date string", () => {
      const invalidDateString = "invalid-date";
      expect(formatStringDateToBR(invalidDateString)).toBe("");
    });
  });

  describe("adjustToBusinessDay()", () => {
    it("should adjust Saturday to next Monday", () => {
      const initialDate = new Date(2026, 2, 7); // March 7, 2026 (Saturday)

      const adjustedDate = adjustToBusinessDay(initialDate);
      expect(adjustedDate.getDate()).toBe(9); // Should be March 9, 2026 (Monday)
    });

    it("should adjust Sunday to next Monday", () => {
      const initialDate = new Date(2026, 2, 8); // March 8, 2026 (Sunday)

      const adjustedDate = adjustToBusinessDay(initialDate);
      expect(adjustedDate.getDate()).toBe(9); // Should be March 9, 2026 (Monday)
    });

    it("should return the same date when it's a business day", () => {
      const initialDate = new Date(2026, 2, 9); // March 9, 2026 (Monday)

      const adjustedDate = adjustToBusinessDay(initialDate);
      expect(adjustedDate).toEqual(initialDate);
    });

    it("should return the same date for invalid date", () => {
      const invalidDate = new Date("");
      const adjustedDate = adjustToBusinessDay(invalidDate);
      expect(adjustedDate).toEqual(invalidDate);
    });
  });
});
