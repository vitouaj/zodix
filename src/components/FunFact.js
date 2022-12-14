import React from 'react'

import zoImg from '../images/pngegg.png'

const FunFact = () => {
    return (
        <div className="pb-4 md:flex mx-4 justify-center my-10">
            <div className="ml-6 md:w-82">
                <p className="text-5xl mb-4 font-bold text-sky-500">Fun Facts</p>
                <div className="">
                    <p className="text-gray-500 text-3xl">We are <span classNameName='text-sky-500'>ZoDiX</span>. Bring your head around Astrology with us</p>
                </div>
            </div>
            <div className="grid place-items-center p-4 md:w-80 md:h-80">
                <img className='md:fit' src={zoImg}/>
            </div>
        </div>
    )
}

export default FunFact