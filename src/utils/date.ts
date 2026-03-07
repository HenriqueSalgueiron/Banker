import {
  addDays,
  differenceInYears,
  format,
  isSaturday,
  isSunday,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateExtension(date: Date) {
  if (isNaN(date.getTime())) return "";

  return format(date, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
}

export function formatStringDateToBR(date: string) {
  if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) return "";

  return date.split("T")[0].split("-").reverse().join("/");
}

export function adjustToBusinessDay(date: Date): Date {
  if (isNaN(date.getTime())) return date;

  if (isSaturday(date)) {
    return addDays(date, 2);
  }

  if (isSunday(date)) {
    return addDays(date, 1);
  }

  return date;
}
