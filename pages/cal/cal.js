// pages/cal/cal.js
//1         +        1  =  2
//first operation second result
//都需要屏幕screen去展示效果

let screen = 0
let first = ''
let second=''
let operation=''
let result=''

let timer=null
Page({
  data: {
    name:'',
    clear:'AC',
screen,
first,
second,
operation,
result
  },
  // 数字
setNumber(e){
  if (this.timer) {
    console.log(this.timer, '获取时间')
    clearInterval(this.timer)
    screen = 0
    first = ''
    second = ''
    operation = ''
    this.timer = null
    this.setData({
      screen,
      first,
      second,
      operation
    })
  }
console.log(e.target.dataset.num)
var value=e.target.dataset.num

console.log(value)

if(this.data.operation==''){
//第一次计算结果
first+=value
screen=first
}else{
  second+=value
  screen=second
}

  if (screen.split('.').length > 2) {
    console.log('超过一个.')
    console.log(screen)
    this.goBack()
  }
  if (screen.indexOf('.') == 0) {
    screen = "0" + screen
  }

this.setData({
  first,
  second,
  screen,
  clear:'C',
  name: ''
})

},
// 加减乘除
getOperation(e){
  if (this.timer) {
    clearInterval(this.timer)
    screen = 0
    first = ''
    second = ''
    operation = ''
    this.timer = null
    this.setData({
      screen,
      first,
      second,
      operation
    })
  }
  // if (this.data.active==''){
  //   this.data.active ='active'
  // }else{
  //   this.data.active=''
  // }
 

  // if (e.mark.opera=='*'){
  //   active == '' ? 'active' : ''
  // }
  var id=e.currentTarget.id
 
 console.log(e)
  console.log(e.mark.opera)
  let operation=e.mark.opera
  this.calculator()
  this.setData({
    operation,
    name: id
  })

},
// 计算结果=
calculator(){
  if (this.timer) {
    console.log(this.timer, '获取时间')
    clearInterval(this.timer)
    screen = 0
    first = ''
    second = ''
    operation = ''
    this.timer = null
    this.setData({
      screen,
      first,
      second,
      operation
    })
  }
  console.log('运算结果')
  if(this.data.operation=='' || this.data.first==''|| this.data.second==''){
   console.log('运算错误')
    return
  }

  switch(this.data.operation){
    case '+':
    result=parseFloat(first)+parseFloat(second)
    break;
    case '-':
    result=parseFloat(first)-parseFloat(second)
    break;
    case '*':
      result = parseFloat(first) * parseFloat(second)

    break;
    case '/':
      result = parseFloat(first) / parseFloat(second)
    break;
  }
  screen=result
  first = result
  second=''
  operation=''
  this.setData({
    screen,
    first,
    second,
    operation
  })
},
// 清除
clear(){
  if (this.timer) {
    console.log(this.timer, '获取时间')
    clearInterval(this.timer)
    screen = 0
    first = ''
    second = ''
    operation = ''
    this.timer = null
    this.setData({
      screen,
      first,
      second,
      operation
    })
  }





  console.log('清除')
screen=0
first=''
second=''
operation=''
this.setData({
  screen,
  first,
  second,
  operation,
  name:'',
  clear:'AC'
})
},
//回退
goBack(){

  if (this.timer) {
    console.log(this.timer, '获取时间')
    clearInterval(this.timer)
    screen = 0
    first = ''
    second = ''
    operation = ''
    this.timer = null
    this.setData({
      screen,
      first,
      second,
      operation
    })
  }
 
console.log('回退')
  if (screen.length> 1){
//回退时判断第一次输入结果或第二次输入结果
    if (this.data.operation == ''){
  //第一次输入
  // 方法一：pop
// first=first.split('')
// first.pop()
// first=first.join('')
// screen=first

//方法二：substring
first=first.substring(0,first.length-1)
screen=first
console.log(screen)


}else{
  second=second.substring(0,second.length-1)
  screen=second

}

  }else{
    screen=0
  }
  this.setData({
    first,
    second,
    screen,
    name:''
  })
},
// 获取事件
getDate(){
  //获取当前时间，赋值给screen
 
  //setINterval
  if(this.timer){
    console.log(this.timer,'获取时间')
clearInterval(this.timer)
    screen = 0
    first = ''
    second = ''
    operation = ''
    this.timer=null
    this.setData({
      screen,
      first,
      second,
      operation
    })
  }else{
    console.log('获取timer时间')
  this.timer=setInterval(()=>{
    var date = new Date()
    
    var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    var sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() 
    console.log(hour, min, sec)
    // hour < 10 ? '0' + hour : hour
    // min < 10 ? '0' + min : min
    // sec < 10 ? '0' + sec : sec
    var time = hour + ':' + min + ':' + sec

    screen = time
    console.log(screen)
    this.setData({
      screen,
      name: ''
    })
  },1000)
  }
 
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getDate()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})