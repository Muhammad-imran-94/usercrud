import { useState } from "react";
import Update from "../form/Form";

const Card = (props) => {
  let { editDate , setEditDate, deleteRecord, id , setId , updateRecord} = props;
  const[edit , setEdit]=useState(false);
  return (
    <>
    <div className="w-3/4 pb-4">
      <div className="pt-3 pb-3 flex flex-wrap  justify-center">
        {props && props.users && props.users.length > 0 ? 
          <> 
          {props && props.users.map((item,index) =>
        <div key={index} className="max-w-sm rounded overflow-hidden border border-gray-300 mr-3 mb-3 shadow w-1/5 relative">
          <div className="px-3 py-4">
              <ul>
              <div className="flex">
                <div className=" w-4/5">
                      <li className="font-bold text-sm text-center pb-2">
                      {item.name}
                      </li>
                </div>
                <div className="flex justify-between w-1/5 text-sm pl-3">
                  <div>
                  <i className="fa fa-pencil cursor-pointer hover:text-green-600 p-0"  aria-hidden="true" onClick={()=>{
                      setEdit(true);
                      setId(item.id)
                    }}></i>
                  </div>
                  <div>
                    <div >
                    <i className="fa fa-times cursor-pointer hover:text-red-600 pl-1"  aria-hidden="true" onClick={()=>{
                       deleteRecord(item.id)
                    }}></i>
                </div>
                  </div>
                </div>
                
                {edit && item.id === id ? 
                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-400 px-3 py-4 w-full">
                   <div className="flex justify-between">
                     <div>
                       <p>Edit Record</p>
                     </div>
                     <div className=" text-sm hover:text-red-600">
                     <i className="fa fa-times cursor-pointer"  aria-hidden="true" onClick={()=>{
                      setEdit(false);
                    }}></i>
                     </div>
                   </div>
                   <div className="pt-1">
                       <Update item={item} editDate={editDate} setEditDate={setEditDate} updateRecord={updateRecord}/>
                       </div>
                   </div> 
                 : ""}
                </div>

                <li>
                <span className="font-bold text-xs text-blue-400">User Name </span>
                <div>{item.username}</div>
                </li> 
                <li>
                <span className="font-bold text-xs text-blue-400">Mail </span>
                <div>{item.email}</div>
                </li>
                <li>
                <span className="font-bold text-xs text-blue-400">Phone: </span>
                <div>{item.phone}</div>
                </li> 
                <li>
                <span className="font-bold text-xs text-blue-400">Company: </span>
                <div>{item.company.name}</div>
                </li>
                <li>
                <span className="font-bold text-xs text-blue-400">Street: </span>
                <div>{item.address.street}</div>
                </li>
                <li>
                <span className="font-bold text-xs text-blue-400">Zip code: </span>
                <div>{item.address.zipcode}</div>
                </li>
              </ul>          
          </div>
        </div>
        
        )}
        </>
        :
        <div> 
         <p className="font-bold">OPPS! No Data Found</p> 
        </div>
        }
      </div>
      </div>
    </>
  );
};

export default Card;
