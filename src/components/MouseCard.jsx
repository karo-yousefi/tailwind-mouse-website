import React from 'react'

const MouseCard = ({imgURL, changeBigImg, bigImg}) => {
  const handleClick = () => {
    if(bigImg !== imgURL.bigMouse) {
      changeBigImg(imgURL.bigMouse);
    }
  }

  return (
    <div
      className={`border-[3px] rounded-xl ${bigImg === imgURL.bigMouse ? "border-primary-200" : "border-transparent"} transition-normal cursor-pointer max-sm:flex-1`}
      onClick={handleClick}>
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4]">
          <img 
            src={imgURL.thumbnail}
            width="127"
            height="103"
            className="object-contain transition-normal hover:scale-[1.1]"
          />
        </div>
    </div>
  )
}

export default MouseCard