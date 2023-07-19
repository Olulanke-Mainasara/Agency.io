import { Button } from "@/components/UI/ShadUI/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/ShadUI/card";
import { cn } from "@/lib/utils";
import { notifications } from "@/static-data/services";
import { Check } from "lucide-react";

type CardProps = React.ComponentProps<typeof Card>;

export function NotificationCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[350px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex w-2 h-2 rounded-full translate-y-1 bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="w-4 h-4 mr-2" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
