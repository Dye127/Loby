var pageNameMenu = ["利地安调式，混合利地安调式", "小调音阶", "费里吉安调式和洛克里安调式", "所有调式，和声小调式与旋律小调式", "利地安调式和混合利地安调式中的全音和变音", "旋律小调音阶，洛克里安调式和减和弦Dim","费里吉安调式，变调和减和弦","旋律小调，全音调式和降调式","第一课到第八课中所有的音阶和调式","和声小调式的衍生","两个五声音阶","所有调式 下行","和声小调式的衍生 下行"]
var PageTitle;
var listData;
var QNo;
var judgeState = new Boolean(false)
var app = getApp()
var index = 0

var count = 0
var countQ = 0;
var currBool = new Boolean(true);
var saveLoc = 0;
var waNo = new Array()
var waChoo = new Array()
var copy = new Array();
var waChoIn = new Array();
var waRight = new Array()
var waQues = new Array()
var wrongTimes = new Array();
var savedFilePath
var countPlay = 0
var enter = 0
const myAudio = wx.createInnerAudioContext()

Page({
  randomAns: function (an) {
    var answer = an.answer;
    answer.sort(function () { 
      return 0.5 - Math.random();
    })
  },
  onLoad:function(options){
    listData = require("../../service/" + app.serviceName + ".js")
    QNo = listData.getAnswer.length
    switch (app.menu) {
      case 1: 
        PageTitle = pageNameMenu[0]; break;
      case 2: 
        PageTitle = pageNameMenu[1]; break;
      case 3: 
        PageTitle = pageNameMenu[2]; break;
      case 4: 
        PageTitle = pageNameMenu[3]; break;
      case 5: 
        PageTitle = pageNameMenu[4]; break;
      case 6: 
        PageTitle = pageNameMenu[5]; break;
      case 7:
        PageTitle = pageNameMenu[6]; break;
      case 8:
        PageTitle = pageNameMenu[7]; break;
      case 9:
        PageTitle = pageNameMenu[8]; break;
      case 10:
        PageTitle = pageNameMenu[9]; break;
      case 11:
        PageTitle = pageNameMenu[10]; break;
      case 12:
        PageTitle = pageNameMenu[11]; break;
      case 13:
        PageTitle = pageNameMenu[12]; break;
    }
    
    this.setData({
      disabled: true,
      PageTitle: PageTitle,
      disabledN:true
    })
    index = Math.floor(Math.random() * QNo);
    this.saveToLocal(listData.getAnswer[index].question.title)
    this.initData();
  },
  initData: function () { 
    var an = listData.getAnswer[index];
    this.randomAns(an);
    var answer = an.answer;
    var question = an.question;
    this.setData({
      question: question,
      answer: answer,
      disRPlay:true,
      failureRe: false,
      success: false,
      viewSet: false,
      failureSh: false
    })
  },
  secData: function () {
    var an = listData.getAnswer[index];//获取答案
    this.randomAns(an);
    var answer = an.answer;
    var question = an.question;
    this.setData({
      question: question,
      answer: answer,
      failureRe: false,
      success: false,
      failureSh: false
    })
  },
  onClick: function (e) {
    var that = this
    console.log(countQ+" pp")
    judgeState = true
    var an1 = listData.getAnswer[index];
    var question = an1.question;
    var answer1 = an1.answer;
    var select = e.currentTarget.dataset.id;
    var at = e.currentTarget.dataset.at;
    var item = this.getSelectAnswer(select);
    if (at === "warn") {  
      if (currBool) {
        waNo[saveLoc] = index + 1;
        saveLoc++;
        waChoo.splice(0, waChoo.length);
      }
      count++;
      currBool = false;
      item.resultFlag = true;
      this.setData({
        failureRe: true,
        failureSh: true,
        shAnswer: ""
      })
      app.getId = this.distinct(waNo)
      waChoo[count - 1] = item.title
      copy = [].concat(waChoo)
      waChoIn[saveLoc - 1] = this.distinct(copy)
      app.getChooseAns = waChoIn

      waQues[saveLoc - 1] = question.title
      app.getWaQues = waQues
      wrongTimes[saveLoc - 1] = [].concat(count)
      app.waTimes = wrongTimes
    }
    if (at === "primary") {
      countQ++;
      item.resultFlag = true;
      index = Math.floor(Math.random() * QNo);
      count = 0;
      currBool = true;
      this.setData({
        success: true,
        disabledN: false
      })
    }
    this.setData({
      disabled: true,
      answer: this.data.answer
    })
    if(countQ == 8){
      myAudio.stop();
      wx.showModal({
        title: '您已答满8题',
        content: '继续答题，或返回主页面',
        success:function(res){
          if(res.cancel)
            wx.navigateBack()
          else{
            that.saveToLocal(listData.getAnswer[index].question.title)
            countQ = 0
            enter++
            countPlay = 0
            judgeState = false
            that.secData();
            that.setData({
              disRPlay: true,
              disabledN: true
            })
          }
        }
      })
    }
    for (var n = 0; n < answer1.length; n++) {
      var at = answer1[n].answerType;
      if (at === "primary")
        waRight[saveLoc - 1] = answer1[n].title
    }
    app.getRightAns = waRight
  },
  getSelectAnswer: function (id) {
    var answer = this.data.answer;
    for (var i = 0; i < answer.length; i++) {
      var item = answer[i];
      if (item.id === id) {
        return item;
      }
    }
  },
  reAnswer: function () {
    this.setData({
      disabled:false
    })
    judgeState = false
    if (enter == 0)
      this.initData();
    else if (enter > 0)
      this.secData();
  },
  showAnswer: function () {
    var an2 = listData.getAnswer[index];
    var answer2 = an2.answer;
    for (var n = 0; n < answer2.length; n++) {
      var at = answer2[n].answerType;
      if (at === "primary")
        this.setData({
          shAnswer: ":" + answer2[n].title
        })
    }
  },
  nextQuestion: function () {
    this.saveToLocal(listData.getAnswer[index].question.title)
    enter++
    countPlay = 0
    judgeState = false
    myAudio.stop()
    this.secData();
    this.setData({
      disRPlay:true,
      disabledN: true
    })
  },
  distinct: function (array) {
    var temp = []; 
    for (var i = 0; i < array.length; i++) {
      if (temp.indexOf(array[i]) == -1) {
        temp.push(array[i]);
      }
    }
    return temp;
  },
  saveToLocal:function(value){
    var that = this
    const downloadTask = wx.downloadFile({
      url: value,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        wx.saveFile({
          tempFilePath: tempFilePath,
          success:function(res){
            savedFilePath = res.savedFilePath
          }
        })
      }
    })
  },
  voicePlay:function(){
    countPlay++
    if (countPlay == 1){
      myAudio.autoplay = true
      myAudio.src = savedFilePath
    }else{
      myAudio.seek(0)
    }
    if(judgeState == true)
      this.setData({
        disbled:true
      })
    else{
      this.setData({
        disabled:false,
        disabledAudio:false
      })  
    }
  },
  onUnload: function () {
    enter = 0
    countQ = 0
    countPlay = 0
    judgeState = false
    myAudio.stop()
    wx.getSavedFileList({
      success: function (res) {
        if(res.fileList.length > 0){
          wx.removeSavedFile({   
            filePath: res.fileList[0].filePath
          })
        }
      }
    })
  }
})
