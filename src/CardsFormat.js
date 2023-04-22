
import Data from '../src/cards/data'
import Data2 from './cards/data2'
import Data3 from './cards/data3'
import Data4 from './cards/data4'
import Data5 from './cards/data5'
import Data6 from './cards/data6'

import Dropdown from 'react-bootstrap/Dropdown';
import * as React from 'react';

import CardDetails from '../src/cards/CardsDetail'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Cards = () => {

    const [data, setData] = React.useState([])
    const [data2, setData2] = React.useState([])
    const [data3, setData3] = React.useState([])
    const [link, setLink] = React.useState('')
    const [link2, setLink2] = React.useState('')
    const [link3, setLink3] = React.useState('')
    const [input, setInput] = useState();
    const [criteria, setCriteria] = useState('');
    var filter;
    const handleSearch = async (e) => {
        e.preventDefault();
        let info;
        console.log(input);
        let dsa;
        if (input.includes('dsa') || input.includes('data') || input.includes("algo")) {

            setData(Data);



            setData2(Data2)


            setData3(Data3)
            setLink("https://www.udemy.com/courses/search/?src=ukw&q=dsa")
            setLink2("https://www.coursera.org/search?query=data%20structures%20and%20algorithms&")
            setLink3("https://practice.geeksforgeeks.org/courses/category/ds-and-algorithms")



        }


        if (input.includes("web") || input.includes("develop") || input.includes("full stack")) {
            setData(Data4)
            setData2(Data5)
            setData3(Data6)
            setLink("https://www.udemy.com/courses/search/?q=full+stack+web+development&src=sac&kw=web+d")
            setLink2("https://www.coursera.org/search?query=web%20development")
            setLink3("https://practice.geeksforgeeks.org/courses/category/development")
        }

    };
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    // SORTING NEECHE SE HAI!!
    function GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }


    data.sort(GetSortOrder(criteria)); //Pass the attribute to be sorted on    



    return (
        <>

            <header className='mt-5'>
                <form className=' flex space-x-2 items-center justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md mx-auto '
                    onSubmit={handleSearch}
                >
                    <input type='text' placeholder='Search...'

                        className=' flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-300'
                        onChange={(e) => setInput(e.target.value)}

                    />
                    <button type='submit' onSubmit={handleSearch} hidden>Search
                        <MagnifyingGlassIcon className=' h-6 w-6 text-indigo-600' />
                    </button>
                </form>


            </header>

            <div className='font-bold mt-9'> FIND THE BEST COURSES ACROSS INTERNET!</div>
            <p className='italic text-red-500' >INVEST on the BEST</p>
            {/* DROPDOWN MENU NEECHE SE HAI!!! */}
            <div className="dropdown">
                <button onClick={handleOpen} className='bg-blue-200 p-2 rounded'>FILTER BY</button>
                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button className='bg-indigo-100 w-[80px] m-1 rounded' onClick={() => setCriteria('price')}>price</button>
                        </li>
                        <li className="menu-item">
                            <button className='bg-indigo-100 w-[80px] m-1 rounded' onClick={() => setCriteria("rating")} >rating</button>
                        </li>
                    </ul>
                ) : null}

            </div>
            <div>
                <a href={link}><button className='bg-indigo-400 mx-2  rounded w-[90px]  font-bold  p-2 mt-5 '>Explore UDEMY</button></a>
                <a href={link3}><button className='bg-indigo-400 mx-2  rounded w-[80px]  font-bold  p-2 mt-5 '>Explore GFG</button></a>
                <a href={link2}><button className='bg-indigo-400  mx-2 rounded w-[99px]  font-bold  p-2 mt-5 '>Explore COURSERA</button></a>
            </div>

            {/* FORMATTING */}
            <div className='w-full bg-white m-2 mr-8 '>
                <div className=' flex justify-center p-3 mx-auto '>


                    <div className=' ml-20 grid grid-cols-3 gap-x-8 text-center py-8'>


                        < CardDetails details={data} />
                        < CardDetails details={data2} />
                        < CardDetails details={data3} />
                    </div>

                </div>

            </div>

        </>
    )
}
export default Cards;
// bg-gradient-to-b from-white via-blue-200 to-white 