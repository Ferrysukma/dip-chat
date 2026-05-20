import instance from "@/src/lib/axios/instance";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    body.sessionId = Math.random().toString(36).substring(2, 20);
    body.user = "User";
    body.rrn = "";

    const response = await instance.post("/chat/v1/message", body);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server" },
      { status: 500 },
    );
  }
}
