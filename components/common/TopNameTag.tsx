import React from "react";

export const TopNameTag = ({ nametag, game }) => {
  return (
    <div
      className={`h-[360px] border-b-[1px] rgb(13,13,13) text-[#0D0D0D] flex justify-end items-end relative`}
    >
      <span
        className={` mr-[12%] xl:mr-[345px] font-bold text-5xl pb-2 inverse-hover relative ${
          game ? "game-head" : "profile-head"
        }`}
      >
        {nametag}
      </span>
    </div>
  );
};
