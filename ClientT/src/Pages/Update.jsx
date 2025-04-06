import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Update  =()=>{
    const navigate = useNavigate();

    const [input , setInput]= useState({});
    const [country, setCountry]= useState("");
    const [state, setState]= useState("");


     const LoadData = async()=>{
    const api = "http://localhost:8000/Task/ShoWFromData";
    const response = await axios.post(api, {id:id});
    console.log(response.data);
    setInput(response.data);
    setCountry(response.data.countryinfo.country);
    setState(response.data.stateinfo.state);
   }

   useEffect(()=>{
    LoadData();
   },[])


  const HandelInput=(e)=>{

    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);

  }

  const handeleditSubmit = async()=>{
    const api = "http://localhost:8000/Task/UpdateData";
    try {
        const response = await axios.post(api, {id:id,city:input.city, country:country, state:state});
        console.log(response.data);
        alert("Your data is update");
        navigate("/display")
    } catch (error) {
        console.log(error);
    }
  }

    const {id}= useParams();


    return(
        <>
        <h1>Update Data</h1>
        Enter Your Country:<input type="text" name="country" value={country} onChange={HandelInput} /><br></br>
        Enter Your State:<input type="text" name="state" value={state} onChange={HandelInput}  /><br></br>
        Enter Your City:<input type="text" name="city" value={input.city} onChange={HandelInput} /><br></br>
        <button onClick={handeleditSubmit}>Submitedit</button>
        </>
    )
}

export default Update;