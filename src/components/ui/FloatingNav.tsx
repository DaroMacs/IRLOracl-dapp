/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ConnectWallet from "./ConnectWallet";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { ready, authenticated, user, logout, login } = usePrivy();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 py-2 items-center justify-center space-x-4",
          className,
        )}
        style={{
          backdropFilter: "blur(6px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.5)",
          borderRadius: "9999px",
        }}
      >
        <img src="/aquachain.png" alt="" className="h-12 w-12 shrink-0" />
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        {authenticated && (
          <Link
            href={"/dashboard"}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
            )}
          >
            {/* <span className="block sm:hidden">{icon}</span> */}
            <span className="hidden sm:block text-sm">Dashboard</span>
          </Link>
        )}
        <ConnectWallet />
      </motion.div>
    </AnimatePresence>
  );
};
