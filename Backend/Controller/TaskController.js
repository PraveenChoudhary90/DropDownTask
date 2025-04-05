const CityModel = require("../Model/CityModel");
const CountryModel = require("../Model/CountryModel");
const StateModel = require("../Model/StateModel");




const InsertCountry = async(req,res)=>{
    const { country} = req.body;
    try {
        const Country = await CountryModel.create({
            country:country
        })
        res.status(200).send({msg:"Your Country is Inserted Successfully"});
    } catch (error) {
    console.log(error);    
    }
    
}


const ShowCountry = async(req,res)=>{
    const data= await CountryModel.find();
    res.status(200).send(data);
}


const InsertState = async(req,res)=>{
    const {state, country}= req.body;
    // console.log(country);
    try {
        const Data = await StateModel.create({
            state:state,

        })
        await StateModel.findByIdAndUpdate(Data._id,{ $push: { countryId:country} })
        res.status(200).send({msg:"State Is Inserted Successfully"})
    } catch (error) {
        console.log(error);
    }
}


const ShowCountryState = async(req,res)=>{
    const Data = await StateModel.find();
    res.status(200).send(Data);
}


const InsertCity = async(req,res)=>{
    console.log(req.body);
    res.send("okk");
    
    // const {countrydata,statedata,city} = req.body;
    // try {
    //     const Data = await CityModel.create({
    //         city:city,
    //         countryinfo:countrydata,
    //         stateinfo:statedata,
            
    //     })
    //     // await CityModel.findByIdAndUpdate(Data._id,{ $push: {countryinfo:countrydata,stateinfo:statedata} })
    //     res.status(200).send({msg:"Your City is Insertd Successfully"});
    // } catch (error) {
    //     console.log(error);
    // }
}


module.exports = {
    InsertCountry,
    ShowCountry,
    InsertState,
    ShowCountryState,
    InsertCity
}