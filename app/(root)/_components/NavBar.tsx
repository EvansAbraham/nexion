"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import { Logo } from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavBar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        `z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6`,
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end flex gap-x-2 justify-between items-center w-full">
        {isLoading && (<Loader className="animate-spin" />)}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <UserButton/>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
