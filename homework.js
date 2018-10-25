//  Import the express library
const express = require('express')
var bodyParser = require('body-parser')
var router = express.Router();

//  Create an instance of express
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/form.html')
})

router.get('/', function(req, res, next) {
  request({
    uri: 'https://od-api-demo.oxforddictionaries.com:443/api/v1/domains/{source_domains_language}/{target_domains_language}',
    qs: {
      app_id: '5037d509',
      app_key: '4dc1aebaa63721f0f8e79a55e2514bc7',
      source_domains_language: first_name,
      target_domains_language: last_name
    }
  }).pipe(res);
});

app.post("/", (req, res) => {
  let firstname = req.body.firstname
  let lastname = req.body.lastname
  let message = router
  res.send(message)
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
