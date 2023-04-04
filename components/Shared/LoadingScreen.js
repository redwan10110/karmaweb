import Image from 'next/image'
import React from 'react'
import loadingImage from "../../public/assets/Loading.png";
const LoadingScreen = () => {
  return (
    <div className='block md:hidden'>
        <Image src={loadingImage} alt="Loading"></Image>
    </div>
  )
}

export default LoadingScreen