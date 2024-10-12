import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";

const KeyboardKey = ({ letter }) => (
  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-lg shadow-md flex items-center justify-center text-xs text-gray-500">
    {letter}
  </div>
);

const WritingToolComponent = () => {
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 overflow-hidden">
      <div className="bg-gradient-to-r from-orange-400 to-orange-300  rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="text-white mb-20 sm:mb-24 max-w-md">
          <p className="text-sm mb-4">
            Revolutionary tool that will transform your writing experience and
            bring your creative vision to life. With Us, your words will flow
            effortlessly.
          </p>
          <div
            className={cn(
              "group rounded-full hidden md:block border border-black/5 bg-neutral-100 max-w-[16rem]  mr-auto text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Ask Some Question</span>

              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <div className="absolute -bottom-10 left-6 right-6 bg-white rounded-t-2xl p-4 shadow-inner">
          <div className="grid grid-cols-10 gap-1 sm:gap-2 mb-2">
            {keys.slice(0, 10).map((key, index) => (
              <KeyboardKey key={index} letter={key} />
            ))}
          </div>
          <div className="grid grid-cols-9 gap-1 sm:gap-2 mb-2 ml-4">
            {keys.slice(10, 19).map((key, index) => (
              <KeyboardKey key={index + 10} letter={key} />
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2 ml-12">
            {keys.slice(19).map((key, index) => (
              <KeyboardKey key={index + 19} letter={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingToolComponent;
