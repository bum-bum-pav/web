import Image from "next/image";
import React from "react";
import Denemedrop from "../profile/denemedrop";
import Hexagon from "../common/Hexagon";

type Props = {};

const PopupVerText = ({ topx, topy, width, height, children }) => {
  return (
    <div
      className=" absolute bg-[#0D0D0D] rounded-sm min-w-fit min-h-fit overflow-visible flex justify-center items-center flex-col animate_content_closing floating-horizontal z-50 px-20 py-16"
      style={{
        position: "absolute",
        animationDelay: `${0.5 * Math.random()}s`,
        animationIterationCount: 1,
        left: topx ? `${topx}px` : "",
        top: topy ? `${topy}px` : "",
        width: width ? `${width}px` : "",
        height: height ? `${height}px` : "",
      }}
    >
      <div key={"outer design shapes"}>
        <div className="card-frame-right "></div>
        <div className="card-frame-left"></div>
        <div key={"black dot1"} className="black-dot-1"></div>
        <div key={"black dot2"} className="black-dot-2"></div>
        <div key={"black dot3"} className="black-dot-3"></div>
        <Image
          src="/card/bottom-left.svg"
          alt="bottom left"
          width={47}
          height={72}
          className={"absolute -bottom-3 -left-3"}
        />
        <Image
          src="/card/top-left.svg"
          alt="top left"
          width={77}
          height={72}
          className={"absolute -top-11 -left-8"}
        />
        <Image
          src="/card/bottom-right.svg"
          alt="bottom right"
          width={77}
          height={77}
          className={"absolute -bottom-11 -right-8"}
        />
        <Image
          src="/card/top-right.svg"
          alt="top right"
          width={65}
          height={72.33}
          className={"absolute -top-3 -right-3"}
        />
      </div>

      <div
        key={"card content"}
        className=" flex justify-center items-center w-full h-full relative text-white inverse-hover"
      >
        {children}
      </div>
    </div>
  );
};

export default PopupVerText;