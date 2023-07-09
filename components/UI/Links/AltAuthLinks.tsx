import { Icons } from "@/components/Icons";
import React from "react";

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
          <span className="px-2 bg-white dark:bg-background text-muted-foreground">
            Or
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          type="button"
          disabled={isLoading || isGoogleLoading || isAppleLoading}
          onClick={() => handleGoogleSignIn()}
          className="w-full text-black border border-black dark:text-black dark:border-white dark:bg-white"
        >
          {isGoogleLoading ? (
            <Icons.spinner className="w-5 h-5 animate-spin" />
          ) : (
            <Icons.google className="w-4 h-4" />
          )}
          Google
        </Button>

        <Button
          variant="outline"
          type="button"
          disabled={isLoading || isGoogleLoading || isAppleLoading}
          onClick={() => handleAppleSignIn()}
          className="w-full text-black border border-black dark:border-white dark:bg-white dark:text-black"
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
