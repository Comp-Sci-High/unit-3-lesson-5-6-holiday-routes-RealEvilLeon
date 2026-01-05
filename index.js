const express = require("express")
const app = express()


//  these lines of code set up the server and tell js to look in tyhe public folder for files
app.use(express.static(__dirname + "/public"))

// these lines of code set up the different routes for the server. This one this telling you to grab the file in public for index.html when the user goes to "/" aka the deafault page that loads when thme server starts.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

// these lines of code set up the different routes for the server. This one this telling you to grab the file in public for about.html when the user goes to "/about"

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
})

// these lines of code set up the different routes for the server. This one this telling you to grab the file in public for foodGenerator.html when the user goes to "/food-generator"

app.get("/food-generator", (req, res) => {
  res.sendFile(__dirname + "/public/foodGenerator.html");
})


//  these lines of code actually run the server
app.listen(3000, () => {
  console.log(`Holiday Server is Running!`)
});


