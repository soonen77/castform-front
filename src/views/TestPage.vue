<template>
  <div style="display: flex; justify-content: center; font-family: 'Pretendard', sans-serif"></div>
  <div :class="$style.mainContainer">
    <div :class="$style.logo">
      <img src="../assets/logo.png" alt="logo" style="width: 100px; height: 100px" />
      <b style="color: black; font-weight: 600">CASTFORM</b>
    </div>
    <div style="display: flex; justify-content: center">
      <div :class="$style.contentWrapper">
        <div>
          <div :class="$style.container">
            <div :class="$style.maplayout">
              <div v-if="weatherData.gameList.length > 0" :class="$style.weather_map_layout">
                <div
                  v-for="(game, index) in weatherData.gameList"
                  :key="index"
                  :class="$style['weather_map' + (index + 1)]"
                  @click="selectGame(index)"
                >
                  <div :class="$style.weather_map_title">{{ game.stadiumFullName }}</div>
                  <div :class="$style.weather_map_contents">
                    <img
                      src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                      alt="이미지 없음"
                    />
                    <span :class="$style.celsius">{{ game.temp }}℃</span>
                  </div>
                  <div :class="$style.weather_map_contents">
                    강수확률 {{ game.rain }}%<br />
                    (초)미세먼지 <strong>{{ game.dust }}</strong>
                  </div>
                </div>
              </div>
              <img
                class="mapImg"
                src="../assets/map.png"
                alt="map"
                style="width: 290px; height: 480px; margin-top: 15%"
              />
            </div>
            <div :class="$style.weatherInfoLayout">
              <div :class="$style.playInfo">
                <div :class="$style.startLayout">
                  <div style="font-weight: 800; font-size: 25px; line-height: 29.83px">
                    오늘의 경기
                  </div>
                  <text style="font-weight: 700; font-size: 15px">
                    경기시작 {{ selectedGame.date }}
                  </text>
                </div>
                <div :class="$style.vsLayout">
                  <!-- away VS home -->
                  <div :class="$style.today_game_teamname">
                    <img
                      :src="`/logo/${selectedGame.home}.png`"
                      @error="$event.target.src = '/logo.png'"
                      style="width: 80px; height: 80px"
                    />
                    <p style="font-size: medium">{{ selectedGame.homeName }}</p>
                  </div>
                  <div><p style="font-size: xx-large; font-weight: 800">VS</p></div>
                  <div :class="$style.today_game_teamname">
                    <img
                      :src="`/logo/${selectedGame.away}.png`"
                      @error="$event.target.src = '/logo.png'"
                      style="width: 80px; height: 80px"
                    />
                    <p style="font-size: medium">{{ selectedGame.awayName }}</p>
                  </div>
                </div>
              </div>
              <div :class="$style.weatherInfo">
                <p style="font-weight: 800; font-size: 25px; line-height: 29.83px">
                  {{ selectedGame.stadiumFullName }}
                </p>
                <p style="font-size: xxx-large">{{ selectedGame.temp }}°</p>
                <p
                  v-if="weeklyWeather.weatherList.length > 0"
                  style="font-size: small; text-align: center; margin-bottom: 10px"
                >
                  최고: {{ weeklyWeather.weatherList[0].tempMax }}° / 최저:
                  {{ weeklyWeather.weatherList[0].tempMin }}°
                  <br />
                  {{ weeklyWeather.weatherList[0].iconName }}
                </p>
                <div style="display: flex; flex-direction: column">
                  <div :class="$style.detailInfo">
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <div style="font-size: large; font-weight: 850; margin-right: 15px">
                      강수량
                      <br />

                      <p style="font-size: large; font-weight: 600">{{ currentWeather.rain }}</p>
                    </div>
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <div style="font-size: large; font-weight: 850">
                      강수확률
                      <br />
                      <p style="font-size: large; font-weight: 600">{{ selectedGame.rain }}%</p>
                    </div>
                  </div>
                  <br />
                  <div :class="$style.detailInfo">
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <div style="font-size: large; font-weight: 850; margin-right: 20px">
                      풍향
                      <br />
                      <p style="font-size: large; font-weight: 600">{{ currentWeather.wind }}-/s</p>
                    </div>
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <div style="font-size: large; font-weight: 850">
                      습도
                      <br />
                      <p style="font-size: large; font-weight: 600">{{ currentWeather.humi }}%</p>
                    </div>
                  </div>
                  <div :class="$style.detailInfo2">
                    <img src="../assets/logo.png" alt="logo" style="width: 40px; height: 40px" />
                    <div style="font-size: large; font-weight: 850; margin-right: 20px">
                      미세먼지
                      <br />
                      <p style="font-size: large; font-weight: 400">{{ currentWeather.dust }}</p>
                    </div>
                    <br />
                    <img src="../assets/logo.png" alt="logo" style="width: 40px; height: 40px" />
                    <div style="font-size: large; font-weight: 850">
                      초미세먼지
                      <br />
                      <p style="font-size: large; font-weight: 400">
                        {{ currentWeather.microDust }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p :class="$style.font">{{ selectedGame.stadiumFullName }} 일기예보 </p>
          <table :class="$style.customTable">
            <tr>
              <th>날짜</th>
              <th v-for="(weather, index) in weeklyWeather.weatherList" :key="index">
                {{ weather.day }}
              </th>
            </tr>
            <tr>
              <td>예보</td>
              <td v-for="(weather, index) in weeklyWeather.weatherList" :key="index">
                {{ weather.iconName }}
              </td>
            </tr>
            <tr>
              <td>최고기온</td>
              <td v-for="(weather, index) in weeklyWeather.weatherList" :key="index">
                {{ weather.tempMax }}°
              </td>
            </tr>
            <tr>
              <td>최저기온</td>
              <td v-for="(weather, index) in weeklyWeather.weatherList" :key="index">
                {{ weather.tempMin }}°
              </td>
            </tr>
            <tr>
              <td>강수확률</td>
              <td v-for="(weather, index) in weeklyWeather.weatherList" :key="index">
                {{ weather.tempMin }}%
              </td>
            </tr>
          </table>
        </div>
        <div :class="$style.chatContainer">
          <div :class="$style.chatlayout">
            <div :class = "$style.textlayout">
            <div v-for="chatMsg in chatMessages" :key="`${chatMsg.sender}${chatMsg.timestamp}`">
              {{ chatMsg.content }}
            </div>
            </div>
            <div :class="$style.inputlayout">
              <input v-model="chatText" :class="$style.chatBox" @keyup.enter="send" />
              <button :class="$style.buttonBox" @click="send">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
  weatherData,
  selectedGame,
  fetchTodayGames,
  weeklyWeather,
  selectGame,
  weeklyData,
  currentWeather,
  fetchWeatherData
} from '../WeatherInfo'
import { Client } from '@stomp/stompjs'

