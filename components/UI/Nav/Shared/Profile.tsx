import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/firebase/client.config";
import Profile from "@/public/Hero/profile.webp";
import { signOut } from "firebase/auth";
import {
  BaggageClaim,
  Heart,
  LogOut,
  ShoppingCart,
  User,
  Wallet,
} from "lucide-react";

import useMedia from "@/hooks/useMedia";
import { authContext } from "@/components/Providers/Providers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/ShadUI/dropdown-menu";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ShadUI/drawer";

export function ProfileOps() {
  const user = React.useContext(authContext);
  const isMobile = useMedia("(max-width: 767px)");

  const handleSignOut = () => {
    signOut(auth);
  };

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <button className="relative aspect-square w-10 overflow-hidden rounded-full outline-none">
            <Image
              src={Profile}
              width={96}
              height={96}
              placeholder="blur"
              priority
              alt="Profile picture"
              className="object-cover"
            />
          </button>
        </DrawerTrigger>
        <DrawerContent className="text-lg text-black">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={Profile}
                  width={50}
                  height={50}
                  placeholder="blur"
                  priority
                  alt="Profile picture"
                  className="rounded-full object-cover"
                />
                <p>{user?.displayName}</p>
              </div>
              <span className="grid place-items-center xl:hidden">
                <Link href={"#"}>
                  <ShoppingCart className="h-6 w-6" />
                </Link>
              </span>
            </DrawerTitle>
          </DrawerHeader>
          <hr className="border-gray-400" />
          <div className="space-y-4 p-4">
            <Link href={"/profile"} className="flex items-center gap-2">
              <User className="mr-2 h-6 w-6" />
              <span>Profile</span>
            </Link>
            <Link href={"/wallet"} className="flex items-center gap-2">
              <Wallet className="mr-2 h-6 w-6" />
              <span>Wallet</span>
            </Link>
            <Link href={"/booking"} className="flex items-center gap-2">
              <BaggageClaim className="mr-2 h-6 w-6" />
              <span>Booking and Trips</span>
            </Link>
            <Link href={"/saved"} className="flex items-center gap-2">
              <Heart className="mr-2 h-6 w-6" />
              <span>Saved</span>
            </Link>
            <hr className="border-gray-400" />
            <button onClick={handleSignOut} className="flex items-center gap-2">
              <LogOut className="mr-2 h-6 w-6" />
              <span>Sign out</span>
            </button>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative aspect-square w-10 overflow-hidden rounded-full outline-none">
          <Image
            src={Profile}
            width={96}
            height={96}
            placeholder="blur"
            priority
            alt="Profile picture"
            className="object-cover"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Wallet className="mr-2 h-4 w-4" />
            <span>Wallet</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BaggageClaim className="mr-2 h-4 w-4" />
            <span>Booking and Trips</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heart className="mr-2 h-4 w-4" />
            <span>Saved</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
