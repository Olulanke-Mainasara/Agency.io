import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/ShadUI/dropdown-menu";
import { auth } from "@/firebase/client.config";
import Profile from "@/public/Hero/profile.webp";
import { signOut } from "firebase/auth";
import { BaggageClaim, Heart, LogOut, User, Wallet } from "lucide-react";

export function ProfileOps() {
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative w-10 overflow-hidden rounded-full aspect-square">
          <Image
            src={Profile}
            fill
            placeholder="blur"
            priority
            alt="Profile picture"
            className="object-cover"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
