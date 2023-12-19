"use client";

import React from "react";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";

export function RecoverForm({ previous }: { previous: string }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="grid gap-6">
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

          <Button disabled={isLoading}>
            {isLoading && <Icons.spinner className="w-5 h-5 animate-spin" />}
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}
