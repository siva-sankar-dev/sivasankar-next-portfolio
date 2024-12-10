import { cn } from "@/utils/cn";
import ShimmerButton from "./ShimmerButton";
import { tech, techList, techList2 } from "@/data";

import { div } from "three/examples/jsm/nodes/Nodes.js";
import { GlobeDemo } from "./GridGlobe";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Flutter", "Kotlin", "Swift"];
  const rightLists = ["React.js", "NextJS", "MongoDB"];
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCopy = () => {
    const text = "sivasankar.sivakripa123@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}

          <div
            className={
              id == 1
                ? ` text-transparent font-sans text-2xl lg:text-5xl max-w-96 font-bold z-10 bg-gradient-to-r from-purple via-blue-600 to-indigo-400 bg-clip-text`
                : "font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 "
            }
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo></GlobeDemo>}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <ShimmerButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
          {/* Tech stack list div */}
          {id === 1 && (
            <div className="flex-col">
              {/* Tech stack lists */}
              <div className="grid grid-cols-6 lg:grid-cols-4 md:grid-cols-4 gap-8">
                {tech.map(({ id, img, title }) => (
                  <div key={id} className="flex flex-col items-center">
                    <img
                      src={img}
                      alt={title}
                      className="w-10 h-10 lg:w-24 lg:h-24 mb-2"
                    />
                    <p className="text-center text-xs md:text-lg">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
