import React from "react";
export default function ProductStorage() {
  return (
    <div className="normal-case mt-[15px] md:mt-[6%]">
      <div className="">
        <h4 className="font-semibold text-[22px]">Storage</h4>
        <p className="text-[18px] italic text-balance md:text-[18px]">
          Different baked goods require different storage. Storing your baked
          goods the right way will ensure a great taste.
        </p>
        <span className="text-[18px] md:text-[18px]">
          <b className="font-semibold text-balance">Storage</b>
          <p className="italic">
            Keep in a dry area at room temperature, away from heat. Do not put
            our baked goods in the fridge as they will dry out.
          </p>
        </span>
        <span className="text-[18px] md:text-[18px]">
          <b className="font-semibold text-balance ">Enjoy</b>
          <p className="italic">
            Eat within a day or at most the next day. You can heat up the
            croissant, cheese tart, paté chaud, egg tart in the oven for a few
            minutes before enjoying it. Do not microwaves croissants as they
            will get softs.
          </p>
        </span>
      </div>
    </div>
  );
}
