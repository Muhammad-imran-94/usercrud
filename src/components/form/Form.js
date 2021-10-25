import React from 'react'

const Update = (props) => {
    let {editDate, setEditDate ,item , updateRecord}=props;
    let duplicate = editDate;
    return (
        <>
        <div>
            <form className="flex flex-col justify-center text-sm">
            <label className="font-bold text-xs ">Name:</label>
                <input type="text" placeholder="name" className="border border-gray-400 outline-none pl-1 pr-1" defaultValue={item.name} 
                onChange={(e)=>{
                    console.log("this " , e.target.value);
                    duplicate.name=e.target.value;
                    setEditDate({...duplicate})
                }}
                />
                <label className="font-bold text-xs">User Name:</label>
                <input type="text" placeholder="name" className="border border-gray-400 outline-none pl-1 pr-1" defaultValue={item.username} 
                onChange={(e)=>{
                    console.log("this " , e.target.value);
                    duplicate.username=e.target.value;
                    setEditDate({...duplicate})
                }}
                />
                <label className="font-bold text-xs">Mail:</label>
                <input type="text" placeholder="name" className="border border-gray-400 outline-none pl-1 pr-1" defaultValue={item.email} 
                onChange={(e)=>{
                    console.log("this " , e.target.value);
                    duplicate.email=e.target.value;
                    setEditDate({...duplicate})
                }}
                />
                <label className="font-bold text-xs">Phone:</label>
                <input type="text" placeholder="name" className="border border-gray-400 outline-none pl-1 pr-1" defaultValue={item.phone} 
                onChange={(e)=>{
                    console.log("this " , e.target.value);
                    duplicate.phone=e.target.value;
                    setEditDate({...duplicate})
                }}
                />
                <label className="font-bold text-xs ">Company:</label>
                <input type="text" placeholder="name" className="border border-gray-400 outline-none pl-1 pr-1" defaultValue={item.company.name} 
                onChange={(e)=>{
                    console.log("this " , e.target.value);
                    duplicate.company.name=e.target.value;
                    setEditDate({...duplicate})
                }}
                />
                <label className="font-bold text-xs">Street:</label>
                <input type="text" placeholder="name" className="border border-gray-400 outline-none pl-1 pr-1" defaultValue={item.address.street} 
                onChange={(e)=>{
                    console.log("this " , e.target.value);
                    duplicate.address.street=e.target.value;
                    setEditDate({...duplicate})
                }}
                />
                <label className="font-bold text-xs">ZipCode:</label>
                <input type="text" placeholder="name" className="border border-gray-400 outline-none pl-1 pr-1" defaultValue={item.address.zipcode} 
                onChange={(e)=>{
                    console.log("this " , e.target.value);
                    duplicate.address.zipcode=e.target.value;
                    setEditDate({...duplicate})
                }}
                />
                <div className="pt-1 flex justify-center">
                <button type="submit" className="bg-gray-700  text-white border-gray-300 rounded pr-3 pl-3 pt-1 pb-1 font-bold">Save</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Update;
