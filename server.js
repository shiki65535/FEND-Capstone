const projectData = {};

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

const port = 8080;
const server = app.listen(port, () => {
    console.log(`you are runining with ${port} port.`)
});


//GET
app.get('/all', (req, res) => {
    res.send(projectData);
    console.log('GET request to the homepage');
});

//POST
app.post('/addGeo', (req, res) =>{
  console.log(req.body)
  projectData.location = req.body.location;
  projectData.country = req.body.country;
  projectData.startDate = req.body.startDate;
  projectData.days = req.body.days;
  projectData.long = req.body.long;
  console.log('GPOST request to the homepage')
  res.send({msg:"GPOST RECEIVED"});
});

app.post('/addWeather', (req, res) =>{
  console.log(req.body)
  projectData.temprature = req.body.temprature;
  projectData.icon = req.body.icon;
  console.log('WPOST request to the homepage')
  res.send({msg:"WPOST RECEIVED"});
});

app.post('/addPix', (req, res) =>{
  console.log(req.body)
  projectData.pix = req.body.pix;
  console.log('PPOST request to the homepage')
  res.send({msg:"PPOST RECEIVED"});
});
