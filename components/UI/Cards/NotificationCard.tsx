"use client";

import React from "react";
import { notifications } from "@/static-data/services";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/ShadUI/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/ShadUI/card";

type CardProps = React.ComponentProps<typeof Card>;

export function NotificationCard({ className, ...props }: CardProps) {
  const [isRead, setIsRead] = React.useState(false);

  return (
    <Card className={cn("md:w-[350px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          {isRead ? "You're all caught up!" : "You have 3 unread messages."}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification) => (
            <div
              key={notification.title}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              {!isRead && (
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              )}
              <div
                className={`space-y-1 ${isRead ? "col-span-2 opacity-60" : ""}`}
              >
                <p className="text-lg font-bold leading-none md:text-base">
                  {notification.title}
                </p>
                <p className="md:text-sm">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={isRead}
          onClick={() => setIsRead(true)}
        >
          <Check className="h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
