const express = require('express'); // Loading the express module on our server
const app = express(); // Creates a new instance of express on our server


// app.get('/', function(req, res) { 
//   // when a request comes in at localhost:3000, it will respond 
//   // display 'Hello World!'
//   res.send('Hello World!');
// });

// app.get('/greeting', (req, res) =>{
//     res.send('Hey, WDI 19!')
// } )

// app.get('/rihanna', (req, res) =>{
//     var work = "work "
//     res.send(work.repeat(6))
// })

// app.get("/:name", function(req, res){
//     console.log(req.params);
//     console.log(req.route);
//     console.log(req.query);
//     res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name} ${req.query.last_name}.`);
//   });

//   app.get("/:sightings", function(req, res){
//     console.log(req.params);
//     console.log(req.route);
//     console.log(req.query);
//     res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name} ${req.query.last_name}.`);
//   });

//   app.get('/sightings', (req, res) => {
//       res.send(`How many UFO sightings do you think there are in ${req.query.state}? ${req.query.sights}.`)
//   })

// app.get('/bigfoot', (req, res) => {
//     if(req.query.blurry == "true") {
//         res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out of focus monster roaming the countryside. Run! He's fuzzy! Get out of there!")
//     } 
//     else {
//         res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with scientists presenting reams of evidence.")
// }
// })

// app.get('/bigfoot', function(req, res){
//     console.log(req.route); //just to checkout the server logs
//     console.log(req.query); //just to checkout the server logs
//     if (req.query.blurry == "true") {
//       res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside! Run! He's fuzzy! Get out of there!");
//     } 
//     else {
//       res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.");
//     }
//   });

app.get('/hello/:name', function(req, res) {
    res.send({params: req.params, queries: req.query});
  });

// app.get('/favorite/:noun', function(req, res) {
//     if (req.query[req.params.noun]) {
//       res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}.`);
//     } else {
//       res.send(`I have a favorite ${req.params.noun}.`);
//     }
//     console.log({params: req.params, queries: req.query});
//   });
  

  

const port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
  // tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port ' + port);
}); // actualizing the line above