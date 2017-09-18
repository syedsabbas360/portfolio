const express = require('express');
const mailer = require('express-mailer');
const app = express();

// mailer.extend(app, {
//   from: 'no-reply@example.com',
//   host: 'smtp.gmail.com', // hostname
//   secureConnection: true, // use SSL
//   port: 465, // port for secure SMTP
//   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
//   auth: {
//     user: 'webdevhoustonteam@gmail.com',
//     pass: 'frontend'
//   }
// });


app.set('views', __dirname + '/views');
app.use(express.static('assets'))

app.get('/', function (req, res, next) {
  return res.sendFile(__dirname + '/views/index.html');
});



app.listen(3000, function(){
  console.log("We're live!")
})
