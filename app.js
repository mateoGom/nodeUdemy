const request = require("request");
const temperature=require('./utils/temperature')



temperature("Medellin",(error,data)=>{
  console.log("Error ", error);
  console.log("Data ", data)
})