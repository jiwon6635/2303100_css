const apiKey = '706f23fa6a764b35fcb03e07d6929ac9';
const locButton = document.querySelector('.loc-button');
const todayInfo = document.querySelector('.today-info');
const todayWeatherIcon = document.querySelector('.today-weather i');
const todayTemp = document.querySelector('.weather-temp');
const daysList = document.querySelector('.days-list');

const weatherIconMap = {
    '01d': 'sun',
    '01n': 'moon',
    '02d': 'sun',
    '02n': 'moon',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'cloud',
    '04n': 'cloud',
    '09d': 'cloud-rain',
    '09n': 'cloud-rain',
    '10d': 'cloud-rain',
    '10n': 'cloud-rain',
    '11d': 'cloud-lightning',
    '11n': 'cloud-lightning',
    '13d': 'cloud-snow',
    '13n': 'cloud-snow',
    '50d': 'water',
    '50n': 'water'
};

// 지정된 위치의 날씨 데이터 가져오기
function fetchWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl).then(response => response.json()).then(data => {
      // todays info 업데이트
      const todayWeather = data.list[0].weather[0].description;
      const todayTemperature = `${Math.round(data.list[0].main.temp)}°C`;
      const todayWeatherIconCode = data.list[0].weather[0].icon;

      todayInfo.querySelector('h2').textContent = new Date().toLocaleDateString('en', { weekday: 'long' });
      todayInfo.querySelector('span').textContent = new Date().toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' });
      todayWeatherIcon.className = `bx bx-${weatherIconMap[todayWeatherIconCode]}`;
      todayTemp.textContent = todayTemperature;

      // "left-info" section에 위치 및 날씨 설명 업데이트
      const locationElement = document.querySelector('.today-info > div > span');
      locationElement.textContent = `${data.city.name}, ${data.city.country}`;

      const weatherDescriptionElement = document.querySelector('.today-weather > h3');
      weatherDescriptionElement.textContent = todayWeather;
      
      // 날씨에 따라 이미지 변경
      const leftInfoElement = document.querySelector('.left-info');
      const mainweather = data.list[0].weather[0].main;

      if (mainweather ==='Clouds') {
        leftInfoElement.style.backgroundImage ='url("bg/clouds.jpg")';
      } else if (mainweather ==='Clear') {
        leftInfoElement.style.backgroundImage = 'url("bg/clear.jpg")';
      } else if (mainweather ==='Thunderstorm') {
        leftInfoElement.style.backgroundImage = 'url("bg/thunderstorm.jpg")';
      } else if (mainweather ==='Rain') {
        leftInfoElement.style.backgroundImage = 'url("bg/rain.jpg")';
      } else if (mainweather ==='Snow') {
        leftInfoElement.style.backgroundImage = 'url("bg/snow.jpg")';
      } else {
        leftInfoElement.style.backgroundImage = 'url("bg/default.jpg")';
      }
      // "day-info" section에 오늘 정보 업데이트
      const todayPrecipitation = `${data.list[0].pop}%`;
      const todayHumidity = `${data.list[0].main.humidity}%`;
      const todayWindSpeed = `${data.list[0].wind.speed} km/h`;

      const dayInfoContainer = document.querySelector('.day-info');
      dayInfoContainer.innerHTML = ` 
        <div>
          <span class="title">PRECIPITATION</span>
          <span class="value">${todayPrecipitation}</span>
        </div>
        <div>
          <span class="title">HUMIDITY</span>
          <span class="value">${todayHumidity}</span>
        </div>
        <div>
          <span class="title">WIND SPEED</span>
          <span class="value">${todayWindSpeed}</span>
        </div>
      `;
      // 현재 시간을 나타내는 객체 생성
      const today = new Date();
      // 첫 번째 항목 제외 => 나머지 데이터를 새 배열에 저장 (다음날 부터의 정보 다루기)
      const nextDaysData = data.list.slice(1);
      // 중복을 제거하기 위한 빈 객체 생성
      const uniqueDays = new Set();

      let count = 0;
        // 날씨 정보를 표시할 요소의 내용을 초기화
        daysList.innerHTML = '';
        
        // nextDaysData 배열의 각 dayData 항목에 대해 반복
        for (const dayData of nextDaysData) {

            // 데이터의 날짜 및 시간 정보를 가져와서 Date 객체로 변환
            const forecastDate = new Date(dayData.dt_txt);

            // 축약된 요일 이름 생성
            const dayAbbreviation = forecastDate.toLocaleDateString('en', { weekday: 'short' });
            // 온도 가져와서 반올림 후 표시
            const dayTemp = `${Math.round(dayData.main.temp)}°C`;
            // 날씨 아이콘 코드 
            const iconCode = dayData.weather[0].icon;

            // 날씨 데이터를 반복하면서 각 날짜가 중복되는 날짜인지 확인 => 오늘 날짜 제외
            // 현재 반복 중인 날짜의 요일이 uniqueDays Set에 이미 추가되지 않고
            // 해당 날짜가 오늘의 날짜와 다르다면 실행
            if (!uniqueDays.has(dayAbbreviation) && forecastDate.getDate() !== today.getDate()) {
              // 현재 반복중인 날짜의 요일을 dayAbbreviation 변수에서 가져와 uniqueDays Set에 추가
                uniqueDays.add(dayAbbreviation);
                
                daysList.innerHTML += `
                    <li>
                        <i class='bx bx-${weatherIconMap[iconCode]}'></i>
                        <span>${dayAbbreviation}</span>
                        <span class="day-temp">${dayTemp}</span>
                    </li>
                `;
                count++;
            }

            // 4일치 날씨 보여줌
            if (count === 4) break;
        }
    }).catch(error => {
        alert(`Error fetching weather data: ${error} (Api Error)`);
    });
}

// 문서가 로드 되었을 때, 기본위치 서울의 데이터를 표시
document.addEventListener('DOMContentLoaded', () => {
    const defaultLocation = 'Seoul';
    fetchWeatherData(defaultLocation);
});

// 버튼 클릭되면 위치를 입력받고 데이터를 가져와 표시
locButton.addEventListener('click', () => {
    const location = prompt('Enter a location :');
    if (!location) return;

    fetchWeatherData(location);
});
    