import React from "react";
import anicent from "./../../assets/home-section-2/anicent.png";
import quota1 from "./../../assets/home-section-2/quota1.png";
import quota2 from "./../../assets/home-section-2/quota2.png";
import quota3 from "./../../assets/home-section-2/quota3.png";
import quota4 from "./../../assets/home-section-2/quota4.png";
const HomeSection2 = () => {
  return (
    <div className="flex items-center mt-24">
      <div className="w-[1100px] items-center">
        <img src={anicent} alt="anicent image" />
      </div>
      <div className="w-[598px] flex flex-col">
        <div>
          <h1 className="box-border font-face-thunder font-normal text-5xl tracking-wide leading-[58.88px] drop-shadow-md w-[598px] h-[118px]">
            Choke-Full OF Anicent Whole Grains
          </h1>
        </div>
        {/* anicent detail text */}
        <div className="w-[523px] mt-24">
          {/* first quota */}
          <div className="flex mb-10">
            <div className="mr-16">
              <img
                className="w-12 min-w-min overflow-visible"
                src={quota1}
                alt=""
              />
            </div>
            <div>
              <h1
                className="text-base font-medium leading-[20.4px] tracking-wider text-justify mb-5"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}
              >
                Made from Ancient Whole Grains
              </h1>
              <p
                className="text-base font-normal leading-[30px] tracking-wide text-justify"
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                Experience the goodness of ancient grains in our wholesome
                products. Crafted with care and made from the finest whole
                grains for a healthier you.
              </p>
            </div>
          </div>
          {/* second quota */}
          <div className="flex mb-10">
            <div className="mr-16">
              <img
                className="w-12 min-w-min overflow-visible"
                src={quota2}
                alt=""
              />
            </div>
            <div>
              <h1
                className="text-base font-medium leading-[20.4px] tracking-wider text-justify mb-5"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}
              >
                Vegan
              </h1>
              <p
                className="text-base font-normal leading-[30px] tracking-wide text-justify"
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                Vegan foods are plant-based dishes that exclude meat, dairy,
                eggs and other animal products. They offer a healthy and
                eco-friendly alternative to traditional diets.
              </p>
            </div>
          </div>
          {/* third qouta */}
          <div className="flex mb-10">
            <div className="mr-16">
              <img
                className="w-12 min-w-min overflow-visible"
                src={quota3}
                alt=""
              />
            </div>
            <div>
              <h1
                className="text-base font-medium leading-[20.4px] tracking-wider text-justify mb-5"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}
              >
                No Sugar Added Flavors
              </h1>
              <p
                className="text-base font-normal leading-[30px] tracking-wide text-justify"
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                Indulge in your favorite treats with our no sugar added flavors.
                Satisfy your cravings without the guilt
              </p>
            </div>
          </div>
          {/* forth quota */}
          <div className="flex  mb-10">
            <div className="mr-16">
              <img
                className="w-12 min-w-min overflow-visible"
                src={quota4}
                alt=""
              />
            </div>
            <div>
              <h1
                className="text-base font-medium leading-[20.4px] tracking-wider text-justify mb-5"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}
              >
                Free from Top 8 Food Allergens
              </h1>
              <p
                className="text-base font-normal leading-[30px] tracking-wide text-justify"
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                Enjoy safe, delicious and worry-free meals with our selection of
                Top 8 Food Allergens-free options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
