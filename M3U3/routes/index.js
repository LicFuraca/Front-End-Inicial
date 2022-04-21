var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var nodemailer = require('nodemailer');
const { getMaxListeners } = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', async(req, res, next)=> {
  var Name = req.body.Name;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var Consulta = req.body.Consulta;

  var obj = {
    to: 'mediaz@megatlon.com.ar',
    subject: 'Contacto, "lo de Ruffo"',
    html: Name + ' ' + lastName + ' ' + 'tiene la siguiente consulta: <br>' + Consulta + '<br> su mail es: ' + email
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(obj);

  res.render('index', {
    message: 'Mail enviado correctamente',
  });
})

module.exports = router;