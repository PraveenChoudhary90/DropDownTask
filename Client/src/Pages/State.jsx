import { useState } from "react";
import axios from "axios";

const State = ()=>{
       
    const [state, setState]= useState("");
    const handelSubmit = async(e)=>{
        e.preventDefault();
        const api = "http://localhost:8000/state/insertstate";
        const response =await axios.post(api, {state:state});
        console.log(response.data);
        alert(response.data.msg);

    }
    console.log(state);

    return(
        <>
        <h1> Enter Your State Here</h1>
        <input type="text" name="state" value={state} onChange={(e)=>{ setState(e.target.value)  }}/><br></br>
        <button onClick={handelSubmit}>Save State!</button>
        </>
    )
}

export default State;