import { ref } from 'vue'

export const weatherData = ref({
  gameList: []
})

export const selectedGame = ref({
  homeName: '',
  home: '',
  awayName: '',
  away: '',
  stadiumFullName: '야구장을 선택해주세요',
  date: '',
  stadium: '',
  rain: 0,
  temp: 0,
  icon:''
})

export const weeklyWeather = ref({
  weatherList: []
})

export const currentWeather = ref({
  stadium: '',
  stadiumCode: '',
  date: '',
  castDate: '',
  awayCode: '',
  awayTeam: '',
  homeCode: '',
  homeTeam: '',
  iconName: '',
  temp: '0',
  dust: '0',
  dustIcon:'01',
  microDust: '0',
  microDustIcon: '01',
  rain: '0',
  humiIcon: '',
  humi: 0,
  windIcon: Number,
  wind: 0,
  today: '',
  todayTime: '',
  tomorrow: '',
  tomorrowTime: '',
  aftertomorrow: '',
  aftertomorrowTime: ''
})

export const fetchTodayGames = async () => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      gameDate: getCurrentDateFormatted(),
      leId: '1',
      srId: '0,1,2,3,4,5,6,7,8,9',
      headerCk: '1'
    })
  }

  try {
    const response = await fetch('http://localhost:8080/weather/todaygames', requestOptions)
    if (!response.ok) {
      throw new Error(`status: ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
    weatherData.value = data

    // for (const game of data.gameList) {
    //   await fetchWeatherData(game.stadium, game.homeCode, game.awayCode);
    // }
  } catch (error) {
    console.error("Error fetching today's games:", error)
  }
}

export const fetchWeatherData = async () => {
  try {
    const response = await fetch('http://localhost:8080/weather/current', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stadium: selectedGame.value.stadium,
        home: selectedGame.value.home,
        away: selectedGame.value.away,
        leid: '1'
      })
    })

    const data = await response.json()
    currentWeather.value = data
    console.log('Current weather data:', data)
  } catch (error) {
    console.error(error)
  }
}

export const weeklyData = async () => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      stadium: selectedGame.value.stadium
    })
  }

  try {
    const response = await fetch('http://localhost:8080/weather/weekly', requestOptions)
    if (!response.ok) {
      throw new Error(`status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Weeklydata:', data)

    // Assuming data.weatherList is the array you need
    weeklyWeather.value.weatherList = data.weatherList.map((day) => ({
      day: day.day,
      iconName: day.iconName,
      tempMax: day.tempMax,
      tempMin: day.tempMin,
      rain: day.rain
    }))
  } catch (error) {
    console.error('Error fetching weekly weather data:', error)
  }
}

export const selectGame = (index = 0) => {
  const game = weatherData.value.gameList[index]
  selectedGame.value = {
    homeName: game.homeName,
    home: game.homeCode,
    awayName: game.awayName,
    away: game.awayCode,
    stadiumFullName: game.stadiumFullName,
    date: game.gameTime,
    stadium: game.stadium,
    rain: game.rain,
    temp: game.temp,
    icon: game.icon
  }
  weeklyData()
  fetchWeatherData()
}

const getCurrentDateFormatted = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const day = String(currentDate.getDate()).padStart(2, '0')
  return `${year}${month}${day}`
}
