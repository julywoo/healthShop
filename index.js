var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

var mongoosePW = require("./config/userInfo.json"); //PW는 개인정보이므로 따로 관리하도록 하겠습니다.
//DB Setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
  { useUnifiedTopology: true, useNewUrlParser: true }
);

var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function() {
  console.log("Connected to mongod server");
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// Routes
app.use('/', require('./routes/home'));
app.use('/survey', require('./routes/survey'));
app.use('/contact', require('./routes/contact'));

// Port setting
var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
