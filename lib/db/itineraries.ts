import { z } from "zod";

import { db } from "@/lib/db";
import { itineraries } from "@/lib/db/schema";

export const manualItineraryInput = z.object({
  firebaseUid: z.string().min(1),
  tripName: z.string().min(1).max(150),
  destination: z.string().min(1).max(150),
  dateFrom: z.coerce.date().nullable(),
  dateTo: z.coerce.date().nullable(),
  adults: z.number().int().min(1),
  children: z.number().int().min(0),
  rooms: z.number().int().min(1),
});

export type ManualItineraryInput = z.infer<typeof manualItineraryInput>;

export async function createManualItinerary(input: ManualItineraryInput) {
  const [itinerary] = await db
    .insert(itineraries)
    .values({ ...input, source: "manual" })
    .returning();
  return itinerary;
}
