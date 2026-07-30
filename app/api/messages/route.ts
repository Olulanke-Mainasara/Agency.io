import { NextRequest, NextResponse } from "next/server";

import { createMessage, messageInput } from "@/lib/db/messages";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = messageInput.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const message = await createMessage(parsed.data);

  return NextResponse.json(message, { status: 201 });
}
