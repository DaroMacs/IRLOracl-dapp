/* eslint-disable @next/next/no-img-element */
"use client";

import { supporters, technologies } from "@/data";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="marquee" className="py-20">
      <h1 className="heading pb-10">
        Backed by
        <span
          style={{
            background: "linear-gradient(90deg, #446dcd, #4bb6d3, #6ef2cc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {" "}
          amazing technologies
        </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="  rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={technologies}
            direction="left"
            speed="normal"
          />
        </div>

        <h1 className="heading py-10">
          <span
            style={{
              background: "linear-gradient(90deg, #446dcd, #4bb6d3, #6ef2cc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sponsors
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {supporters.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-auto h-14"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