const chatText = ref('')
const chatMessages = ref([])
const connected = ref(false)
const stompClient = ref(null)

// Function to connect to WebSocket
const connect = () => {
  const client = new Client({
    brokerURL: 'ws://localhost:8080/ws',
    onConnect: (frame) => {
      console.log(`Connected: ${frame}`)
      connected.value = true
      stompClient.value.subscribe('/topic/public', (message) => {
        const chatText = JSON.parse(message.body)
        chatMessages.value.push(chatText)
      })
    },
    onWebSocketError: (error) => {
      console.error('Error with websocket', error)
    },
    onStompError: (frame) => {
      console.error(`${frame.headers['message']}`)
      console.error(`${frame.body}`)
    }
  })
  client.activate()
  stompClient.value = client
}

// Function to send a message
const send = () => {
  if (stompClient.value && stompClient.value.connected) {
    stompClient.value.publish({
      destination: '/app/chat.sendMessage',
      body: JSON.stringify({
        sender: 'YourUsername',
        content: chatText.value,
        type: 'CHAT'
      })
    })
    chatText.value = ''
  } else {
    console.error('WebSocket is not connected')
  }
}

onMounted(() => {
  fetchTodayGames()
  weeklyData()
  fetchWeatherData()
  connect() // Connect to WebSocket when component is mounted
})

// Define global for browser environment
window.global = window
</script>

<style module src="@/assets/TestPage.module.css"></style>
