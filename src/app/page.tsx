"use client";

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { authenticated } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (authenticated && typeof window !== "undefined") {
      const hasRedirected = sessionStorage.getItem("hasRedirected");

      if (!hasRedirected) {
        sessionStorage.setItem("hasRedirected", "true");
        router.push("/dashboard");
      }
    }
  }, [authenticated]);

  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#" },
            { name: "About", link: "#about" },
            { name: "Contact", link: "#contact" },
          ]}
        />
        <Hero />
        <Grid />
        <Marquee />
        <Footer />
      </div>
    </main>
  );
}
