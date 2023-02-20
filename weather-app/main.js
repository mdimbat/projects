const API_KEY = 'your-api-key-here'; // replace with your API key

const weatherInfo = document.querySelector('.weather-info');
const weatherIcon = document.querySelector('.weather-icon img');
const temperature = document.querySelector('.temperature h2');
const temperatureDescription = document.querySelector('.temperature p');
const locationName = document.querySelector('.location h3');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const sunriseTime = document.querySelector('.sunrise');
const sunsetTime = document.querySelector('.sunset');

function getWeather(latitude, longitude) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // Update weather information
      locationName.textContent = data.name;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      temperatureDescription.textContent = data.weather[0].description;
      humidity.textContent = `${data.main.humidity}%`;
      windSpeed.textContent = `${data.wind.speed} m/s`;
      sunriseTime.textContent = formatTime(data.sys.sunrise);
      sunsetTime.textContent = formatTime(data.sys.sunset);
      weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      weatherIcon.setAttribute('alt', data.weather[0].description);

      // Show weather information
      weatherInfo.classList.add('show');
    })
    .catch(error => {
      console.log(error);
      alert('Unable to get weather data.');
    });
}

function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeather(latitude, longitude);
    }, error => {
      console.log(error);
      alert('Unable to get location data.');
    });
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}

getLocation();
