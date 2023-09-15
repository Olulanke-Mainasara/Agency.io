"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { Icons } from "@/components/Icons";
import { authContext } from "@/components/Providers/Providers";
import AltAuthLinks from "@/components/UI/Links/AltAuthLinks";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";
import { auth } from "@/firebase/client.config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import React from "react";

export function LoginForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const [isAppleLoading, setIsAppleLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [googleError, setGoogleError] = React.useState<boolean>(false);
  const [appleError, setAppleError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const user = React.useContext(authContext);
  const router = useRouter();
  const previous = useSearchParams().get("previous");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setError(false);
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      previous === "profile"
        ? router.push("/profile")
        : router.push(`/?splashed=true&visited=true`);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      if (error instanceof Error) {
        switch (error.message) {
          case "Firebase: Error (auth/wrong-password).":
            setErrorMessage("Invalid username or Password");
            break;
          case "Firebase: Error (auth/user-not-found).":
            setErrorMessage("No user exists with this email address");
            break;

          default:
            setErrorMessage("Sign in error occurred, please retry");
            break;
        }
      } else {
        setErrorMessage("Sign in error occurred, please contact support");
      }
    }
  }

  const handleGoogleSignIn = async () => {
    setError(false);
    setGoogleError(false);
    setAppleError(false);
    setIsGoogleLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      auth.languageCode = "it";
      await signInWithRedirect(auth, provider);
    } catch (error) {
      setIsGoogleLoading(false);
      setGoogleError(true);
      setErrorMessage("Google sign in error occurred, please retry.");
    }
  };

  const handleAppleSignIn = async () => {
    setError(false);
    setGoogleError(false);
    setAppleError(false);
    setIsAppleLoading(true);

    try {
      setTimeout(() => {
        setIsAppleLoading(false);
        setAppleError(true);
        setErrorMessage("Apple sign in error occurred, please retry.");
      }, 3000);
    } catch (error) {}
  };

  React.useEffect(() => {
    if (user) {
      setIsLoading(true);
      previous === "profile"
        ? router.push("/profile")
        : router.push(`/?splashed=true&visited=true`);
    }
  }, [previous, router, user]);

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
              disabled={isLoading || isGoogleLoading || isAppleLoading}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password" className="flex justify-between">
              Password
              <Link
                href={"/recover"}
                className="text-center underline transition-opacity hover:opacity-70"
              >
                Forgot Password?
              </Link>{" "}
            </Label>
            <Input
              id="password"
              placeholder="Your password"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading || isGoogleLoading || isAppleLoading}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button disabled={isLoading || isGoogleLoading || isAppleLoading}>
            {isLoading && (
              <Icons.spinner className="w-5 h-5 animate-spin" />
            )}

            {error ? "Retry" : "Login"}
          </Button>

          {(error || googleError || appleError) && (
            <div className="text-center text-red-500">{errorMessage}</div>
          )}
        </div>
      </form>

      <AltAuthLinks
        isLoading={isLoading}
        isGoogleLoading={isGoogleLoading}
        isAppleLoading={isAppleLoading}
        handleGoogleSignIn={handleGoogleSignIn}
        handleAppleSignIn={handleAppleSignIn}
      />
    </div>
  );
}
