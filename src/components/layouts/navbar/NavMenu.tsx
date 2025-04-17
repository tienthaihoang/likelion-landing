"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import NavMenuContentCard from "./NavMenuContentCard";

interface NavMenuProps {
  courses: {
    title: string;
    slug: string;
    excerpt: string;
  }[];
}

export default function NavMenu({ courses }: NavMenuProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              pathname.startsWith("/courses")
                ? "bg-accent text-accent-foreground"
                : ""
            }
          >
            Khoá học
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavMenuContentCard>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none focus:shadow-md bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1689050859/courses/courses-thumbnail_yviy8j.png')] bg-cover aspect-[1/1]"
                    href="/"
                  ></Link>
                </NavigationMenuLink>
              </li>

              <div className="grid grid-cols-2">
                {courses.map((course) => (
                  <ListItem
                    title={course.title}
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                  >
                    {course.excerpt}
                  </ListItem>
                ))}
              </div>
            </NavMenuContentCard>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              pathname.startsWith("/blogs")
                ? "bg-accent text-accent-foreground"
                : ""
            )}
            asChild
          >
            <Link href="/blogs">Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              pathname == "/about" ? "bg-accent text-accent-foreground" : ""
            )}
            asChild
          >
            <Link href="/about">Về chúng tôi</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              pathname == "/contact" ? "bg-accent text-accent-foreground" : ""
            )}
            asChild
          >
            <Link href="/contact">Liên hệ</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              pathname == "/faq" ? "bg-accent text-accent-foreground" : ""
            )}
            asChild
          >
            <Link href="/faq">FAQs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href || "/"}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
