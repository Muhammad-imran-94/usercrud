import React from 'react'

const Search = (props) => {
    return (
        <>
        <div className="w-3/4 flex justify-center pt-4 pb-2">
          <div className="w-5/6 flex justify-center pt-4 pb-3">
              <input type="text" placeholder="Search Name" className="border border-gray-400 w-3/6 rounded pt-1 pb-1 pr-2 pl-2 text-base outline-none focus:ring-1 focus:ring-blue-600" onChange={(e)=>{props.Searching(e)}}/>
          </div>  
        </div>
        </>
    )
}

export default Search;
