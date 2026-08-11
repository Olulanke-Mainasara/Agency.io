"use client";

import React from "react";
import { auth } from "@/firebase/client.config";
import { sendPasswordResetEmail } from "firebase/auth";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";

export function RecoverForm({ previous }: { previous: string }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [sent, setSent] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setError(false);
    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (error) {
      setError(true);
      if (error instanceof Error) {
        switch (error.message) {
          case "Firebase: Error (auth/user-not-found).":
            setErrorMessage("No user exists with this email address");
            break;
          case "Firebase: Error (auth/invalid-email).":
            setErrorMessage("Invalid email address provided");
            break;
          default:
            setErrorMessage("Couldn't send reset email, please retry");
            break;
        }
      } else {
        setErrorMessage("Couldn't send reset email, please contact support");
      }
    } finally {
      setIsLoading(false);
    }
  }

  if (sent) {
    return (
      <p className="text-center">
        Check <span className="font-medium">{email}</span> for a link to
        reset your password.
      </p>
    );
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button disabled={isLoading}>
            {isLoading && <Icons.spinner className="h-5 w-5 animate-spin" />}
            {error ? "Retry" : "Reset"}
          </Button>

          {error && (
            <div className="text-center text-red-500">{errorMessage}</div>
          )}
        </div>
      </form>
    </div>
  );
}
