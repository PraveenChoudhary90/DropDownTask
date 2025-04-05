// import axios from "axios";
// import { useEffect, useState } from "react";


// const City = ()=>{

//     const [country, setCountry]= useState([]);
//     const [state, setState]= useState([]);
//     const [city, setCity] = useState("");
//     const [countrydata, setCountrydata]= useState("");
//     const [statedata, setStatedata]= useState("");
 

//      console.log(statedata)
//   console.log(countrydata);

//       const SubmitCity = async(e)=>{
//         e.preventDefault();
//         const api = "http://localhost:8000/Task/insertcity";
//         console.log(city);
//         console.log(countrydata);
//         console.log(statedata);
//         try {
//             const response = await axios.post(api, { city:city, countrydata:countrydata, statedata:statedata} )
//             console.log(response.data);
//             // alert(response.data.msg);
//         } catch (error) {
//             console.log(error);
//         }
//     }



//   const loaddata1= async()=>{
//           const api = "http://localhost:8000/Task/showcountry";
//           try {
//               const response = await axios.get(api);
//               console.log(response.data);
//               setCountry(response.data);
              
//           } catch (error) {
//               console.log(error);
              
//           }
//       }
  
  
//   useEffect(()=>{
//       loaddata1();
//   },[]);
  





//     const loaddata= async()=>{
//         const api = "http://localhost:8000/Task/showcountrystate";
//         try {
//             const response = await axios.get(api);
//             console.log(response.data);
//             setState(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(()=>{
//         loaddata();
//     },[]);


  
//     return(
//         <>
//         <h1>Add City Page</h1>
//          Select Country Option: <select name="country"  onChange={(e)=>{setCountrydata(e.target.value)}}>
//             {
//             country.map((key,index)=>{
//                 return(
//                     <>
//                     <option value={key._id}  key={index}>{key.country}</option>
//                     </>
//                 )
//             })
//             }
//         </select>
//          Select State Option: <select name="state"  onChange={(e)=>{setStatedata(e.target.value)}}>
//             {
//             state.map((key,index)=>{
//                 return(
//                     <>
//                     <option value={key._id} key={index}>{key.state}</option>
//                     </>
//                 )
//             })
//             }
//         </select>
//         <br></br>
//         Enter City Name : <input type="text" name="city" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//         <button onClick={SubmitCity}>Save City!!!</button>
//         </> 
//     )
// }

// export default City;
import axios from "axios";
import { useEffect, useState } from "react";

const City = () => {
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState("");
    const [countrydata, setCountrydata] = useState("");
    const [statedata, setStatedata] = useState("");

    // Load Country Data
    const loaddata1 = async () => {
        const api = "http://localhost:8000/Task/showcountry";
        try {
            const response = await axios.get(api);
            setCountry(response.data);
        } catch (error) {
            console.log("Error loading country:", error);
        }
    };

    // Load State Data
    const loaddata = async () => {
        const api = "http://localhost:8000/Task/showcountrystate";
        try {
            const response = await axios.get(api);
            setState(response.data);
        } catch (error) {
            console.log("Error loading state:", error);
        }
    };

    // Submit City
    const SubmitCity = async (e) => {
        e.preventDefault();

        if (!city || !countrydata || !statedata) {
            alert("Please fill all fields");
            return;
        }

        const api = "http://localhost:8000/Task/insertcity";
        try {
            const response = await axios.post(api, {
                city: city,
                countrydata: countrydata,
                statedata: statedata
            });
            console.log(response.data);
            alert("City saved successfully!");
            setCity(""); // Reset input after successful submission
        } catch (error) {
            console.log("Error saving city:", error);
        }
    };

    // Fetch data on mount
    useEffect(() => {
        loaddata1();
        loaddata();
    }, []);

    // Set default country once loaded
    useEffect(() => {
        if (country.length > 0) {
            setCountrydata(country[0]._id);
        }
    }, [country]);

    // Set default state once loaded
    useEffect(() => {
        if (state.length > 0) {
            setStatedata(state[0]._id);
        }
    }, [state]);

    return (
        <>
            <h1>Add City Page</h1>

            <label>Select Country:</label>
            <select name="country" value={countrydata} onChange={(e) => setCountrydata(e.target.value)}>
                {country.map((key) => (
                    <option value={key._id} key={key._id}>
                        {key.country}
                    </option>
                ))}
            </select>

            <br />

            <label>Select State:</label>
            <select name="state" value={statedata} onChange={(e) => setStatedata(e.target.value)}>
                {state.map((key) => (
                    <option value={key._id} key={key._id}>
                        {key.state}
                    </option>
                ))}
            </select>

            <br />

            <label>Enter City Name:</label>
            <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
            />

            <button onClick={SubmitCity}>Save City</button>
        </>
    );
};

export default City;