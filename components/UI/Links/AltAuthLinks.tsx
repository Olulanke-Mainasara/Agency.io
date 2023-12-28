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
        <div className="text-md relative flex justify-center uppercase">
          <span className="text-muted-foreground bg-white px-2 dark:bg-background">
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
          className="text-md w-full"
        >
          {isGoogleLoading ? (
            <Icons.spinner className="h-5 w-5 animate-spin" />
          ) : (
            <Icons.google className="h-4 w-4" />
          )}
          Google
        </Button>

        <Button
          variant="plain"
          type="button"
          disabled={isLoading || isGoogleLoading || isAppleLoading}
          onClick={() => handleAppleSignIn()}
          className="text-md w-full"
        >
          {isAppleLoading ? (
            <Icons.spinner className="h-5 w-5 animate-spin" />
          ) : (
            <Icons.apple className="h-4 w-4" />
          )}
          Apple
        </Button>
      </div>
    </>
  );
};

export default AltAuthLinks;
