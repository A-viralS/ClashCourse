import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';



const Cards_details = ({ details }) => {





    return (
        <>

            {
                details.map((detail => {
                    const { title, rating, image, users, price, pic, about } = detail;
                    return (

                        <>

                            <div className='  w-80 h-[400px] p-4 hover:border-4  bg-gradient-to-t  mb-7 border-2 border-blue-500  rounded-md bg-[rgba(224,231,255,255)] shadow-slate-700 shadow-xl '>
                                <div>
                                    <a href={image}>  <img src={pic} className='h-[180px] w-[330px]'></img></a>
                                </div>
                                <div className='   flex flex-col   text-left    ' key={title}>

                                    <p className='text-[15.5px] font-bold font-content1 uppercase text-left tracking-wider  border-b-4 border-black '>{title}</p>
                                    <p className='font-content1 truncate smt-2 font-2xl text-left  max-w-[300px]' maxLength={10}><span className='font-bold'>Description: </span>  {about}</p>
                                    <p className='font-content1 mt-2 font-2xl text-left  max-w-[300px]'> <span className='font-bold'> Rating :</span> {rating}</p>
                                    <p className='font-content1 mt-2 font-2xl text-left  max-w-[300px]'> <span className='font-bold'>Current Price: </span> {price}</p>
                                </div>
                            </div>
                        </>
                    )
                }))
            }
        </>

    )
}
export default Cards_details;

// bg-gradient-to-br from-white via-white to-blue-300 shadow-md shadow-blue-900 border-1 border-blue-600 mt-3