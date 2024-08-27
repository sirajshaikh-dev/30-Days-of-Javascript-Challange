//Activity1: Setting up the project

//Activity 2: Fetching Weather Data
//Task 3: Use the fetch API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.

const apiKey = "e797490782f48e86e4ffca87684601e1";
const weatherInfo = document.querySelector(".weather-info");
const cityInput = document.getElementById("city-input");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    getWeatherData(city);
   }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);  
        displayWeatherData(data)
    } catch (error) {
        console.error('Error fetching weather data', error);
    }
}

// Task4: Parse the weather Data and display the current temperature, weather condition, and city name on web page.
function displayWeatherData(data) {
  const date= new Date().toLocaleDateString();
   weatherInfo.innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.weather[0].description}</p>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>${date}</p>
    
    `;
}

//Activity3: Adding Search Functionality
//Task5:an input field and a search button to the HTML structure. Style the input and button using CSS.
//Task 6: Write a function to fetch and display weather data for a city entered in the search input field. Log any errors to the console.

//Activity 4: Displaying a 5-Day Forecast
// Task 7: Use the fetch API to get a 5-day weather forecast from the public weather API. Log the response data to the console.

async function getFiveDayForecast(city) {
  const apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response= await fetch(apiUrl)
    const data = await response.json()
    console.log(data);
    displayFiveDayForecast(data)
  } catch (error) {
    console.error('Error fetching forecast data', error);
  }
} 
// getFiveDayForecast('surat')
 
// Task 8: Parse the forecast data and display the temperature and weather condition for each day in the forecast on the web page.

function displayFiveDayForecast(data) {
  let forecastHtml = '<h3>5-Day Forecast</h3>';
  forecastHtml += '<div class="forecast-container">';

  // Get today's date to filter out current day
  const today = new Date().getDate();

  let dayCount = 0;
  for (let i = 0; i < data.list.length; i += 8) { // 8 intervals per day
      const dayData = data.list[i];
      const forecastDate = new Date(dayData.dt_txt);

      // Skip today's date
      if (forecastDate.getDate() === today) continue;

      // Format day of the week
      const options = { weekday: 'long' };
      const dayOfWeek = forecastDate.toLocaleDateString(undefined, options);

      forecastHtml += `
          <div class="forecast-day">
              <p><strong>${dayOfWeek}</strong></p>
              <p>${forecastDate.toLocaleDateString()}</p>
              <p><img src="http://openweathermap.org/img/wn/${dayData.weather[0].icon}.png" alt="${dayData.weather[0].description}"></p>
              <p>${dayData.weather[0].description}</p>
              <p>Temp: ${dayData.main.temp}°C</p>
          </div>
      `;

      dayCount++;
      if (dayCount === 5) break; // Only display the next 5 days
  }
  forecastHtml += '</div>';
  weatherInfo.innerHTML += forecastHtml;
}


searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
      getWeatherData(city);
      getFiveDayForecast(city);
  }
});

