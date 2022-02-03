import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CardContainer from "../src/Common/CardContainer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Super Team</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div
        className="flex justify-center self-center items-center flex-col"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <Image
          src={"/superTeam.jpg"}
          height={200}
          width={200}
          className={"rounded-lg"}
        />
        <button className="px-6 py-3 my-6 bg-amber-400 font-bold">
          Connect Wallet
        </button>
      </div> */}
      {
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="w-full text-center pb-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-gray-400 font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w-full grid grid-cols-1  gap-6">
            <CardContainer />
          </div>
        </section>
      }
    </div>
  );
};

export default Home;
