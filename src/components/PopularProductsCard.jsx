import React from 'react'
import { star } from "..//assets/icons";

const PopularProductsCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        width="280px"
        height="280px"
        className="object-contain transition-normal hover:scale-[1.04] hover:brightness-[1.07]"/>
        <div className="mt-8 flex justify-start gap-2.5">
          <img
            src={star}
            alt="rating"
            width="24px"
            height="24px"/>
            <p className="font-montserrat text-xl leading-normal text-textColor-200">(4.3)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-raleway text-textColor-300">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-primary-300 leading-normal text-2xl">{price}</p>
    </div>
  )
}

export default PopularProductsCard