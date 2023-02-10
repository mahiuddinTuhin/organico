import React from "react";
import { BsPlayFill } from "react-icons/bs";
import img3 from "./../../assets/hero/Classy_Main 1.png";
import img1 from "./../../assets/hero/gluten-free 1.png";
import img2 from "./../../assets/hero/usda_organic 1.png";
import vector from "./../../assets/hero/Vector 633.png";
const Hero = () => {
  return (
    <div className="my-10 max-h-screen">
      <div className="grid grid-cols-10">
        <div className="col-span-6 flex flex-col justify-around mx-10 z-20">
          <div>
            <h1 className="font-face-thunder drop-shadow-xl">
              Eat Organic &<br /> Gluten Free Healthy Food
            </h1>
            <h4 className="my-4">
              We supply hight quality organic & gluten free product
            </h4>
            <div className="flex items-center">
              <button
                style={{ backgroundColor: "#01BFD7" }}
                className="text-white rounded-3xl text-sm py-4 mr-7"
              >
                Try Our Sampler Pack
              </button>
              <div className="p-4 shadow-black shadow-2xl rounded-full mx-2 my-2">
                <BsPlayFill style={{ color: "#01BFD7" }} />
              </div>
              <p className="text-sm ml-3 font-semibold">About Happy Campers</p>
            </div>
          </div>
          <div className="flex z-40 -mt-10 ml-1">
            <img src={img1} className="max-h-[40px] mr-5" alt="gulten free" />
            <img src={img2} className="max-h-[40px]" alt="usda" />
          </div>
        </div>

        <div className="z-30">
          <img src={img3} alt="bread" className="z-10 -ml-28 min-w-[600px]" />
        </div>
      </div>
      <div className="relative">
        <img
          className="z-0 absolute inset-x-0 bottom-0"
          src={vector}
          alt="vector"
        />
      </div>
    </div>
  );
};

export default Hero;
