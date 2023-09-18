"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/UI/ShadUI/navigation-menu";
import { cn } from "@/lib/utils";
import { experiences } from "@/static-data/images";
import { company, locations, utils } from "@/static-data/navigation";
import React from "react";

import NBgButtons from "../../Links/NBgLink";

export function DesktopNavLinks() {
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
          <NavigationMenuTrigger>
            <Link
              href="/experiences"
              className={
                navigationMenuTriggerStyle() +
                `${
                  pathname == "/experiences"
                    ? " text-brandDark dark:text-brandLight"
                    : ""
                }`
              }
              legacyBehavior
              prefetch={false}
            >
              Experiences
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {experiences.slice(0, 5).map((section) => (
                <ListItem
                  key={section.id}
                  title={section.experience}
                  href={`/experiences/${section.experience}`}
                >
                  {section.description}
                </ListItem>
              ))}
              <div className="flex items-center pl-3">
                <NBgButtons prompt="View all" href="/experiences" />
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link
              href="/locations"
              className={
                navigationMenuTriggerStyle() +
                `${
                  pathname == "/locations"
                    ? " text-brandDark dark:text-brandLight"
                    : ""
                }`
              }
              legacyBehavior
              prefetch={false}
            >
              Locations
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {locations.map((location) => (
                <ListItem
                  key={location.title}
                  title={location.title}
                  href={location.href}
                >
                  {location.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link
              href="/utilities"
              className={
                navigationMenuTriggerStyle() +
                `${
                  pathname == "/utilities"
                    ? " text-brandDark dark:text-brandLight"
                    : ""
                }`
              }
              legacyBehavior
              prefetch={false}
            >
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
          <NavigationMenuTrigger>
            <Link
              href="/company"
              className={
                navigationMenuTriggerStyle() +
                `${
                  pathname == "/company"
                    ? " text-brandDark dark:text-brandLight"
                    : ""
                }`
              }
              legacyBehavior
              prefetch={false}
            >
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-bold leading-none first-letter:uppercase">
            {title}
          </div>
          <p className="text-sm leading-snug line-clamp-3 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
