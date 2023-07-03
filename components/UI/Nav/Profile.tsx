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
import Profile from "@/public/Hero/profile.webp";
import {
  Heart,
  LogOut,
  User,
  BaggageClaim,
  Wallet,
} from "lucide-react";

export function ProfileOps() {
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
        <DropdownMenuItem>
          <LogOut className="w-4 h-4 mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
