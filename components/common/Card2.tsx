import Image from "next/image";
import React, { useEffect } from "react";
import SquareButton from "./SquareButton";
import Hexagon from "./Hexagon";
import Denemedrop from "../profile/denemedrop";
import WordShuffler from "./WordShuffler";

type Props = {};
const setProp = (el, prop, value) => el.style.setProperty(prop, value);




const Card2 = (props: Props) => {
  useEffect(() => {
    const card = document.querySelector(".card2");
    const just = document.querySelector(".just");

    const onMouseUpdate = (e) => {
      const cardRect = card.getBoundingClientRect();
      const width = cardRect.width;
      const height = cardRect.height;
      const XRel = e.clientX - cardRect.left;
      const YRel = e.clientY - cardRect.top;

      const YAngle = -(0.5 - XRel / width) * 30;
      const XAngle = (0.5 - YRel / height) * 30;

      setProp(card, "--dy", `${YAngle}deg`);
      setProp(card, "--dx", `${XAngle}deg`);
    };

    const resetProps = () => {
      card.style.setProperty("--dy", "0");
      card.style.setProperty("--dx", "0");
    };

    card.addEventListener("mousemove", onMouseUpdate, false);
    card.addEventListener("mouseenter", onMouseUpdate, false);
    card.addEventListener("mouseleave", resetProps, false);

    // Cleanup function
    return () => {
      // Check if card exists before removing listeners
      if (card) {
        card.removeEventListener("mousemove", onMouseUpdate, false);
        card.removeEventListener("mouseenter", onMouseUpdate, false);
        card.removeEventListener("mouseleave", resetProps, false);
      }
    };
  }, []);
  return (
    <div className=" absolute w-1/2 right-0 h-full flex justify-start items-center z-50 just floating-horizontal"style={{animationDelay:".6s"}}>
      <div className=" card2 bg-[#0D0D0D] rounded-sm relative overflow-visible flex justify-center items-center flex-col h-[370px] w-[650px] left-3  animate_content_card_2">
        <div className="card-frame-right z-50 animate_content_opening"></div>
        <div className="card-frame-left z-50 animate_content_opening"></div>
        <div key={"black dot1"} className="black-dot-1"></div>
        <div key={"black dot2"} className="black-dot-2"></div>
        <div key={"black dot3"} className="black-dot-3"></div>
        <Image
          src="/card/bottom-left.svg"
          alt="bottom left"
          width={47}
          height={72}
          className={"absolute -bottom-3 -right-3 z-50 scale-x-[-100%]"}
          onClick={() => setCdadadhatShow(!chatShow)}
        />
        <Image
          src="/card/top-left.svg"
          alt="top left"
          width={77}
          height={72}
          className={"absolute -top-11 -right-8 z-50 scale-x-[-100%]"}
          onClick={() => setChatadadadShow(!chatShow)}
        />
        <Image
          src="/card/bottom-right.svg"
          alt="bottom right"
          width={77}
          height={77}
          className={"absolute -bottom-11 -left-8 z-50 scale-x-[-100%]"}
          onClick={() => setCdadadhatShow(!chatShow)}
        />
        <Image
          src="/card/top-right.svg"
          alt="top right"
          width={65}
          height={72.33}
          className={"absolute -top-3 -left-3 z-50 scale-x-[-100%]"}
          onClick={() => setChatadadadShow(!chatShow)}
        />
        <div
          key={"card content"}
          className=" flex justify-center items-center w-full h-full relative text-white inverse-hover"
        >
          <div
            key={"altıgen holder"}
            className="flex justify-center items-center absolute h-[500px] w-[900px] invert scale-75 ml-8 z-[99]"
          >
            <Hexagon
              iskele={0}
              index={0}
              x={0}
              y={0}
              key={`card`}
              text={WordShuffler(2)}
              textsize={50}
            />
          </div>
          <div className="flex flex-row justify-between items-start absolute h-1/2 w-full scale-x-[80%] scale-y-75 top-0 ml-6">
            <Denemedrop
              input={1}
              alignment="left"
              border={null}
              text="sıralama"
              value={WordShuffler(4)}
            />
            
            <Denemedrop
              input={1}
              alignment="right"
              border={null}
              text="toplam soru"
              value={WordShuffler(5)}
            />
          </div>
          <div className="flex flex-row justify-between items-end absolute h-1/2 w-full scale-x-[80%] scale-y-75 bottom-0 ml-6">
            <Denemedrop
              input={-1}
              alignment="left"
              border={null}
              text="toplam puan"
              value={WordShuffler(5)}
            />
            <Denemedrop
              input={-1}
              alignment="right"
              border={null}
              text="toplam süre"
              value={WordShuffler(4)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
