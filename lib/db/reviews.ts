import { and, desc, eq, isNull } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/lib/db";
import { reviews } from "@/lib/db/schema";

export const reviewInput = z.object({
  firebaseUid: z.string().min(1),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  title: z.string().min(1).max(150),
  description: z.string().min(1).max(2000),
  rating: z.number().int().min(1).max(5),
  establishmentId: z.string().min(1).optional(),
});

export type ReviewInput = z.infer<typeof reviewInput>;

export async function createReview(input: ReviewInput) {
  const [review] = await db.insert(reviews).values(input).returning();
  return review;
}

export async function getApprovedReviews(establishmentId?: string) {
  return db
    .select()
    .from(reviews)
    .where(
      and(
        eq(reviews.isApproved, true),
        establishmentId
          ? eq(reviews.establishmentId, establishmentId)
          : isNull(reviews.establishmentId)
      )
    )
    .orderBy(desc(reviews.createdAt));
}
