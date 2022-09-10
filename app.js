const express = require("express");
// https is not needed to install using node because it is one of the native node modules which is already bundled with on node module projects.
const https = require('https');



const app = express();

app.get("/", (req,res) => {

  const url = "https://api.openweathermap.org/data/2.5/weather?lat=48.8534&lon=2.3488&units=metric&appid=f6a2d47f42a50d41875a53111b7d8dd7";

  https.get(url, (response) => {

  response.on('data', (data) => {
    const weatherData = JSON.parse(data); // converting data into actual JS object!!
    const currentTemp = weatherData.main.temp;
    const weatherDesc = weatherData.weather[0].description;
    console.log(currentTemp, weatherDesc);
  })
  })
  res.send("Server is up and running")
})






app.listen(8000, () => {
  console.log("Server is running on port 8000")
})
