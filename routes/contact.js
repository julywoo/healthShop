// routes/posts.js

var express  = require('express');
var router = express.Router();
var SurveyModel = require('../models/SurveyModel');

// Index
// New
router.get('/insert', function(req, res){
  res.render('survey/surveyNew');
});

// Index
router.get('/', function(req, res){
  res.render('contact/contact');
});


// create
router.post('/', function(req, res){
  console.log('cc:');
  console.log('cc:'+req.body.reply1);
  SurveyModel.create(req.body, function(err, surveys){
    if(err) return res.json(err);
    res.redirect('/survey');
  });
});


// create
router.post('/result', function(req, res){
  var result1 = 0;
  var result2 = 0;
  var result3 = 0;
  var result4 = 0;

  if (req.body.q1 == '1') {
    result1 += 1;
  }else if (req.body.q1 == '2'){
    result2 += 1;
  }else if (req.body.q1 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q2 == '1') {
    result1 += 1;
  }else if (req.body.q2 == '2'){
    result2 += 1;
  }else if (req.body.q2 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q3 == '1') {
    result1 += 1;
  }else if (req.body.q3 == '2'){
    result2 += 1;
  }else if (req.body.q3 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q4 == '1') {
    result1 += 1;
  }else if (req.body.q4 == '2'){
    result2 += 1;
  }else if (req.body.q4 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q4 == '1') {
    result1 += 1;
  }else if (req.body.q4 == '2'){
    result2 += 1;
  }else if (req.body.q4 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q5 == '1') {
    result1 += 1;
  }else if (req.body.q5 == '2'){
    result2 += 1;
  }else if (req.body.q5 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q6 == '1') {
    result1 += 1;
  }else if (req.body.q6 == '2'){
    result2 += 1;
  }else if (req.body.q6 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q7 == '1') {
    result1 += 1;
  }else if (req.body.q7 == '2'){
    result2 += 1;
  }else if (req.body.q7 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q8 == '1') {
    result1 += 1;
  }else if (req.body.q8 == '2'){
    result2 += 1;
  }else if (req.body.q8 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q9 == '1') {
    result1 += 1;
  }else if (req.body.q9 == '2'){
    result2 += 1;
  }else if (req.body.q9 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q10 == '1') {
    result1 += 1;
  }else if (req.body.q10 == '2'){
    result2 += 1;
  }else if (req.body.q10 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q11 == '1') {
    result1 += 1;
  }else if (req.body.q11 == '2'){
    result2 += 1;
  }else if (req.body.q11 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q12 == '1') {
    result1 += 1;
  }else if (req.body.q12 == '2'){
    result2 += 1;
  }else if (req.body.q12 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q13 == '1') {
    result1 += 1;
  }else if (req.body.q13 == '2'){
    result2 += 1;
  }else if (req.body.q13 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q14 == '1') {
    result1 += 1;
  }else if (req.body.q14 == '2'){
    result2 += 1;
  }else if (req.body.q14 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q15 == '1') {
    result1 += 1;
  }else if (req.body.q15 == '2'){
    result2 += 1;
  }else if (req.body.q15 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q16 == '1') {
    result1 += 1;
  }else if (req.body.q16 == '2'){
    result2 += 1;
  }else if (req.body.q16 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q17 == '1') {
    result1 += 1;
  }else if (req.body.q17 == '2'){
    result2 += 1;
  }else if (req.body.q17 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q18 == '1') {
    result1 += 1;
  }else if (req.body.q18 == '2'){
    result2 += 1;
  }else if (req.body.q18 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q19 == '1') {
    result1 += 1;
  }else if (req.body.q19 == '2'){
    result2 += 1;
  }else if (req.body.q19 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q20 == '1') {
    result1 += 1;
  }else if (req.body.q20 == '2'){
    result2 += 1;
  }else if (req.body.q20 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q21 == '1') {
    result1 += 1;
  }else if (req.body.q21 == '2'){
    result2 += 1;
  }else if (req.body.q21 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q22 == '1') {
    result1 += 1;
  }else if (req.body.q22 == '2'){
    result2 += 1;
  }else if (req.body.q22 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q23 == '1') {
    result1 += 1;
  }else if (req.body.q23 == '2'){
    result2 += 1;
  }else if (req.body.q23 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q24 == '1') {
    result1 += 1;
  }else if (req.body.q24 == '2'){
    result2 += 1;
  }else if (req.body.q24 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q25 == '1') {
    result1 += 1;
  }else if (req.body.q25 == '2'){
    result2 += 1;
  }else if (req.body.q25 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  if (req.body.q26 == '1') {
    result1 += 1;
  }else if (req.body.q26 == '2'){
    result2 += 1;
  }else if (req.body.q26 == '3'){
    result3 += 1;
  }else{
    result4 += 1;
  }

  var results = [result1,result2,result3,result4];
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);

  var max = results.reduce(function(a,b){
    return Math.max(a,b);
  });
  var maxVal;
  var resultDesc;
  var resultIndicator;
  var resultDisease;

  if (max == result1) {
    maxVal = '태음인';
    resultDesc = '소화 및 흡수기능이 좋은 면 순환 및 배출 기능이 약해 몸이 쉽게 무거워지거나 체중이 증가하기 쉬운 체질';
    resultIndicator = '땀이 충분히 나는 경우, 체중 증가가 심하지 않은 경우, 규칙적인 식습관을 가진 경우';
    resultDisease = '과민성 장 증후군, 과체중 및 비만, 호흡기 질환, 만성피로 증후군, 손발저림 등';
  }else if (max == result2){
    maxVal = '소음인';
    resultDesc = '따뜻한 기운이 약해 몸이 차가워지기 쉬우며, 허약해지기 쉬운 체질';
    resultIndicator = '소화가 잘 되는 경우, 땀이 적게 나는 경우, 배변습관이 잘 유지되는 경우';
    resultDisease = '소화기능장애, 수족냉증, 편두통, 어지럼증, 잦은 피로감 등';
  }else if (max == result3){
    maxVal = '소양인';
    resultDesc = '몸에 열이 많으며, 감정 복이 심한 편으로 신경과민 증상이 생기기 쉬운 체질';
    resultIndicator = '잠을 잘 자는 경우, 변비나 설사가 없는 경우, 소변이 시원하게 나가는 경우';
    resultDisease = '수면장애, 감정장애, 자율신경 과민증상, 역류성 식도질환, 피부발진, 이명증, 안구건조증 등';
  }else{
    maxVal = '태양인';
    resultDesc = '몸 밖으로 빠져나가는 기운이 많아, 수분, 혈액이 부족해져 몸 안이 건조해지기 쉬운 체질';
    resultIndicator = '소변이 시원하게 나가는 경우, 땀이 많이 않은 경우, 구역 구토가 없는 경우';
    resultDisease = '신경과민 증상, 하체에 기운이 빠지는 증상, 헛구역질, 구토증, 변비 등';
  }
  console.log('resutl:'+maxVal+', result value:'+ max);
  res.render('survey/surveyResult', {
    maxVal : maxVal,
    resultDesc : resultDesc,
    resultIndicator : resultIndicator,
    resultDisease : resultDisease});

});

module.exports = router;
