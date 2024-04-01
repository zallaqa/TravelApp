const axios =  require("axios")

const getPlacelocation = async (place, user) =>{
    const {data} = await axios.get(`https://secure.geonames.org/searchJSON?q=${place}&maxRows=1&username=${user}`)

    if(!data.geonames.length){
        const errMassage = {
            message: "No location bearing that name. Please check your again",
            error: true
        }
      
        return errMassage
    }
    

    
    const  {name, lat,  lng} =  await  data.geonames[0]

    // console.log({name, lat,  lng});

    return {name ,lat ,lng}
}

module.exports = {getPlacelocation}