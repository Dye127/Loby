function JSpath(listData,TitleName) {

  var QNo = listData.getAnswer.length//题目数量
  var app = getApp()
  var reDo = 0
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

  Page({
    audioPlay: function () {
      this.setData({
        play_end: " ",
        audioAction: {
          method: 'play'
        }
      });
    },
    onShow: function (options) {
      var titleName = TitleName;
      this.setData({
        disabled: true,
        "pageData":{
          titleName: titleName
        }
      })
      this.initData();
    },
    initData: function () {  //第一次进入
      var an = listData.getAnswer[index];//获取答案
      var answer = an.answer;
      var question = an.question;
      answer.sort(function () { //打乱选项顺序
        return 0.5 - Math.random();
      })
      reDo++
      if (reDo == 1) {
        disabled: true
        this.setData({
          disabled: true
        })
      }
      else if (reDo != 1) {
        this.setData({
          disabled: false
        })
      }
      this.setData({
        question: question,
        answer: answer,
        failureRe: false,
        success: false,
        viewSet: false,
        failureSh: false,
        //disabled: true  设为true 多次进入页面 选项为禁用 否则 多次进入 可以点击
        //answerResult:""
      })
    },
    secData: function () {
      var an = listData.getAnswer[index];//获取答案
      console.log("index:" + index)
      var answer = an.answer;
      var question = an.question;
      reDo++
      if (reDo == 1) {
        disabled: true
        this.setData({
          disabled: true
        })
      }
      else if (reDo != 1) {
        this.setData({
          disabled: false
        })
      }
      this.setData({
        question: question,
        answer: answer,
        failureRe: false,
        success: false,
        failureSh: false
        //answerResult:""
      })
    },
    thrData: function () {
      var an = listData.getAnswer[index];//获取答案
      console.log("last index:" + index)
      var answer = an.answer;
      var question = an.question;
      reDo++
      if (reDo == 1) {
        disabled: true
        this.setData({
          disabled: true
        })
      }
      else if (reDo != 1) {
        this.setData({
          disabled: false
        })
      }
      this.setData({
        question: question,
        answer: answer,
        failureRe: false,
        success: false,
        failureSh: false
        //answerResult:""
      })
    },
    playEnd: function () {
      this.setData({
        play_end: "播放结束，可选择答案或播放",
        disabled: false,
        hidePEText: false,
        viewSet: true
      })
      if (index != QNo - 1) {
        this.setData({
          hideNText: false, //每次播放完后  按钮下一题 和view播完 是可显示的
        })
      }
      else if (index == QNo - 1) {
        this.setData({
          hideNText: true, //每次播放完后  按钮下一题 和view播完 是可显示的
          //hidePEText: false
        })
      }
    },
    onClick: function (e) {
      //获取所有选项id，为了让用户选择的选项与其他选项互斥
      var an1 = listData.getAnswer[index];//获取答案
      var question = an1.question;//获取题目
      var answer1 = an1.answer;
      var select = e.currentTarget.dataset.id;
      //选项warn或者primary
      var at = e.currentTarget.dataset.at;
      //用户选择的选项
      var item = this.getSelectAnswer(select);
      //存储所有选项的id
      //var answerResult = "回答正确"
      if (at === "warn") {  //错误答案
        if (currBool) {
          waNo[saveLoc] = index + 1;
          saveLoc++;
          waChoo.splice(0, waChoo.length);//清空数组 
        }
        count++;
        currBool = false;
        reDo++;
        item.resultFlag = true;;
        //answerResult = "回答错误";
        this.setData({
          failureRe: true,
          failureSh: true,
          shAnswer: ""
        })
        app.getId3 = this.distinct(waNo)//答错的题目
        console.log(app.getId3)
        waChoo[count - 1] = item.title
        console.log(waChoo[count - 1])
        copy = [].concat(waChoo)//js 中复制新的数组 原数组删除某个值 新复制的数组值不变

        // console.log(copy)
        // console.log("-------")
        // console.log(this.distinct(copy))

        waChoIn[saveLoc - 1] = this.distinct(copy)//对错误的题目进行去重
        app.getChooseAns3 = waChoIn
        console.log("----")
        console.log(app.getChooseAns)

        waQues[saveLoc - 1] = question.title//错题的mp3
        app.getWaQues3 = waQues
        wrongTimes[saveLoc - 1] = [].concat(count)
        app.waTimes3 = wrongTimes//每道题的答错次数
      }
      if (at === "primary") {//正确答案
        item.resultFlag = true;
        index++;//应该在这里index++
        count = 0;
        currBool = true;
        this.setData({
          success: true
        })
      }

      //当修改了前段展示的数据的时候 必须要setData 让数据生效
      this.setData({
        disabled: true,
        answer: this.data.answer
        //answerResult: answerResult
      })


      //为了错题集显示正确答案
      for (var n = 0; n < answer1.length; n++) {
        var at = answer1[n].answerType;
        if (at === "primary")
          waRight[saveLoc - 1] = answer1[n].title
      }
      app.getRightAns3 = waRight
      console.log(app.getRightAns3 + "正确选项")
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
      if (index == 0)
        this.initData();
      else if (index < QNo - 1)
        this.secData();
      else if (index == QNo - 1)
        this.thrData();
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
      // index++; 不是index++ 应该是答对了 就到下一题
      reDo = 0;

      if (index < QNo - 1) {
        console.log("1111")
        this.secData();
        this.setData({
          hideNText: true,
          hidePEText: true,
        })
        console.log("444")
      }
      if (index == QNo - 1) {
        console.log(QNo - 1)
        console.log("555")
        this.thrData();
        this.setData({
          hideNText: true,
          hidePEText: true
        })
        console.log("777")
      }
    },
    distinct: function (array) {//去重
      var temp = []; //一个新的临时数组
      for (var i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) == -1) {
          temp.push(array[i]);
        }
      }
      return temp;
    }
  })
}
module.exports = {
  JSpath: JSpath
}