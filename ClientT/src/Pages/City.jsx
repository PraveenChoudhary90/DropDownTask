import axios from "axios";
import { useEffect, useState } from "react";


const City = ()=>{

    const [country, setCountry]= useState([]);
    const [state, setState]= useState([]);
    const [city, setCity] = useState("");
    const [countrydata, setCountrydata]= useState("");
    const [statedata, setStatedata]= useState("");
 

     console.log(statedata)
  console.log(countrydata);

      const SubmitCity = async(e)=>{
        e.preventDefault();
        const api = "http://localhost:8000/Task/insertcity";
        console.log(city);
        console.log(countrydata);
        console.log(statedata);
        try {
            const response = await axios.post(api, { city:city, countrydata:countrydata, statedata:statedata} )
            console.log(response.data);
            // alert(response.data.msg);
        } catch (error) {
            console.log(error);
        }
    }



  const loaddata1= async()=>{
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
      loaddata1();
  },[]);
  





    const loaddata= async()=>{
        const api = "http://localhost:8000/Task/showcountrystate";
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setState(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        loaddata();
    },[]);


  
    return(
        <>
        <h1>Add City Page</h1>
         Select Country Option: <select name="country"  onChange={(e)=>{setCountrydata(e.target.value)}}>
            {
            country.map((key,index)=>{
                return(
                    <>
                    <option value={key._id}  key={index}>{key.country}</option>
                    </>
                )
            })
            }
        </select>
         Select State Option: <select name="state"  onChange={(e)=>{setStatedata(e.target.value)}}>
            {
            state.map((key,index)=>{
                return(
                    <>
                    <option value={key._id} key={index}>{key.state}</option>
                    </>
                )
            })
            }
        </select>
        <br></br>
        Enter City Name : <input type="text" name="city" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
        <button onClick={SubmitCity}>Save City!!!</button>
        </> 
    )
}

export default City;