"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  ArrowRight,
  CalendarPlusIcon,
  CloudDrizzle,
  DownloadCloud,
  PlaneIcon,
  Server,
  User,
} from "lucide-react";
import TypewriterTitle from "../ui/TypewriterTitle";
import SparklesText from "../magicui/sparkles-text";
import { RainbowButton } from "../magicui/rainbow-button";
import {
  ArrowRightIcon,
  BookmarkFilledIcon,
  ChevronDownIcon,
  PersonIcon,
  PlayIcon,
  PlusIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import AvatarCircles from "../magicui/avatar-circles";
import Image from "next/image";
import Globe from "../magicui/globe";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import NumberTicker from "../magicui/number-ticker";
import FAQSection from "./Faq";
import WritingToolComponent from "./Keyboard";
import Footer from "./Footer";
import { useRouter } from "next/navigation";

const designData = [
  {
    title: "Maximizes best AI models",
    description:
      "We use top-notch models across the board, so you can access the latest and the best",
    image: <BookmarkFilledIcon className="w-8 h-8 text-white" />,
    color: "yellow",
  },
  {
    title: "Customize your own notes",
    description:
      "No generic AI here. We personalize AI outputs to your brand&apos;s voice and style",
    image: <CloudDrizzle className="w-8 h-8 text-white" />,
    color: "orange",
  },
  {
    title: "Keeps your data private",
    description:
      "With dedicated AI for your brand, create confidently without data leakage",
    image: <PlaneIcon className="w-8 h-8 text-white" />,
    color: "red",
  },
];

const Main = () => {
  const avatarUrls = [
    "https://img.freepik.com/premium-photo/unique-apple-avatar-generative-ai_431161-17393.jpg",
    "https://ecdn.teacherspayteachers.com/thumbuserbig/Teach-Love-Create-Aka-The-Sped-Doctor-1706495573/1414784.jpg",
    "https://borealos.com/dynamic/img/3-como-crear-memoji.jpg",
  ];

  const router = useRouter();

  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-50 mt-12 px-8 md:px-12 lg:px-16 to-orange-50">
      <section className="flex flex-col md:flex-row md:pt-16 md:w-1/2 xl:px-20 pt-12 min-h-full min-w-full">
        <div className="flex flex-col gap-8 sm:w-full ">
          <div className="flex flex-col gap-2 text-start lg:text-8xl">
            <SparklesText text="Create" className="lg:text-7xl xl:text-8xl" />
            <SparklesText text="What You" className="lg:text-7xl xl:text-8xl" />
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 to-orange-600">
              Are Imagine
            </h1>
          </div>
          <p className="text-slate-400 text-base max-w-sm sm:text-sm font-light">
            The generative AI app to supercharge personalized content creation
            for work on creative industry
          </p>
          <div className="flex flex-col md:flex-row mr-auto gap-2 items-center justify-center">
            <RainbowButton onClick={() => router.push("/dashboard")}>
              Get Started{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </RainbowButton>
            <button
              onClick={() =>
                router.push("https://www.youtube.com/watch?v=nrNN-r_LAr8")
              }
              className="border font-bold border-black px-4 hover:bg-slate-50  py-1.5 items-center gap-2 rounded-2xl flex justify-between"
            >
              <PlayIcon className="text-white rounded-full w-8  h-8 p-2 bg-black" />
              <span>Watch A Demo</span>
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mr-auto">
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            <div className="flex flex-col gap-1 text-left ml-4 max-w-xs">
              <p className="text-sm font-bold text-black">Customer Review</p>
              <p className="text-xs font-normal text-slate-500">
                1K+ Customer around the world and they fell satisfied and helped
              </p>
            </div>
          </div>
        </div>
        <div className="relative sm:w-full md:w-1/2 h-[400px] md:h-[400px]  mt-8 md:mt-0">
          <div
            className="absolute inset-0 bg-[url('/wiki1.png')] bg-cover bg-center bg-no-repeat 
            rounded-3xl 
            before:content-[''] before:absolute before:inset-0 
            before:bg-gradient-to-br before:from-yellow-100/60 before:to-red-300/60
            before:backdrop-blur-sm before:rounded-3xl
            shadow-xl"
          >
            <div className="absolute top-[-1%] left-[-6%] w-20 h-20 rounded-3xl p-6 shadow-lg  bg-white transform hover:scale-105 transition-transform cursor-pointer">
              <Image
                src="/docs.png"
                className="p-2"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="absolute top-[25%] left-[-5%] w-14 h-14  shadow-lg rounded-3xl bg-white transform hover:scale-105 transition-transform cursor-pointer">
              <Image
                src="/gmail.png"
                alt=""
                layout="fill"
                objectFit="contain"
                className="p-2"
              />
            </div>

            <div className="absolute top-[15%] right-[75%] w-16 h-16 p-4 shadow-lg rounded-3xl bg-white transform hover:scale-105 transition-transform cursor-pointer">
              <Image
                src="/pdf.png"
                className="p-2"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="absolute bottom-[15%] left-[-10%] right-[10%] min-h-[1.4rem] py-4 bg-gradient-to-tr from-white to-transparent rounded-3xl shadow-xl p-2 flex flex-row items-center transform hover:scale-105 transition-transform cursor-pointer">
              <Image
                src="/vercel.svg"
                alt=""
                width={20}
                height={20}
                className="mr-2"
              />
              <h3 className="font-bold text-xs sm:text-sm">Generate a</h3>
              <p className="text-orange-400 gap-1 font-normal bg-slate-50 border-dashed border-slate-300 border-2 px-2 py-1 rounded-xl text-center flex flex-row items-center justify-center text-xs sm:text-sm ml-2">
                <DownloadCloud className="w-4 h-4" /> Blog Post
                <ChevronDownIcon className="text-slate-400 font-bold w-3 h-3" />
              </p>
              <p className="font-semibold text-xs sm:text-sm bg-clip-text text-transparent bg-gradient-to-tr from-gray-100 to-gray-500 font-mono ml-2">
                For Free
              </p>
            </div>

            <Image
              src="/bulb.png"
              alt=""
              width={300}
              height={300}
              className="absolute bottom-[0%] right-[8%] w-[70%] max-w-[250px] transform hover:scale-105 transition-transform cursor-pointer "
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-8 md:px-16 py-12 md:py-20">
        <h3 className="font-bold text-xl sm:text-2xl md:text-2xl text-black text-center md:text-left md:max-w-xs">
          Trusted By Many Companies
        </h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 items-center">
          <Image
            className="w-24 h-8 sm:w-32 sm:h-10 md:w-40 md:h-16 object-contain"
            src="/superlative.svg"
            alt="Superlative"
            width={160}
            height={64}
          />
          <Image
            className="w-20 h-8 sm:w-24 sm:h-10 md:w-32 md:h-12 object-contain grayscale"
            src="/point.svg"
            alt="Point"
            width={128}
            height={48}
          />
          <Image
            className="w-24 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12 object-contain"
            src="/sony.png"
            alt="Sony"
            width={160}
            height={48}
          />
          <Image
            className="w-24 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12 object-contain"
            src="/forbes.png"
            alt="Forbes"
            width={160}
            height={48}
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="flex flex-col text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 to-red-600">
            The AI Platform
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
            Designed For Enterprises
          </h2>
        </div>
        <div className="text-gray-400 text-sm md:text-base font-normal mt-6 md:mt-8 mb-8 md:mb-12 text-center">
          <p>10x your content at scale, tailored to your</p>
          <p>brand, and privacy-safety</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {designData.map((data, id) => (
            <div
              key={id}
              className="min-h-[15rem] w-full max-w-[23rem] mx-auto mb-8 p-4 transition-transform transform-gpu hover:scale-105 duration-300 flex flex-col items-start bg-white rounded-2xl shadow-lg"
            >
              <div
                className={`p-2 rounded-2xl shadow-lg mb-6 ${
                  data.color === "yellow"
                    ? "bg-yellow-300"
                    : data.color === "orange"
                    ? "bg-orange-300"
                    : "bg-red-300"
                }`}
              >
                {data.image}
              </div>
              <h3 className="text-black font-bold mt-2 text-lg">
                {data.title}
              </h3>
              <p className="text-gray-400 mt-2 text-sm">{data.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4 lg:gap-8 md:flex-row items-center justify-center ">
        <div className="relative flex h-full w-full max-w-[32rem] bg-gradient-to-bl from-yellow-100 to-red-100 items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Globe
          </span>
          <Globe className="top-28" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        <div className="p-2 md:p-4 lg:p-6 mb-28">
          <div className="flex flex-col items-center justify-start">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Personalize To Your
            </h1>
            <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 to-orange-700 transition-colors animate-in fade-in-30 duration-300">
              Style And Audiences
            </h1>
          </div>
          <p className="text-sm text-gray-400 max-w-xs ml-2 font-light mb-12 text-start mt-8">
            Choose from the various available options for stylizing and
            autocomplete text. Harness the power of AI Image Generation
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="gap-4 flex max-w-sm font-semibold flex-row justify-center items-center">
              <CalendarPlusIcon className="w-12 h-12 text-orange-400" />
              Grammar Checker
            </div>
            <div className="gap-4 font-semibold flex flex-row justify-center items-center">
              <PersonIcon className="w-12 h-12 text-orange-400" />
              Target Audience
            </div>
          </div>
          <div
            className={cn(
              "group rounded-full mt-8 hidden md:block border  bg-neutral-900 text-base text-white transition-all py-2  max-w-[14rem] ease-in hover:cursor-pointer hover:bg-neutral-800  border-white/5  dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400 max-w-xs">
              <span
                onClick={() => router.push("/dashboard")}
                className="text-gray-100"
              >
                ✨ Learn More
              </span>

              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out text-white group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-28 mb-12 items-center justify-center">
        <div className="flex flex-col items-center justify-center text-left gap-2">
          <h1 className="text-5xl text-transparent bg-clip-text text-start bg-gradient-to-bl from-yellow-300 to-orange-700 font-bold">
            Adapts So That
          </h1>
          <h1 className="font-bold text-4xl text-black">
            You Can Stay In The Flow
          </h1>
        </div>
        <p className="max-w-sm text-gray-400 text-base md:text-lg font-light sm:text-sm">
          Since we were present we have had a good impact on the world by
          producing a satisfying number
        </p>
      </section>
      <section className="bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-neutral-800 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-baseline">
                  <div className="flex mt-2 mr-2">
                    <Server className="w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12 text-yellow-300" />
                  </div>
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    <NumberTicker className="text-white" value={23} />
                  </span>
                  <PlusIcon className="w-4 h-4 md:w-8 md:h-8 text-orange-400 ml-1" />
                </div>

                <p className="mt-2 text-sm text-gray-400">Services</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl lg:text-7xl md:text-6xl font-bold text-white">
                    <NumberTicker value={4.4} className="text-white" />
                  </span>
                  <span className="text-sm font-bold text-orange-400 md:text-xl lg:text-2xl xl:text-4xl ml-1">
                    /5
                  </span>
                </div>
                <div className="flex mt-2">
                  <StarFilledIcon className="w-5 h-5 text-yellow-300" />
                  <StarFilledIcon className="w-5 h-5 text-yellow-300" />
                  <StarFilledIcon className="w-5 h-5 text-yellow-300" />
                  <StarFilledIcon className="w-5 h-5 text-yellow-300" />
                  <StarFilledIcon className="w-5 h-5 text-yellow-300" />
                </div>
                <p className="mt-2 text-sm text-gray-400">User Review</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-baseline">
                  <div className="flex mt-2 mr-2">
                    <User className="w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12 text-yellow-300" />
                  </div>

                  <span className="text-4xl sm:text-5xl lg:text-7xl md:text-6xl font-bold text-white">
                    <NumberTicker value={17} className="text-white" />
                  </span>
                  <span className="text-sm font-bold text-orange-400 md:text-xl lg:text-2xl ml-1 xl:text-4xl">
                    K
                  </span>
                  <PlusIcon className="w-4 h-4 text-orange-400 ml-1 md:w-8 md:h-8" />
                </div>
                <p className="mt-2 text-sm text-gray-400">Users of The App</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-18 flex flex-col items-center justify-center">
        <h1 className="bg-clip-text text-transparent font-bold text-2xl md:text-4xl lg:text-5xl bg-gradient-to-br from-yellow-300 to-orange-600">
          The AI Platform
        </h1>
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
          Help You To Get The Target
        </h1>
        <p className="text-gray-400 text-xs md:text-sm mt-4">
          Create 10x more personalized content faster
        </p>
      </section>
      <FAQSection />
      <section className="flex items-center justify-center mt-14 mb-12">
        <h1 className="text-2xl md:text-5xl lg:tex-6xl xl:text-8xl font-bold">
          Ready To{" "}
          <span className="text-2xl md:text-5xl lg:tex-6xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 to-orange-600">
            Get Started ?
          </span>
        </h1>
      </section>
      <WritingToolComponent />
      <Footer />
    </div>
  );
};

export default Main;
