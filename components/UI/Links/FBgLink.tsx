import React from "react";
import Link from "next/link";

import { Button } from "../ShadUI/button";

const FBgLink = () => {
  return (
    <Button size={"sm"} className="rounded-full text-lg xl:px-8" asChild>
      <Link href={"/build-your-trip"}>Build your trip</Link>
    </Button>
  );
};

export default FBgLink;
