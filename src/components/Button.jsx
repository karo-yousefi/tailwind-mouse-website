import React, { useState } from 'react'

const Button = ({title, bgColor, textColor, icon}) => {
  const [isHoverd, setIsHovered] = useState(false);
  return (
    <button
      className={`${bgColor} ${textColor} ${isHoverd ? "opacity-80" : ""} border-[1px] border-slate-800 transition-[0.25s] opacity-100 flex justify-center items-center gap-2 rounded-full px-10 h-14 text-2xl leading-none font-montserrat cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {title}
      {icon && <img
        src={icon}
        className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  )
}
export default Button;