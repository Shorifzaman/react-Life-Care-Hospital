import React from 'react'

const AboutItem = ({ id, image, icon, title, description}) => {
    return (
        <div className="bg-gray rounded-2xl hover:shadow-xl">
           <div className="aboute-banner justify-center items-center">
            <h2 class=" text-center my-1 mmb-5 text-base font-medium text-white-500 uppercase">About Us</h2>
            <h3 class=" text-center my-5 my-8 text-base font-medium  text-white-500 uppercase text-2xl  sm:mt-0 sm:px-0 sm:text-6xl">About Us</h3>
            </div>
        </div>
    )
}

export default AboutItem;
