import React from 'react'

const Uploadrecord = (props) => {
    const {uploadData, setUploadData} = props;
    let duplicateUpload = uploadData;
    return (
        <>
        <div className="w-3/6">
            <form className="w-full rounded bg-blue-400 pr-4 pl-4 pt-3 pb-3" onSubmit={(e)=>{props.saveRecord(e)}}>
                <div className="text-center font-semibold pb-2 pt-2">
                    <p>Add New Record</p>
                </div>
                <div className="flex justify-between">
                <div className="w-5/12">
                <div>
                <label  className="text-sm font-semibold">Name:</label>
                </div>
                <input type="text" placeholder="Name" className="border-none w-full rounded pt-1 pb-1 pr-2 pl-2 text-base outline-none focus:ring-1 focus:ring-gray-400" required
                value={uploadData.name}
                onChange={(e)=>{
                   duplicateUpload.name=e.target.value;
                   setUploadData({...duplicateUpload}) 
                }}
                />
                </div>
                <div className="w-5/12">
                <div>
                <label  className="text-sm font-semibold">Company Name:</label>
                </div>
                <input type="text" placeholder="Company Name" className="border-none w-full rounded pt-1 pb-1 pr-2 pl-2 text-base outline-none focus:ring-1 focus:ring-gray-400" required
                 value={uploadData.company.name}
                onChange={(e)=>{
                    duplicateUpload.company.name=e.target.value;
                    setUploadData({...duplicateUpload}) 
                 }}
                />
                </div>
                </div>
                {/* single row ended */}
                <div className="flex justify-between pt-2">
                <div className="w-5/12">
                <div>
                <label className="text-sm font-semibold">User Name:</label>
                </div>
                <input type="text" placeholder="Name" className="border-none w-full rounded pt-1 pb-1 pr-2 pl-2 text-base outline-none focus:ring-1 focus:ring-gray-400" required
                value={uploadData.username}
                onChange={(e)=>{
                   duplicateUpload.username=e.target.value;
                   setUploadData({...duplicateUpload}) 
                }}
                />
                </div>
                <div className="w-5/12">
                <div>
                <label  className="text-sm font-semibold">Email:</label>
                </div>
                <input type="email" placeholder="Company Name" className="border-none  w-full rounded pt-1 pb-1 pr-2 pl-2 text-base outline-none focus:ring-1 focus:ring-gray-400" required
                value={uploadData.email}
                onChange={(e)=>{
                    duplicateUpload.email=e.target.value;
                    setUploadData({...duplicateUpload}) 
                 }}
                />
                </div>
                </div>
                {/* single row ended */}
                <div className="flex justify-between pt-2">
                <div className="w-5/12">
                <div>
                <label  className="text-sm font-semibold">Phone:</label>
                </div>
                <input type="number" maxLength="12" placeholder="Phone" className="border-none w-full rounded pt-1 pb-1 pr-2 pl-2 text-base outline-none focus:ring-1 focus:ring-gray-400" required
                value={uploadData.phone}  
                onChange={(e)=>{
                   duplicateUpload.phone=e.target.value;
                   setUploadData({...duplicateUpload}) 
                }}
                />
                </div>
                <div className="w-5/12">
                <div>
                <label  className="text-sm font-semibold">Zipcode:</label>
                </div>
                <input type="text" placeholder="Company Name" className="border-none  w-full rounded pt-1 pb-1 pr-2 pl-2 text-base outline-none focus:ring-1 focus:ring-gray-400" required
                value={uploadData.address.zipcode}
                onChange={(e)=>{
                    duplicateUpload.address.zipcode=e.target.value;
                    setUploadData({...duplicateUpload}) 
                 }}
                />
                </div>
                </div>
                {/* single row ended */}
                {/* single row ended */}
                <div className="flex justify-between pt-2">
                <div className="w-full">
                <div>
                <label className="text-sm font-semibold">Street:</label>
                </div>
                <input type="text" placeholder="Zip Code" className="border-none w-full rounded pt-1 pb-1 pr-2 pl-2 text-base outline-none focus:ring-1 focus:ring-gray-400" required
                value={uploadData.address.street}
                onChange={(e)=>{
                   duplicateUpload.address.street=e.target.value;
                   setUploadData({...duplicateUpload}) 
                }}
                />
                </div>
                </div>
                <div className="pt-3">
                <button type="submit" className="bg-gray-700 border text-white border-gray-300 rounded pr-3 pl-3 pt-2 pb-2 font-bold" >Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Uploadrecord;