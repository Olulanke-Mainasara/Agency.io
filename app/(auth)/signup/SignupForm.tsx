"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/client.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";

import { Icons } from "@/components/Icons";
import { authContext } from "@/components/Providers/Providers";
import AltAuthLinks from "@/components/UI/Links/AltAuthLinks";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";

export function SignupForm({ previous }: { previous: string }) {
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
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setError(false);
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: fname + " " + lname,
      });

      await sendEmailVerification(user);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      if (error instanceof Error) {
        switch (error.message) {
          case "Firebase: Error (auth/email-already-exists).":
            setErrorMessage(
              "An account already exists with this email address"
            );
            break;
          case "Firebase: Error (auth/invalid-email).":
            setErrorMessage("Invalid email address provided");
            break;
          case "Firebase: Error (auth/invalid-password	).":
            setErrorMessage("Invalid password provided");
            break;

          default:
            setErrorMessage("Sign up error occurred, please retry");
            break;
        }
      } else {
        setErrorMessage("Sign up error occurred, please contact support");
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
      previous === "/" || !previous
        ? router.push(`/?splashed=true`)
        : router.push(previous);
    }
  }, [previous, router, user]);

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="flex gap-2">
            <div className="grid gap-2">
              <Label htmlFor="fname">First name</Label>
              <Input
                id="fname"
                placeholder="e.g John"
                type="text"
                autoCapitalize="none"
                autoComplete="given-name"
                autoCorrect="off"
                disabled={isLoading || isGoogleLoading || isAppleLoading}
                required
                minLength={3}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="lname">Last name</Label>
              <Input
                id="lname"
                placeholder="e.g Smith"
                type="text"
                autoCapitalize="none"
                autoComplete="family-name"
                autoCorrect="off"
                disabled={isLoading || isGoogleLoading || isAppleLoading}
                required
                minLength={3}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>

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
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading || isGoogleLoading || isAppleLoading}
              required
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button disabled={isLoading || isGoogleLoading || isAppleLoading}>
            {isLoading && <Icons.spinner className="w-5 h-5 animate-spin" />}

            {error ? "Retry" : "Sign up"}
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
