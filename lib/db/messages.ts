import { z } from "zod";

import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";

export const messageInput = z.object({
  type: z.enum(["contact", "career"]),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
});

export type MessageInput = z.infer<typeof messageInput>;

export async function createMessage(input: MessageInput) {
  const [message] = await db.insert(messages).values(input).returning();
  return message;
}
