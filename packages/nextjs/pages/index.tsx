import React, { useEffect, useState } from "react";
import Link from "next/link";
import EventTracker from "../components/EventTracker";
import tailwindConfig from "../tailwind.config";
import animations from "./Animations.module.css";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import TypingEffect from "~~/components/TypingEffect";

// Update the path accordingly

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center bg-primary flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">
              <TypingEffect text="Welcome to" />
            </span>
            <span className="block text-4xl font-bold">
              <TypingEffect text="Token Trekkers" />
            </span>
            <br></br>
          </h1>
          <p className="text-center text-lg">
            <TypingEffect text="Trekking around web3 ecosystems 🦒🦓 lvling up minds in crypto economic design 👾" />
          </p>
          <p className="text-center text-lg">
            <TypingEffect text="Our mission is to educate web3 builders 🛠️⚡ around crypto economic design and systems 👩‍🎨👨‍🎨 through workshops, tutorials, and more! 🤌" />
          </p>
          <div>
            <br></br>
            <br></br>
            <h1 className="text-center mb-8">
              <span className="block text-2xl font-bold">Upcoming Conferences</span>
            </h1>
            <br></br>
            <EventTracker />
          </div>
          <p className="text-center text-lg">㋡ Coming to a conference near you! Stay tuned ㋡</p>
        </div>

        <div className={`flex-grow bg-primary-content w-full mt-16 px-8 py-12`}>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-primary px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-primary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-primary px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-primary" />
              <p>
                Experiment with{" "}
                <Link href="/example-ui" passHref className="link">
                  Example UI
                </Link>{" "}
                to build your own UI.
              </p>
            </div>
            <div className="flex flex-col bg-primary px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-primary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
