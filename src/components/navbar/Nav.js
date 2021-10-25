import React from 'react'

const Nav = () => {
    return (
        <>
        <div className="flex justify-center w-100 bg-gray-100 pt-2 pb-2">
        <div className="flex w-4/5">
          <div className="w-6/12 pt-3 pb-3 pl-3">
           <p className="text-2xl font-bold">Directory</p>
          </div>
          <div className=" w-6/12 pt-3 pb-3 flex justify-end ">
            <ul className="flex">
                <li className="mr-2 ml-2 pt-2 border-b-2 border-transparent hover:border-blue-500 cursor-pointer transition duration-700">Home</li>
                <li className="mr-2 ml-2 pt-2 border-b-2 border-transparent hover:border-blue-500 cursor-pointer transition duration-700">About</li>
                <li className="mr-2 ml-2 pt-2 border-b-2 border-transparent hover:border-blue-500 cursor-pointer transition duration-700">Explore</li>
                <li className="mr-2 ml-2 pt-2 border-b-2 border-transparent hover:border-blue-500 cursor-pointer transition duration-700">Contact Us</li>
            </ul>
          </div>
        </div>  
        </div>
        </>
    )
}

export default Nav;