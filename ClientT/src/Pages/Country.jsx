import { useState } from "react";
import axios from "axios";

const Country = ()=>{
const [country, setCountry] = useState("");


  console.log(country);


  const SaveCountry = async(e)=>{
    e.preventDefault();
    const api = "http://localhost:8000/Task/insertcountry";
    try {
        const response = await axios.post(api, {country:country});
        console.log(response.data);
        alert(response.data.msg);
    } catch (error) {
        console.log(error);
        
    }
  }

    return(
        <>
        <h1>Add Country Page</h1>
        Enter the Country Name: <input type="text" name="country" value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
        <button onClick={SaveCountry}>Save Country!</button>
        </>
    )
}

export default Country;