const request=require('request');

const url='http://api.weatherstack.com/current?access_key=ff12df4b3813765d4b71f1f87a51f7ff&%20query=New%20York';

request({url:url},(error,response)=>{
    const data=JSON.parse(response.body);
    console.log(data.current)
})


