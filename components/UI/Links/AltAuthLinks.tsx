import React from "react";

import { Icons } from "@/components/Icons";

import { Button } from "../ShadUI/button";

const AltAuthLinks = ({
  isLoading,
  isGoogleLoading,
  isAppleLoading,
  handleGoogleSignIn,
  handleAppleSignIn,
}: {
  isLoading: boolean;
  isGoogleLoading: boolean;
  isAppleLoading: boolean;
  handleGoogleSignIn: Function;
  handleAppleSignIn: Function;
}) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-black dark:border-white" />
        </div>
        <div className="relative flex justify-center uppercase text-md">
          <span className="px-2 bg-white text-muted-foreground dark:bg-background">
            Or
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Button
          variant="plain"
          type="button"
          disabled={isLoading || isGoogleLoading || isAppleLoading}
          onClick={() => handleGoogleSignIn()}
          className="w-full text-md"
        >
          {isGoogleLoading ? (
            <Icons.spinner className="w-5 h-5 animate-spin" />
          ) : (
            <Icons.google className="w-4 h-4" />
          )}
          Google
        </Button>

        <Button
          variant="plain"
          type="button"
          disabled={isLoading || isGoogleLoading || isAppleLoading}
          onClick={() => handleAppleSignIn()}
          className="w-full text-md"
        >
          {isAppleLoading ? (
            <Icons.spinner className="w-5 h-5 animate-spin" />
          ) : (
            <Icons.apple className="w-4 h-4" />
          )}
          Apple
        </Button>
      </div>
    </>
  );
};

export default AltAuthLinks;
