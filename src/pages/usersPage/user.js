import axios from "axios";
import { useState, useEffect } from "react";

import { v4 as uuidv4 } from 'uuid';

import Nav from "../../components/navbar/Nav";
import Card from "../../components/card/Card";
import Search from "../../components/search/search";
import Loading from "../../components/loading/Loading";
import Uploadrecord from "../../components/upload/upload";

const User = () => {
  const [users, setUsers] = useState("");
  const [data, setData] = useState("");
  const[id , setId]=useState("");
  const [uploadData, setUploadData] = useState({
    id:"",
    name:"",
    username:"",
    phone:"",
    email:"",
    company:{
      name:""
    },
    address:{
      street: "",
      zipcode:""
    }
  });

  const [editDate, setEditDate] = useState({
    id:"",
    name:"",
    username:"",
    phone:"",
    email:"",
    company:{
      name:""
    },
    address:{
      street: "",
      zipcode:""
    }
  });
  let duplicateUpload = uploadData;

  const userData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setUsers(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    userData();
  }, []);

  const Searching = (e) => {
    if (e.target.value !== "") {
      var searching = data.filter((item) => {
        return item.name.toString().toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      });
    setUsers(searching);
    } 
    else {
        setUsers(data);
    }
  }


  const saveRecord=(e)=>{
    e.preventDefault();
    const id = uuidv4();
    duplicateUpload.id=id;
    setUploadData({...duplicateUpload})
    users.push(uploadData);
    setUploadData({
      id:"",
      name:"",
      username:"",
      phone:"",
      email:"",
      company:{
        name:""
      },
      address:{
        street: "",
        zipcode:""
      }
    });
  }

  const deleteRecord=(id)=>{
    var searching = users.filter((item) => {
      return item.id !== id;
    });
  setUsers(searching);
  }

  const updateRecord=(id)=>{
    console.log("this is clicked");
  }

  console.log("this is edit" ,editDate);

 
  return (
    <>
    {users ? 
    <div>
      <div className="w-100">
        <Nav />
      </div>
      <div className="flex justify-center ">
        <Search Searching={Searching} />
      </div>
      <div className="flex justify-center ">
        <Card users={users} deleteRecord={deleteRecord} id={id} setId={setId} editDate={editDate} setEditDate={setEditDate} updateRecord={updateRecord}/>
      </div>
      <div className="flex justify-center bg-gray-100 pt-4 pb-4">
        <Uploadrecord uploadData={uploadData} setUploadData={setUploadData} saveRecord={saveRecord}/>
      </div>
      </div>
      : 
      <Loading/>
      }
    </>
  );
};

export default User;
