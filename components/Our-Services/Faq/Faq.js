import React from 'react'
import FaqCard from './FaqCard';
import Intro from './Intro';

const Faq = () => {
  return (
    <div className='bg-[#EAEBF4]'>
        <Intro></Intro>
        <div className='px-[25px] md:px-[50px] xl:px-[190px] pb-[100px] xl:pb-[150px]'>
            {/* <div className='grid grid-cols-1 gap-5'>

            </div> */}
            <FaqCard></FaqCard>
        </div>
    </div>
  )
}

export default Faq;