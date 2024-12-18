const cityinput = document.querySelector('.city-input')
const searchBtn = document.querySelector('.search-btn')

const apikey ='baa6d2b869a6c83b2b75e393e90c3e76'

searchBtn.addEventListener('click', () => {
    if (cityinput.value.trim() != '') {
        updateWeatherInfo(cityinput.value) 
        cityinput.value = ''
        cityinput.blur()
    }
})
cityinput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' &&
        cityinput.value.trim() != ''
    ) {
        updateWeatherInfo(cityinput.value) 
        cityinput.value = ''
        cityinput.blur()
    }
})

async function getFetchData(endPoint, city) {
   const apiUrl = 'https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apikey}'
   
   const response = await fetch(apiUrl)
   
   return response.json()
}

async function updateWeatherInfo(city) {
  const weatherData = await getFetchData('weather', city)
  console.log(weatherData)
}
