CREATE TABLE "messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "itineraries" ALTER COLUMN "currency" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "itineraries" ALTER COLUMN "days" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "itineraries" ADD COLUMN "source" text NOT NULL;--> statement-breakpoint
ALTER TABLE "itineraries" ADD COLUMN "trip_name" text;--> statement-breakpoint
ALTER TABLE "itineraries" ADD COLUMN "date_from" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "itineraries" ADD COLUMN "date_to" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "itineraries" ADD COLUMN "adults" integer;--> statement-breakpoint
ALTER TABLE "itineraries" ADD COLUMN "children" integer;--> statement-breakpoint
ALTER TABLE "itineraries" ADD COLUMN "rooms" integer;