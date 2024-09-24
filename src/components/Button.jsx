import React, { useState } from 'react'

const Button = ({title, bgColor, textColor, icon}) => {
  const [isHoverd, setIsHovered] = useState(false);
  return (
    <button
      className={`flex justify-center items-center gap-2 ${bgColor} ${textColor} text-[30px] font-[500] h-16 px-16 rounded-[15px] cursor-pointer border-none leading-none font-raleway test`}
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