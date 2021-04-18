// models/Post.js

var mongoose = require('mongoose');

// schema
var surveyModelSchema = mongoose.Schema({ // 1
  surveyQuestion:{type:String, required:true},
  reply1:{type:String, required:true},
  reply2:{type:String, required:true},
  reply3:{type:String, required:true},
  reply4:{type:String, required:true},
  questionNo:{type:String, required:true},
  createdAt:{type:Date, default:Date.now}, // 2
});

// schema
var resultModel = mongoose.Schema({ // 1
  surveyQuestion:{type:String, required:true},
  reply1:{type:String, required:true},
  reply2:{type:String, required:true},
  reply3:{type:String, required:true},
  reply4:{type:String, required:true},
  questionNo:{type:String, required:true},
  createdAt:{type:Date, default:Date.now}, // 2
});


// model & export
var SurveyModel = mongoose.model('surveyModel', surveyModelSchema);
module.exports = SurveyModel;
