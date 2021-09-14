const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const sunrise = document.querySelector('.sunrise');
const sundown = document.querySelector('.sundown');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

searchInput.addEventListener('change', (e) => {
    let city = e.target.value;
    const APP_ID = '405bf3eba45cb3ade2ab6fcbce703a6a';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric&lang=vi`;

    fetch(API_URL) 
        .then(response => (response.json()))

        .then(data => {
            console.log(data);
            cityName.innerHTML = data.name;
            weatherState.innerHTML = data.weather[0].description;
            temperature.innerHTML = Math.floor(data.main.temp);
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm');
            sundown.innerHTML = moment.unix(data.sys.sunset).format('H:mm');
            humidity.innerHTML = data.main.humidity+'%';
            windSpeed.innerHTML = ((data.wind.speed)*3.6).toFixed(2)+' km/h';
        })

        .catch(data => {
            cityName.innerHTML = 'Không có dữ liệu';
            weatherState.innerHTML = '--';
            temperature.innerHTML = '--';
            weatherIcon.setAttribute('src', '');
            sunrise.innerHTML ='--:--';
            sundown.innerHTML = '--.--';
            humidity.innerHTML = '--%';
            windSpeed.innerHTML = '--.-- km/h';
        })
})


