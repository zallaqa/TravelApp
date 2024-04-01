var path = require('path')
const express = require('express')
const cors = require('cors');
const {getPlacelocation} = require("./GetPlaceLoc")
const { getWeather } = require("./GetWeather")
const { getImg } = require("./GetImges")
// const mockAPIResponse = require('./mockAPI.js') 

const dotenv = require("dotenv");
const { env } = require('yargs');

const app = express();

// env file
dotenv.config();
app.use(cors());
port = 8080;


const user = process.env.USER
const weather_Key = process.env.WEATHER_KEY
const pixabay_key = process.env.pixabay_key
console.log(weather_Key);

// console.log(user)


// const Key = process.env.API_KEY

app.use(express.json());

app.use(express.static('dist'));

// console.log(__dirname);

app.get('/', (req, res) =>{
    // res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
    res.render("index.html")
})

app.post("/getPlace", async (req,res) => {

    const {place} = req.body
    const location = await  getPlacelocation(place, user)
    
    // console.log(location);

    res.send(location)
})

app.post("/getWeather", async (req,res) => {

    console.log(req.body);
    const  {lat,lng,RemingDays} = req.body
    const Weather = await getWeather(lat,lng, RemingDays, weather_Key)

    res.send(Weather)
})


app.post("/getImg", async (req,res) => {

    console.log(req.body);
    const  {name} = req.body
    console.log(name);
    const images = await getImg(name, pixabay_key)

    res.send(images)
})



// designates what port the app will listen to for incoming requests
app.listen(8080, () => console.log(`server is listening on port ${port}`))

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse);
// })
