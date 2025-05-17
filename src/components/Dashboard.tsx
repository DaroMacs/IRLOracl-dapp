/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card } from "./Dashboard/components/Card/Card";
import ConnectWallet from "./ui/ConnectWallet";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/Sidebar";

export function Dashboard() {
  const { authenticated, ready, logout } = usePrivy();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (ready) {
      setIsLoading(false);
      if (!authenticated) {
        router.push("/");
      } else {
        // Set the flag when user successfully accesses dashboard
        sessionStorage.setItem("hasVisitedBefore", "true");
      }
    }
  }, [authenticated, ready, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      onClick: () => {
        sessionStorage.removeItem("hasVisitedBefore");
        logout();
      },
    },
  ];

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden bg-gray-100 md:flex-row  dark:bg-neutral-800",
        "h-[60vh]",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <DashboardContent />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="/aquachain.svg"
        className="h-16 w-16 shrink-0 rounded-full"
        alt="Logo"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        RealOracles
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <img
      src="/aquachain.svg"
      className="h-16 w-16 shrink-0 rounded-full"
      alt="Logo"
    />
  );
};

// Dummy dashboard component with content
const DashboardContent = () => {
  const { authenticated } = usePrivy();
  return (
    <div className="flex flex-1">
      <div className="flex w-full flex-1 flex-col gap-2  bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-black-100">
        <div className="flex justify-between items-center">
          <span
            className="text-4xl font-bold"
            style={{
              background: "linear-gradient(90deg, #446dcd, #4bb6d3, #6ef2cc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My devices
          </span>
          <ConnectWallet />
        </div>
        <p className="text-slate-200 pb-5">
          Control and manage your devices from here.
        </p>
        <div className="grid grid-cols-1  gap-4">
          {[...new Array(12)].map((i, idx) => (
            <div key={idx} className="w-full">
              <Card />
            </div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-1" + idx}
              className="h-full w-full  rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
