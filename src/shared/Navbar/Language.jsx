import vnFlag from "../../assets/Pictures/vietnam.png";
import ukFlag from "../../assets/Pictures/united-kingdom.png";
const Language = (props) => {
  return (
    <div className="flex flex-row items-center  lg:!mt-0 md:!mt-0 ">
      <div className="w-[25px] h-[25px] flex flex-col items-center justify-center">
        <img className="w-[80%] h-[80%] object-cover" src={vnFlag}></img>
      </div>
      <p className="m-0">|</p>
      <div className="w-[25px] h-[25px] flex flex-col items-center justify-center">
        <img className="w-[80%] h-[80%] object-cover" src={ukFlag}></img>
      </div>
    </div>
  );
};

export default Language;
