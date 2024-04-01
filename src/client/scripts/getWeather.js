const axios =  require("axios")
const getWeather = async (lng,lat, RemingDays) =>{
    console.log("the place fun is working")
    const { data } = await axios.post("http://localhost:8080/getWeather", {

    lat,
    lng,
    RemingDays

    },

     );

     return  data;
 }

 module.exports = { getWeather}