import {
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const reviews = pgTable("reviews", {
  id: uuid("id").defaultRandom().primaryKey(),
  establishmentId: text("establishment_id").notNull(),
  firebaseUid: text("firebase_uid").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  rating: integer("rating").notNull(),
  isApproved: boolean("is_approved").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const itineraries = pgTable("itineraries", {
  id: uuid("id").defaultRandom().primaryKey(),
  firebaseUid: text("firebase_uid").notNull(),
  destination: text("destination").notNull(),
  currency: text("currency").notNull(),
  budget: integer("budget"),
  totalEstimatedCost: integer("total_estimated_cost"),
  days: jsonb("days").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
