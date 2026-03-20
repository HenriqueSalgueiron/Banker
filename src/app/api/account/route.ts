import { NextResponse } from "next/server";
import { mockAccount } from "@/mock/account";

export async function GET() {
  return NextResponse.json(mockAccount);
}
