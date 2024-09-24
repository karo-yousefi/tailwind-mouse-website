import React from 'react'
import { star } from "../assets/icons";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        width="120px"
        height="120px"
        className="rounded-full object-cover"
      />
      <p className="mt-6 max-w-small text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img
          src={star}
          width="24px"
          height="24px"
          className="object-contain"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-10 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard