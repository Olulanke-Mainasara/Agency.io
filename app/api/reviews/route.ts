import { NextRequest, NextResponse } from "next/server";

import { createReview, reviewInput } from "@/lib/db/reviews";

export async function POST(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isLoggedIn");

  if (!isLoggedIn || isLoggedIn.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = reviewInput.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const review = await createReview(parsed.data);

  return NextResponse.json(review, { status: 201 });
}
