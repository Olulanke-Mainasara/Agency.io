"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";
import { cn } from "@/lib/utils";
import * as React from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="e.g johnsmith@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Your password"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button className="font-normal text-md" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="w-5 h-5 mr-2 animate-spin" />
            )}
            Login
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-black dark:border-white" />
        </div>
        <div className="relative flex justify-center uppercase text-md">
          <span className="px-2 bg-white dark:bg-background text-muted-foreground">
            Or
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          className="w-full text-black border-black dark:bg-white"
        >
          <Icons.google className="w-4 h-4 mr-2" /> Google
        </Button>

        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          className="w-full text-black border-black dark:bg-white"
        >
          <Icons.apple className="w-4 h-4 mr-2" /> Apple
        </Button>
      </div>
    </div>
  );
}
