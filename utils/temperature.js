const request = require("request");


const temperature = (city, callback) => {
    const url =
      'http://api.weatherstack.com/current?access_key=ff12df4b3813765d4b71f1f87a51f7ff&%20query='+encodeURIComponent(city);
      request({url:url,json:true},(error,response)=>{
      if(error){
        callback('Unable to connect to the server',undefined)
      } else if(response.body.error){
          callback('Unable to find temperature', undefined)
      }else{
        callback(undefined,{
          temperature:response.body.current.temperature,
          city:response.body.request.query
        
        })
      }
  
      })
  };

  module.exports = temperature