"use client";

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { MenuIcon, X } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useState } from "react";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

function Navbar({ children }: { children: React.ReactNode }) {
  const [openState, setOpenState] = useState<boolean>(false);
  const openMenu = () => {
    setOpenState((prev) => !prev);
  };
  const router = useRouter();
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className="relative shadow-lg min-w-full min-h-[2rem] p-2 px-8 backdrop-blur-xl
          backdrop-filter bg-transparent flex justify-between"
        >
          <div className="flex items-center justify-center gap-4">
            <Image
              src={"/key.svg"}
              className="max-w-[2rem] cursor-pointer"
              alt=""
              width={1920}
              height={1080}
            />
            <h2
              onClick={() => router.push("/")}
              className="font-semibold text-slate-700 cursor-pointer"
            >
              AIcreate
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <ul className="hidden md:flex space-x-8 text-sm font-semibold text-slate-500 cursor-pointer">
              {/* <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Platform</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li> */}
            </ul>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <SignUpButton mode="modal">
              <button
                className={cn(
                  "group rounded-full px-6 border border-black/5 bg-neutral-100 flex items-center justify-center py-1 text-sm font-semibold text-slate-600 transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 hover:text-slate-900 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText>✨ Sign Up</AnimatedShinyText>
                <ArrowRightIcon className="ml-1 inline-block size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </button>
            </SignUpButton>
            <UserButton afterSignOutUrl="/" />
          </div>

          {openState ? (
            <X
              onClick={openMenu}
              className="max-w-8 transition-transform transform-gpu animate-in fade-in-30 duration-500 max-h-8 text-gray-500 md:hidden cursor-pointer"
            />
          ) : (
            <MenuIcon
              onClick={openMenu}
              className="max-w-8 transition-transform transform-gpu animate-in fade-in-30 duration-500 max-h-8 text-gray-500 md:hidden cursor-pointer"
            />
          )}
        </div>
        {openState && (
          <div className="z-10 bg-gradient-to-bl from-orange-100 to-red-200 transition-transform animate-in duration-500 justify-center -translate-x-0 pt-4 left-auto right-0 fade-in-10 transform-gpu max-w-[16rem] absolute min-h-screen flex">
            <ul className="flex md:hidden space-x-8 text-sm font-semibold flex-col gap-10 px-12 items-center min-w-full text-slate-500 cursor-pointer">
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
              <li>
                <SignInButton mode="modal">
                  <button className="px-4 py-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              </li>
              <li>
                <SignUpButton mode="modal">
                  <button
                    className={cn(
                      "group rounded-full border border-black/5 bg-neutral-100 px-4 py-1 text-sm font-semibold text-slate-600 transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 hover:text-slate-900 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                  >
                    Sign Up
                    <ArrowRightIcon className="ml-1 inline-block size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </button>
                </SignUpButton>
              </li>
              <li>Product</li>
              <li>Platform</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
      <div>{children}</div>
    </>
  );
}

export default Navbar;
