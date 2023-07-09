"use client";

import { useRouter } from "next/navigation";

import { Icons } from "@/components/Icons";
import AltAuthLinks from "@/components/UI/Links/AltAuthLinks";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";
import { auth } from "@/firebase/client.config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import * as React from "react";

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
  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      setIsLoading(false);
      setError(true);
      setErrorMessage("Sign in error occurred, please retry.");
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      setError(false);
      setGoogleError(false);
      setAppleError(false);
      setIsGoogleLoading(true);
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
    try {
      setError(false);
      setGoogleError(false);
      setAppleError(false);
      setIsAppleLoading(true);

      setTimeout(() => {
        setIsAppleLoading(false);
        setAppleError(true);
        setErrorMessage("Apple sign in error occurred, please retry.");
      }, 3000);
    } catch (error) {}
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoading(true);
        router.push("/");
      }
    });
  }, [router]);

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
            <Label htmlFor="password">Password</Label>
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
              <Icons.spinner className="w-5 h-5 mr-2 animate-spin" />
            )}

            {error ? "Retry" : "Login"}
          </Button>

          {(error || googleError || appleError) && (
            <div className="text-center">{errorMessage}</div>
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
