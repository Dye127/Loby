// pages/Scale/Scale.js
var pageNameMenu = ["利地安调式，混合利地安调式", "小调音阶", "费里吉安调式和洛克里安调式", "所有调式，和声小调式与旋律小调式", "利地安调式和混合利地安调式中的全音和变音", "旋律小调音阶，洛克里安调式和减和弦Dim","费里吉安调式，变调和减和弦","旋律小调，全音调式和降调式","第一课到第八课中所有的音阶和调式","和声小调式的衍生","两个五声音阶","所有调式 下行","和声小调式的衍生 下行"]
var PageTitle;
var listData;
var QNo;
var judgeState = new Boolean(false)
var app = getApp()
var index = 0

var count = 0//记录错题数
var currBool = new Boolean(true)//false代表一值在错题里;
var saveLoc = 0;//存储错题的位置
var waNo = new Array()//记录选错的题
var waChoo = new Array()//记录自己的选择（错选）
var copy = new Array();//copy waChoo
var waChoIn = new Array();
var waRight = new Array()//选错时，记录正确的选项
var waQues = new Array()//记录错题的mp3
var wrongTimes = new Array();
var savedFilePath
var countPlay = 0
var enter = 0
// var value //远程文件
const myAudio = wx.createInnerAudioContext()

Page({
  randomAns: function (an) {
    var answer = an.answer;
    answer.sort(function () { //打乱选项顺序
      return 0.5 - Math.random();
    })
  },
  onLoad:function(options){
    listData = require("../../service/" + app.serviceName + ".js")
    console.log(app.serviceName)
    QNo = listData.getAnswer.length//题目数量
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
    this.initData();
  },
  initData: function () {  //第一次进入
    index = Math.floor(Math.random() * QNo);
    console.log(index + "index1")
    //console.log(listData.getAnswer[index].question.title)
    this.saveToLocal(listData.getAnswer[index].question.title)
    var an = listData.getAnswer[index];//获取答案
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
    this.saveToLocal(listData.getAnswer[index].question.title)
    // console.log(listData.getAnswer[index].question.title)
    console.log(index + "index2")
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
      //answerResult:""
    })
  },
  // thrData: function () {
  //   index = Math.floor(Math.random() * QNo);
  //   console.log(index + "index3")
  //   // console.log(listData.getAnswer[index].question.title)
  //   var an = listData.getAnswer[index];//获取答案
  //   this.randomAns(an);
  //   var answer = an.answer;
  //   var question = an.question;
  //   this.setData({
  //     question: question,
  //     answer: answer,
  //     failureRe: false,
  //     success: false,
  //     failureSh: false
  //     //answerResult:""
  //   })
  // },
  onClick: function (e) {
    judgeState = true
    //获取所有选项id，为了让用户选择的选项与其他选项互斥
    var an1 = listData.getAnswer[index];//获取答案
    var question = an1.question;//获取题目
    console.log(question)
    var answer1 = an1.answer;
    var select = e.currentTarget.dataset.id;
    //选项warn或者primary
    var at = e.currentTarget.dataset.at;
    console.log(at+" pp")
    //用户选择的选项
    var item = this.getSelectAnswer(select);
    //存储所有选项的id
    //var answerResult = "回答正确"
    if (at === "warn") {  //错误答案
      // judgeState = false;
      if (currBool) {
        waNo[saveLoc] = index + 1;
        saveLoc++;
        waChoo.splice(0, waChoo.length);//清空数组 
      }
      count++;
      currBool = false;
      item.resultFlag = true;;
      //answerResult = "回答错误";
      this.setData({
        failureRe: true,
        failureSh: true,
        shAnswer: ""
      })
      app.getId = this.distinct(waNo)//答错的题目
      console.log(app.getId)
      waChoo[count - 1] = item.title
      console.log(waChoo[count - 1])
      copy = [].concat(waChoo)//js 中复制新的数组 原数组删除某个值 新复制的数组值不变
      waChoIn[saveLoc - 1] = this.distinct(copy)//对错误的题目进行去重
      app.getChooseAns = waChoIn

      waQues[saveLoc - 1] = question.title//错题的mp3
      app.getWaQues = waQues
      wrongTimes[saveLoc - 1] = [].concat(count)
      app.waTimes = wrongTimes//每道题的答错次数
    }
    if (at === "primary") {//正确答案
      item.resultFlag = true;
      index = Math.floor(Math.random() * QNo);
      console.log(index + "index")
      count = 0;
      currBool = true;
      this.setData({
        success: true,
        disabledN: false
      })
      console.log(index+"  pp")
    }

    //当修改了前段展示的数据的时候 必须要setData 让数据生效
    this.setData({
      disabled: true,
      answer: this.data.answer
    })

    //为了错题集显示正确答案
    for (var n = 0; n < answer1.length; n++) {
      var at = answer1[n].answerType;
      if (at === "primary")
        waRight[saveLoc - 1] = answer1[n].title
    }
    app.getRightAns = waRight
    // console.log(app.getRightAns + "正确选项")
  },
  //根据id获取选择的答案
  getSelectAnswer: function (id) {
    var answer = this.data.answer;
    for (var i = 0; i < answer.length; i++) {
      var item = answer[i];
      // if (item.answerType === "primary")
      // item.resultFlag = true;
      if (item.id === id) {
        return item;
      }
    }
  },
  //重新回答
  reAnswer: function () {
    this.setData({
      disabled:false
    })
    judgeState = false
    if (enter == 0)
      this.initData();
    else if (enter > 0)
      this.secData();
    // else if (index == QNo - 1)
    //   this.thrData();
  },
  showAnswer: function () {
    var an2 = listData.getAnswer[index];//获取答案
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
    enter++
    countPlay = 0
    judgeState = false
    myAudio.stop()
    //if (index < QNo - 1) {
      this.secData();
      this.setData({
        // hideNText: true,改
        disRPlay:true,
        disabledN: true
      })
    // }else if (index == QNo - 1) {
    //   this.thrData();
    //   this.setData({
    //     hideNText: true,
    //     hidePEText: true
    //   })
    // }else{
    //   this.setData({
    //     hideNText: true,
    //     hidePEText: true
    //   })
    //}
  },
  distinct: function (array) {//去重
    var temp = []; //一个新的临时数组
    for (var i = 0; i < array.length; i++) {
      if (temp.indexOf(array[i]) == -1) {
        temp.push(array[i]);
      }
    }
    return temp;
  },
  saveToLocal:function(value){
    var that = this
    // var savedFilePath
    const downloadTask = wx.downloadFile({
      url: value,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        wx.saveFile({
          tempFilePath: tempFilePath,
          success:function(res){
            savedFilePath = res.savedFilePath//本地文件地址
            console.log("本地路径：",savedFilePath)
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
    // myAudio.onPlay(() => {
    //   console.log('开始播放')
    // })
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
