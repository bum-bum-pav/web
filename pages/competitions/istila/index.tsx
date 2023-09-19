import PageTag from "@/components/common/PageTag";
import SquareButton from "@/components/common/SquareButton";
import { TopNameTag } from "@/components/common/TopNameTag";
import React from "react";
import SnakeArena from "@/components/games/snake/SnakeArena";
import Image from "next/image";
import GameScoreBoard from "@/components/common/GameScoreBoard";
import InGameButtons from "@/components/common/InGameButtons";
import ChatArea from "@/components/common/ChatArea";
import { useState } from "react";
import LoadingAnimation from "@/components/common/LoadingAnimation";

type Props = {};

const page = (props: Props) => {
  const [chatShow, setChatShow] = useState(false);
  const [questionexist, setQuestionExist] = useState(false);

  return (
    <div>
      <PageTag tag="YARIŞMA / İSTİLA" />
      <TopNameTag nametag="İSTİLA" game={true} />
      <div className="h-[938px] flex flex-row justify-between relative">
        <div
          key={"left region "}
          className={
            chatShow
              ? "h-full w-[1233px] transition-width duration-300 ease-in-out"
              : "h-full w-[1920px] transition-width duration-300 ease-in-out"
          }
        >
          <GameScoreBoard />
          <InGameButtons />
          <div
            key={"chat toggle button"}
            className="inverse-hover right-0 top-[47%] mr-4 absolute z-10 object-contain transition-transform duration-500"
            onClick={() => setChatShow(!chatShow)}
          >
            <Image
              src="/denemeboomerang.svg"
              alt="chat toggle button"
              width={30}
              height={30}
              className={chatShow ? "-rotate-90 z-10" : "rotate-90 z-10"}
              //64% previously
              onClick={() => setChatShow(!chatShow)}
            />
          </div>
          <div
            key={"istila score boxes"}
            className="relative top-20 left-28 w-16"
          >
            {[...Array(4)].map((_, boxIndex) => (
              <div
                key={`${boxIndex} second`}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "transparent",
                  border: "1px solid rgb(13,13,13)",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              />
            ))}
            {[...Array(6)].map((_, boxIndex) => (
              <div
                key={`${boxIndex} second`}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "rgb(13,13,13)",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              />
            ))}
            
          </div>
          <div
            key={"loading"}
            className={
             questionexist
                ? "hidden absolute"
                : "absolute top-[50%] left-[30%]"
            }
          >
            <LoadingAnimation />
          </div>
        </div>
        <div
          className={
            chatShow
              ? " h-full w-[590px] right-0 absolute -z-1 transition-right duration-500 ease-in-out"
              : " h-full w-[590px] -right-[700px] absolute -z-1 transition-right duration-500 ease-in-out"
          }
        >
          <ChatArea />
        </div>
      </div>
    </div>
  );
};

export default page;
