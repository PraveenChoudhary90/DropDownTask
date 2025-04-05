const StateModel = require("../Model/StateModel");
const CityModel = require("../Model/CityModel");
const EmployeeModel = require("../Model/EmployeeModel");



const StateInsert = async(req,res)=>{
    const { state}=req.body;
    try {
        const data = await StateModel.create({
            state:state
        })
        res.status(200).send({msg:"State is insert"});
        
    } catch (error) {
        console.log(error);
    }
}



const ShowState=async(req,res)=>{
    const data=await StateModel.find();
    res.status(200).send(data);
}

const InsertCity=async(req,res)=>{
    // console.log(req.body);
    // res.send("okk");
    
    const { city, state}=req.body;
    try {
        const data =await CityModel.create({
        city:city
    }) 
    await CityModel.findByIdAndUpdate(data._id,{ $push: { stateId:state} })
    res.status(200).send({msg:"City is Inserted"})
    console.log(data);
    } catch (error) {
        console.log(error)
        
    }
    
}


const ShowCityname=async(req,res)=>{
    // console.log(req.body)
    const { state }=req.body;
    const findData =await CityModel.find({stateId:state});
    console.log(findData);
    res.send(findData)

}


const EnterName =async(req,res)=>{
// console.log(req.body);
const{
    statedata,
    cityData,
    name
  }=req.body;
const data =await EmployeeModel.create({
    name:name,
    stateinfo:statedata,
    cityInfo:cityData

})
res.send("okk")

}


const ShowAllData=async(req,res)=>{
    const data =await EmployeeModel.find().populate("stateinfo").populate("cityInfo");

    // console.log(data);
    res.send(data)
}



const DeletePage =async(req,res)=>{
    // console.log(req.body)
    const{id}=req.body;
    await EmployeeModel.findByIdAndDelete(id);
    res.send("okk")
}

const SearchEditPage=async(req,res)=>{
    // console.log(req.body);
    const{id}=req.body;
    const finddata =await EmployeeModel.findById(id).populate("stateinfo").populate("cityInfo");
    res.send(finddata)
}
const EditData=async(req,res)=>{
    console.log(req.body);
    const{
        stateedit,
        cityedit,
        id,
        name,
       
      }=req.body;
   
   let update=await EmployeeModel.findByIdAndUpdate({_id:id},{name:name});
   let CreateState=null;
   let CreateCity=null;

      let finDState =await StateModel.findOne({state:stateedit});
      let findCity =await CityModel.findOne({city:cityedit})
      if(!finDState){
        CreateState= await StateModel.create({
            state:stateedit
        })
      }
      if(!findCity){
        CreateCity= await CityModel.create({
            city:cityedit,
        })
        // await CityModel.findByIdAndUpdate(data._id,{ $push: { stateId:s} })

      }
      

    // let FindName =await namemodel.findById(id)
    //   console.log(FindName);


   res.send("okk")
   
}




module.exports = {
    StateInsert,
      ShowState,
    InsertCity,
    ShowCityname,
    EnterName,
    ShowAllData,
    DeletePage,
    SearchEditPage,
    EditData
}