import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[35px] sm:min-w-[350px] w-full rounded-[2px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-primary-300 rounded-full">
        <img 
          src={imgURL}
          alt={label}
          width="24px"
          height="24px"
          className="object-contain"
        />
      </div>
      <h3 className="mt-5 font-montserrat text-3xl leading-normal font-bold text-textColor-300">
        {label}
      </h3>
      <p className="mt-3 break-words font-raleway text-lg leading-normal text-textColor-200">
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard