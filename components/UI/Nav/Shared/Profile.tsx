import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/firebase/client.config";
import Profile from "@/public/Hero/profile.jpg";
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
          <button className="relative w-10 overflow-hidden rounded-full outline-none aspect-square">
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
                  className="object-cover rounded-full"
                />
                <p>{user?.displayName}</p>
              </div>
              <span className="grid place-items-center xl:hidden">
                <Link href={"/cart"} prefetch={false}>
                  <ShoppingCart className="w-6 h-6" />
                </Link>
              </span>
            </DrawerTitle>
          </DrawerHeader>
          <hr className="border-gray-400" />
          <div className="p-4 space-y-4">
            <Link
              href={"/profile"}
              prefetch={false}
              className="flex items-center gap-2"
            >
              <User className="w-6 h-6 mr-2" />
              <span>Profile</span>
            </Link>
            <Link
              href={"/wallet"}
              prefetch={false}
              className="flex items-center gap-2"
            >
              <Wallet className="w-6 h-6 mr-2" />
              <span>Wallet</span>
            </Link>
            <Link
              href={"/booking-and-trips"}
              prefetch={false}
              className="flex items-center gap-2"
            >
              <BaggageClaim className="w-6 h-6 mr-2" />
              <span>Booking and Trips</span>
            </Link>
            <Link
              href={"/saved"}
              prefetch={false}
              className="flex items-center gap-2"
            >
              <Heart className="w-6 h-6 mr-2" />
              <span>Saved</span>
            </Link>
            <hr className="border-gray-400" />
            <button
              onClick={handleSignOut}
              className="flex items-center w-full gap-2 pb-3"
            >
              <LogOut className="w-6 h-6 mr-2" />
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
        <button className="relative w-10 overflow-hidden rounded-full outline-none aspect-square">
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
            <User className="w-4 h-4 mr-2" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Wallet className="w-4 h-4 mr-2" />
            <span>Wallet</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BaggageClaim className="w-4 h-4 mr-2" />
            <span>Booking and Trips</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heart className="w-4 h-4 mr-2" />
            <span>Saved</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
