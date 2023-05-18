const today = new Date().getTime();
const oneDay = 1000 * 60 * 60 * 24 ;
const oneDayLater = new Date(today + oneDay)
const twoDayLater = new Date(today + oneDay * 2)
const threeDayLater = new Date(today + oneDay * 3)

console.log(oneDayLater, twoDayLater, threeDayLater);