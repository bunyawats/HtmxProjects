const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// Require the upload middleware
const upload = require('./upload');

module.exports = upload;

var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
   res.send('<h2>Welcome to the Node Hypermedia API</h2>');
})

app.post('/message', function (req, res) {

   setTimeout(() => {
      res.send(`<div><h3>Hello World</h3></div>`);
   }, 1000);

})


app.post('/upload', upload.single('file'), async (req, res) => {

   const filePath =  req.file.path;
   console.log(`file path: ${filePath}`);

   setTimeout(() => {
      res.send(`<b> Upload Successful</b>: ${filePath}`);
   }, 500);

})

app.post('/oob', async (req, res) => {

   setTimeout(() => {
      res.send(`<div>
      <h3 id="target2" hx-swap-oob="true" >Hello World</h3>
      <h3 id="target3" hx-swap-oob="true" >Hello 3</h3>
      This go to main target
      </div>`);
   }, 1000);

})

app.post('/seleting', async (req, res) => {

   setTimeout(() => {
      res.send(`<div>
      <h3 id="target2"  >Hello World Seleting</h3>
      <h3 id="target3" hx-swap-oob="true" >Hello 3</h3>
      This go to main target
      </div>`);
   }, 1000);

})



app.post('/bigbox', function (req, res) {

   res.send(`<div id="growing-box" class="grow"
   style="height: 300px; width: 300px;  background-color: blue;" >
   Small Box
</div>`);

})


var server = app.listen(1330, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
