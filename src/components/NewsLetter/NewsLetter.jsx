import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const bgImg =
  "https://i.pinimg.com/736x/98/02/46/980246af1ff91ad21c4c78eeecfe1678.jpg";
export default function NewsLetter() {
  return (
    <div
      className="flex flex-col gap-4 items-center border-none pt-[30px] pb-[30px] pl-[10px] pr-[10px] h-[350px] justify-center"
      style={{
        backgroundImage: `url('${bgImg}')`,
      }}
    >
      <div className="text-[32px] text-center pl-[5px] pr-[5px] uppercase md:text-[36px]">
        join our new setter
      </div>
      <div className="md:w-[60%]">
        <p className="text-[18px] pl-[30px] pr-[30px] md:text-[18px]">
          Get the freshest Magnolia Bakery updates and offers right to your
          inbox! Plus, enjoy 10% off on your birthday when you share the date
          with us!
        </p>
      </div>
      <div className="w-[60%] relative md:w-[50%] lg:w-[40%]">
        <input
          className="border-[#00211a] border-2 rounded-lg w-full p-[5px] "
          placeholder="Enter your Email here..."
        ></input>
        <MdOutlineArrowRightAlt
          size={20}
          className="absolute right-[10px] top-[26%]"
        />
      </div>
    </div>
  );
}
