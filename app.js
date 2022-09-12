const express = require("express");

// https is not needed to install using node because it is one of the native node modules which is already bundled with on node module projects.
const https = require("https");

const app = express();



app.get("/", (req, res) => {

  res.sendFile(__dirname + "/index.html");

})

app.post("/", (req, res) => {
  console.log("Post request received");
})

// const query = "London";
// const apiKey = "f6a2d47f42a50d41875a53111b7d8dd7";
// const unit = "metric";
//
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;
//
// https.get(url, (response) => {
//
//   response.on('data', (data) => {
//     const weatherData = JSON.parse(data); // converting data into actual JS object!!
//     const currentTemp = weatherData.main.temp;
//     const weatherDesc = weatherData.weather[0].description;
//     const icon = weatherData.weather[0].icon;
//     const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
//     // we can only have one res.send but have multiple res.write!!!!
//     res.write(`<p> The weather is currently ${weatherDesc}</p>`);
//     res.write(`<h1> The temperature in ${query} is ${currentTemp} degrees Celcius</h1> `);
//     res.write(`<img src ="${imageURL}">`);
//     res.send();
//})
  //})


app.listen(8000, () => {
  console.log("Server is running on port 8000")
})
