import { useState } from 'react';

const ButtonNoHover = ({title, bgColor, textColor}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`text-[30px] font-[500] ${isHovered ? "border-textColor-300 opacity-100" : "border-textColor-200 opacity-80"} transition-normal h-16 px-12 rounded-[15px] cursor-pointer border-2 font-raleway ${bgColor} ${textColor}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      {title}
    </button>
  )
}

export default ButtonNoHover