import { statistics } from "../constants";
import { useState } from "react";

import { bigMouse1 } from "../assets/images";
import { mouses } from "../constants"
import Button from "../components/Button";
import MouseCard from "../components/MouseCard"; //Change

const Hero = () => {
  const [bigImg, setBigImg] = useState(bigMouse1);
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-2xl font-montserrat text-primary-300 font-[500] xl:mb-10 select-none">Our Gaming Mouses</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] sm:leading-[82px] font-bold select-none">
          <span className="xl:bg-white xl:whitespace-nowrap text-textColor-400 relative z-10 pr-10">New Models Are</span>
          <br />
          <span className="text-primary-300 inline-block mt-10">Out Now</span>
        </h1>
        <p className="font-montserrat text-textColor-200 text-2xl leading-8 mt-10 mb-14 sm:max-w-sm select-none">
        we specialize in providing cutting-edge gaming mice designed for competitive gamers and enthusiasts alike.
        </p>
        <Button 
          title="Learn More"
          bgColor="bg-primary-200"
          textColor="text-white"/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat) => {
              return (
                <div key={stat.label} className=" select-none">
                  <p className="font-palanquin text-2xl font-bold text-primary-200">{stat.value}</p>
                  <p className="font-montserrat text-textColor-200 text-2xl">{stat.label}</p>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-lx:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigImg}
          alt="Shoe Collection"
          width="610px"
          height="500px"
          className="object-contain relative z-10 transition-normal hover:scale-[1.23]"/>

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 sm:bottom-[-140px]">
            {mouses.map((mouse, index) => {
              return (
                <div key={index}>
                  <MouseCard 
                    imgURL={mouse}
                    changeBigImg={(mouse) => {setBigImg(mouse)}}
                    bigImg={bigImg}
                  />
                </div>
              )
            })}
          </div>
      </div>

    </section>
  )
}

export default Hero