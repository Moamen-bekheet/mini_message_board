var express = require('express');
var router = express.Router();

const messages = [{
  text:"Hi there!",
  user:"MoamenBazooka",
  added: new Date()
},
{
  text:"Hello",
  user:"OmarKalashinkov",
  added: new Date()
}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messagesArr: messages });
});

router.get("/new", (req, res, next)=>{
  res.render("form");
})

router.post("/new", (req, res, next)=>{
  messages.push({text: req.body.text, user: req.body.user, added: new Date()});
  res.redirect('/')
})

module.exports = router;
