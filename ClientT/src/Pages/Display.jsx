import axios from "axios";
import { useEffect, useState } from "react";



const Display = ()=>{
    const [mydata, setmydata]= useState([]);


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
            <td>Delete</td>
            <td>Update</td>
        </tr>
        </>
    )
  })



    return(
        <>
        <h1>Display Page</h1>
        <table border="1px" align="center">
            <tr>
                
                <th></th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
            {ans}
        </table>
        </>
    )
}

export default Display;