"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/firebase/client.config";
import DefaultProfilePicture from "@/public/Hero/profile.jpg";
import { signOut } from "firebase/auth";

import { authContext } from "@/components/Providers/Providers";
import { Button } from "@/components/UI/ShadUI/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/UI/ShadUI/card";

export default function ProfilePage() {
  const user = React.useContext(authContext);

  const handleSignOut = () => {
    signOut(auth);
  };

  if (user === undefined) {
    return (
      <main className="mx-auto flex max-w-[1440px] justify-center px-6 pt-24 xl:px-8">
        <div className="h-40 w-full max-w-lg animate-pulse rounded-xl bg-gray-400" />
      </main>
    );
  }

  if (!user) {
    return (
      <main className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 pt-24 text-center xl:px-8">
        <h1 className="text-4xl dark:text-white md:text-5xl">
          You&apos;re signed out
        </h1>
        <p className="opacity-70">Sign in to view your profile.</p>
        <Button asChild>
          <Link href="/login?previous=/profile">Sign in</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="mx-auto flex max-w-[1440px] justify-center px-6 pt-24 xl:px-8">
      <Card className="w-full max-w-lg">
        <CardHeader className="items-center gap-4 text-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full">
            <Image
              src={user.photoURL || DefaultProfilePicture}
              fill
              placeholder={user.photoURL ? undefined : "blur"}
              alt="Profile picture"
              className="object-cover"
            />
          </div>
          <CardTitle className="text-3xl">
            {user.displayName || "Traveler"}
          </CardTitle>
          <p className="opacity-70">{user.email}</p>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button variant="outline" onClick={handleSignOut}>
            Sign out
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
