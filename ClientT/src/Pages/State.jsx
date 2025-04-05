import axios from "axios";
import { useEffect, useState } from "react";


const State = ()=>{
    const [country, setCountry]= useState([]);
    const [state, setState ]= useState("");

    const loaddata= async()=>{
        const api = "http://localhost:8000/Task/showcountry";
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setCountry(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }


useEffect(()=>{
    loaddata();
},[]);


const SubmitState = async(e)=>{
    e.preventDefault();
    const api = "http://localhost:8000/Task/insertstate";
    try {
        const response = await axios.post(api, {state:state, country:country});
        console.log(response.data);
        alert(response.data.msg);
    } catch (error) {
        console.log(error);
    }
}


    return(
        <>
        <h1>Add State Page</h1>
        Select Country Option:
        <select name="country" id="country" value="country" onChange={(e)=>{setCountry(e.target.value)}}>
            {
                country.map((key, index)=>{
                    return(
                        <>
                        <option value={key._id} key={index} >{key.country}</option>
                        </>
                    )
                })
            }
        </select>
        <br></br>
        Enter State Name :<input type="text" name="state" value={state} onChange={(e)=>{setState(e.target.value)}}/>
        <button onClick={SubmitState} >Save State!!</button>
        </>
    )
}

export default State;