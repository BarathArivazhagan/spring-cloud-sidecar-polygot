const express = require('express')
const app = express()
const port = 3000
app.get(['/','/home'], (req, res) => {
    res.send('WELCOME TO WALMART NODE EXPRESS APPLICATION !');
  
  });  

app.get('/health', (req, res) => {
     
    console.log("Health json is called ");
    res.json({"status":"UP"});
  
  });  
app.listen(port, () => console.log(`app listening on port ${port}!`))