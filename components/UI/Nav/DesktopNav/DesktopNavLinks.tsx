"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { staticExperiencesData } from "@/static-data/images";
import { company, places, utils } from "@/static-data/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/UI/ShadUI/navigation-menu";

import NBgLink from "../../Links/NBgLink";

export function DesktopNavLinks({}: {}) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href={`/?splashed=true`}
            className={
              navigationMenuTriggerStyle() +
              `${pathname == "/" ? " text-brandDark dark:text-brandLight" : ""}`
            }
            prefetch={false}
          >
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              pathname == "/experiences"
                ? " text-brandDark dark:text-brandLight"
                : ""
            }
          >
            <Link href="/experiences" prefetch={false}>
              Experiences
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {staticExperiencesData.slice(0, 5).map((experience) => (
                <ListItem
                  key={experience._id}
                  title={experience.name}
                  href={`/experiences/${experience.name}`}
                >
                  {experience.description}
                </ListItem>
              ))}
              <div className="flex items-center pl-3">
                <NBgLink
                  prompt="View all"
                  href="/experiences"
                  extraStyles="dark:text-black font-bold"
                />
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              pathname == "/locations"
                ? " text-brandDark dark:text-brandLight"
                : ""
            }
          >
            <Link href="/places" prefetch={false}>
              Places
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {places.map((place) => (
                <ListItem
                  key={place.title}
                  title={place.title}
                  href={place.href}
                >
                  {place.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              pathname == "/utilities"
                ? " text-brandDark dark:text-brandLight"
                : ""
            }
          >
            <Link href="/utilities" prefetch={false}>
              Utilities
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {utils.map((util) => (
                <ListItem key={util.title} title={util.title} href={util.href}>
                  {util.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              pathname == "/company"
                ? " text-brandDark dark:text-brandLight"
                : ""
            }
          >
            <Link href="/company" prefetch={false}>
              Company
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {company.map((section) => (
                <ListItem
                  key={section.title}
                  title={section.title}
                  href={section.href}
                >
                  {section.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100",
            className
          )}
          {...props}
        >
          <div className="text-base font-bold leading-none first-letter:uppercase">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
