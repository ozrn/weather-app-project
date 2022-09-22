const express = require("express");

// https is not needed to install using node because it is one of the native node modules which is already bundled with on node module projects.
const https = require("https");

//body-parser is a package that's going to allow us to look through the body of the post request and fetch the data based on the name of our input, which is called cityName
const bodyParser = require("body-parser");


const app = express();

// this is just the necessary code for us to be able to start parsing through the body of the post request.
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public")); // In order for our server to serve up static files like CSS and images, we need to use a specific fn of Express.That's something called static !!!




app.get("/", (req, res) => {

  res.sendFile(__dirname + "/index.html");

})

app.post("/", (req, res) => {

  const query = req.body.cityName;
  const apiKey = "f6a2d47f42a50d41875a53111b7d8dd7";
  const unit = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;

  https.get(url, (response) => {

    response.on('data', (data) => {
      const weatherData = JSON.parse(data); // converting data into actual JS object!!
      const currentTemp = weatherData.main.temp;
      const weatherDesc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
      // we can only have one res.send but have multiple res.write!!!!
      res.write(`<p> The weather is currently ${weatherDesc}</p>`);
      res.write(`<h1> The temperature in ${query} is ${currentTemp} degrees Celcius</h1> `);
      res.write(`<img src ="${imageURL}">`);
      res.send();
    })
  })

})



app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000")
})
