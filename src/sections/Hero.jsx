import { statistics } from "../constants";
import { useState } from "react";

import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants"
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigImg, setBigImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-red-600 xl:mb-10">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-red-600 inline-block mt-10">Fast</span> Mouses
        </h1>
        <p className="font-montserrat text-slate-gray text-2xl leading-8 mt-10 mb-14 sm:max-w-sm">
        more text here
        </p>
        <Button 
          title="click"
          bgColor="bg-red-600"
          textColor="text-white"
          icon={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat) => {
              return (
                <div key={stat.label}>
                  <p className="font-palanquin text-2xl font-bold text-red-600">{stat.value}</p>
                  <p className="font-montserrat text-slate-gray text-2xl">{stat.label}</p>
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
          className="object-contain relative z-10"/>

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 sm:bottom-[-140px]">
            {shoes.map((shoe, index) => {
              return (
                <div key={index}>
                  <ShoeCard 
                    imgURL={shoe}
                    changeBigImg={(shoe) => {setBigImg(shoe)}}
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