import React from "react";
import { FaRegCopyright } from "react-icons/fa";
export default function License() {
  return (
    <div className="bg-[#50350a] text-white pt-[10px] pb-[10px]">
      <span className="flex flex-row w-full items-center gap-2 justify-center">
        <FaRegCopyright></FaRegCopyright>
        Copyright: Long Hải - HLoey
      </span>
    </div>
  );
}
