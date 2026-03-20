import { NextResponse } from "next/server";
import { TransferResponse } from "@/types/transfer";

export async function POST(request: Request) {
  const body = await request.json();

  const response: TransferResponse = {
    id: `t${Date.now()}`,
    status: "completed",
  };

  return NextResponse.json(response);
}
