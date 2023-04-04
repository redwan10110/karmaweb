import React from 'react'

const Paragraph = ({normalText}) => {
  return (
    <div className='px-[40px] md:px-[80px] lg:px-[120px] xl:px-[190px]'>
        <p className="text-black text-[18px] leading-[22px] lg:text-[21px] lg:leading-[26px] 2xl:w-6/12 mb-8">
      {normalText}
      </p>
    </div>
  )
}

export default Paragraph