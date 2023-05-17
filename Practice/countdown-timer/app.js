const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    ];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    ];
const info = document.querySelector('.info');
const timer = document.querySelector('.timer');
const items = document.querySelectorAll('.timer-container h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
//   const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

  // let futureDate = new Date(2020, 3, 24, 11, 30, 0);
const futureDate = new Date(2023, 5, 30, 9, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// 시작일을 2023년 2월 27일 월요일 9:00am으로 설정
const startDate = new Date(2023, 1, 27, 9, 0, 0);

// 미래 날짜와 시작일 사이의 총 시간 간격을 계산
const totalDuration = futureDate.getTime() - startDate.getTime();
// 퍼센테이지 바를 나타내는 요소를 찾아 할당
const progressBar = document.getElementById('progressBar');
// 퍼센테이지 바 업데이트 함수
function updateProgressBar() {
  const currentTime = new Date().getTime(); // 현재 시간 가져오기
  const elapsedTime = currentTime - startDate.getTime(); // 시작일로부터 경과한 시간
  
  // 경과 시간의 퍼센트 계산
  const percentage = Math.floor((elapsedTime / totalDuration) * 100);
  
  // 바 업데이트
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${percentage}%`;
}
// 일정 간격으로 바 업데이트
setInterval(updateProgressBar, 1000); // 1초마다 업데이트




let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
//   info.textContent = `info ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
        return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        timer.innerHTML = `<h4 class="expired">sorry, this info has expired!</h4>`;
    }   
}
  // countdown;
    let countdown = setInterval(getRemaindingTime, 1000);

  //set initial values
    getRemaindingTime();