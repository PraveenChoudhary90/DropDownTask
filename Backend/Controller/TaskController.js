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
   
    
    const {countrydata,statedata,city} = req.body;
    try {
        const Data = await CityModel.create({
            city:city,
            countryinfo:countrydata,
            stateinfo:statedata,
            
        })
        // await CityModel.findByIdAndUpdate(Data._id,{ $push: {countryinfo:countrydata,stateinfo:statedata} })
        res.status(200).send({msg:"Your City is Insertd Successfully"});
    } catch (error) {
        console.log(error);
    }
}


const DisplayData = async(req,res)=>{
    const AllData = await CityModel.find().populate("countryinfo").populate("stateinfo");
    res.send(AllData);
}

const DeleteData = async(req,res)=>{
    const {id}=req.body;
    try {
        const data = await CityModel.findByIdAndDelete(id);
        res.send("Data Is Delete")
    } catch (error) {
        console.log(error);
    }
}

const ShoWFromData = async(req,res)=>{
    const {id}= req.body;
    try {
        const Data = await CityModel.findById(id).populate("countryinfo").populate("stateinfo");
        res.status(200).send(Data);
    } catch (error) {
        console.log(error);
    }
}

const UpdateData = async(req,res)=>{
    const {id,city,country,state}= req.body;
    try {
        const Data = await CityModel.findByIdAndUpdate({_id:id},{city:city});

           let CreateState=null;
           let CreateCity=null;
        
              let finDState =await CountryModel.findOne({country:country});
              let findCity =await StateModel.findOne({state:state})
              if(!finDState){
                CreateState= await CountryModel.create({
                    country:country
                })
              }
              if(!findCity){
                CreateCity= await StateModel.create({
                    state:state
                })
                // await CityModel.findByIdAndUpdate(data._id,{ $push: { stateId:s} })
        
              }
              
        res.send("your data Is Update");

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    InsertCountry,
    ShowCountry,
    InsertState,
    ShowCountryState,
    InsertCity,
    DisplayData,
    DeleteData,
    ShoWFromData,
    UpdateData
}