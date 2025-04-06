import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import {useNavigate} from "react-router-dom";

const Display = ()=>{
    const [mydata, setmydata]= useState([]);
    // let[reload,setReload]=useState(false);
    const navigate = useNavigate();


const HandelUpdateData =(id)=>{
    navigate(`/update/${id}`);
 }

    const LoadData = async()=>{
        const api = "http://localhost:8000/Task/DisplayData";
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setmydata(response.data);

        } catch (error) {
            console.log(error);
        }
    }

  useEffect(()=>{
    LoadData();
  },[]);



   const HandelDelete = async(id)=>{
    const api = "http://localhost:8000/Task/DeleteData";
    try {
        const response = await axios.post(api, {id:id});
        console.log(response.data);
        alert("Data Is Deleted");
        // setReload(true);
    } catch (error) {
        console.log(error);
    }
   }

//    useEffect(()=>{
//    },[reload]);



  

 


  let sno = 0;
  const ans= mydata.map((key)=>{
    sno++;
    return(
        <>
        <tr>
            <td>{sno}</td>
            <td>{key.countryinfo.country}</td>
            <td>{key.stateinfo.state}</td>
            <td>{key.city}</td>
            <td>
            <button onClick={()=>{HandelDelete(key._id)}}>Delete</button>
            </td>
            <td>
               <button onClick={()=>{HandelUpdateData(key._id)}}> Update  </button>  </td>
        </tr>
        </>
    )
  })



    return(
        <>
        <h1>Display Page</h1>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Delete</th>
                <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
      
        </>
    )
}

export default Display;