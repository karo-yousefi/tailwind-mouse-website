import React from 'react'
import { star } from "../assets/icons";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        width="150px"
        height="150px"
        className="rounded-full object-cover"/>
      <p className="mt-6 max-w-small text-center text-textColor-200 text-xl font-raleway">{feedback}</p>
      <div className="mt-16 flex justify-center items-center gap-2 text-textColor-200 font-raleway">
        <img
          src={star}
          width="24px"
          height="24px"
          className="object-contain"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-4 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard