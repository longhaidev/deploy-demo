import React from "react";
import storyImg1 from "../../assets/Pictures/story1.jpg";
import storyImg2 from "../../assets/Pictures/story2.jpg";
import storyImg3 from "../../assets/Pictures/story3.jpg";
export default function OurStory(props) {
  const { storyImg } = props;
  return (
    <>
      <div className="pt-[50px] pb-[50px] pl-[15px] pr-[15px] md:pl-[25px] md:pr-[25px] md:flex md:flex-row md:gap-[100px] lg:mb-[20px] lg:pr-[40px] lg:pl-[40px]">
        <div className="md:w-[45%] lg:w-[60%]">
          <div className="text-center md:!text-left lg:!text-left">
            <h3 className="text-[32px] mb-6 md:text-4xl lg:text-4xl">
              In the Oven
            </h3>
          </div>
          <span className="text-[18px] md:text-[17px] lg:text-[18px]">
            <p className="text-color">
              Experience great banh mi at In The Oven!
            </p>
            <p>
              13-year journey of perfection and development. Nearly 30 service
              establishments.
            </p>
            <p>
              “We confidently lead with prestige and quality, We are
              knowledgeable about Vietnamese cuisine and taste. We are
              constantly innovating and creating.”
            </p>
            <p>
              Experience amazing bakery cuisine at a bakery brand from VietNam
              today!
            </p>
          </span>
        </div>
        <div className="hidden md:flex md:gap-7 md:justify-center md:items-center">
          <div className="md:flex md:flex-col md:gap-4 ">
            <img
              className="md:w-[150px] md:h-[100px] lg:w-[200px] lg:h-[150px] h-full w-full object-cover rounded-lg"
              src={storyImg3}
            ></img>
            <img
              className="md:w-[150px] md:h-[100px] lg:w-[200px] lg:h-[150px] h-full w-full object-cover rounded-lg"
              src={storyImg2}
            ></img>
          </div>
          <div>
            <img
              className="md:w-[250px] md:h-[400px] lg:w-[250px] lg:h-[500px] h-full w-full object-cover rounded-lg"
              src={storyImg1}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
