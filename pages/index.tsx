import { useEffect, useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Head from "next/head";
import { AuthContext } from "../src/contexts/AuthContext";
import React from "react";

type Event = "connect" | "disconnect";

interface Phantom {
  on: (event: Event, callback: () => void) => void;
  connect: () => Promise<void>;
}

const Index: NextPage = () => {
  const [phantom, setPhantom] = useState<Phantom | null>(null);
  const { setIsLoggedIn } = React.useContext(AuthContext);
  useEffect(() => {
    if ("solana" in window) {
      setPhantom(window["solana"]);
    }
  }, []);

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    phantom?.on("connect", () => {
      setConnected(true);
      setIsLoggedIn(true);
    });

    phantom?.on("disconnect", () => {
      setConnected(false);
      setIsLoggedIn(false);
    });
  }, [phantom]);

  const connectHandler = () => {
    phantom?.connect();
  };

  if (phantom) {
    if (connected) {
      return (
        <>
          <Head>
            <title>Super Team</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 px-10">
              <div className="flex justify-center space-x-6 my-10 p-10">
                <Image
                className="rounded-3xl"
                src="/mainPage.png"
                alt="MainPage"
                height={600}
                width={1050}        
                />
              </div>
          </div>
        </>
      );
    }

    return (
      <div
        className="flex justify-center self-center items-center flex-col bg-gradient-to-bl from-yellow-300 to-yellow-50"
        style={{ height: "calc(100vh)" }}
      >
        <Image
          src={"/superTeam.jpg"}
          height={200}
          width={200}
          className={"rounded-lg"}
        />
        <button
          onClick={connectHandler}
          className="rounded-md px-6 py-3 my-6 bg-amber-400 font-bold cursor-pointer hover:bg-amber-600 
        hover:shadow-lg transition durtion-200 ease-out"
        >
          Connect to Phantom
        </button>
      </div>
    );
  }

  return (
    <div
      className="flex justify-center self-center items-center flex-col bg-gradient-to-bl from-yellow-300 to-yellow-50"
      style={{ height: "calc(100vh)" }}
    >
      <Image
        src={"/superTeam.jpg"}
        height={200}
        width={200}
        className={"rounded-lg"}
      />
      <a
        href="https://phantom.app/"
        target="_blank"
        className="rounded-md px-6 py-3 my-6 bg-amber-400 font-bold cursor-pointer hover:bg-amber-600 
        hover:shadow-lg transition durtion-200 ease-out"
      >
        Get Phantom
      </a>
    </div>
  );
};

export default Index;
