let messages = () => {
  let hour = new Date().getHours()
  switch (hour) {
    case 6:
    case 7:
    case 8:
    case 9:
      return "早上好，这么早就醒了，住的地方离公司远了啊"
    case 10:
    case 11:
      return '刚到公司？歇会，一会该吃饭了'
    case 12:
    case 13:
      return '中午好，不吃饭也要把活干了'
    case 14:
    case 15:
    case 16:
    case 17:
      return '下午好,工作一下午了，歇会？'
    case 18:
    case 19:
      return '还没下班，没良心的老板'
    case 20:
    case 21:
      return '晚上好，還沒下班，把老闆打一頓吧'
    case 22:
    case 23:
      return '擦，還不下班，這公司還要待下去嗎'
    case 0:
    case 1:
    case 2:
    case 3:
      return '凌晨了，看什麼小電影呢'
    case 4:
    case 5:
      return '這個點，隔壁大爺又他媽起床晨練了'
  }
}

//暴露出去
module.exports = {
  messages,
}