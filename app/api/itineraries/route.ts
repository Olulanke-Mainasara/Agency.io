import { NextRequest, NextResponse } from "next/server";

import {
  createManualItinerary,
  manualItineraryInput,
} from "@/lib/db/itineraries";

export async function POST(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isLoggedIn");

  if (!isLoggedIn || isLoggedIn.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = manualItineraryInput.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const itinerary = await createManualItinerary(parsed.data);

  return NextResponse.json(itinerary, { status: 201 });
}
