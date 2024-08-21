<template>
  <div style="display: flex; justify-content: center; font-family: 'Pretendard',sans-serif;"></div>
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
                  <p2 style="font-weight: 800; font-size: 25px; line-height: 29.83px"
                    >오늘의 경기</p2
                  >
                  <text style="font-weight: 700; font-size: 15px"
                    >경기시작 {{ selectedGame.date }}</text
                  >
                </div>
                <div :class="$style.vsLayout">
                  <!-- away VS home -->
                  <div :class="$style.today_game_teamname">
                    <img
                      :src="`/logo/${selectedGame.home}.png`"
                      @error="$event.target.src = '/logo.png'"
                      style="width: 80px; height: 80px"
                    />
                    <p2 style="font-size: medium">{{ selectedGame.homeName }}</p2>
                  </div>
                  <div><p2 style="font-size: xx-large; font-weight: 800;">VS </p2></div>
                  <div :class="$style.today_game_teamname">
                    <img
                      :src="`/logo/${selectedGame.away}.png`"
                      @error="$event.target.src = '/logo.png'"
                      style="width: 80px; height: 80px"
                    />
                    <p2 style="font-size: medium">{{ selectedGame.awayName }} </p2>
                  </div>
                </div>
              </div>
              <div :class="$style.weatherInfo">
                <p2 style="font-weight: 800; font-size: 25px; line-height: 29.83px">
                  {{ selectedGame.stadiumFullName }}
                </p2>
                <p1 style="font-size: xxx-large">{{ selectedGame. }}°</p1>
                <p4 v-if="weeklyWeather.weatherList.length > 0" style="font-size: small; text-align: center; margin-bottom: 10px">
                        최고: {{ weeklyWeather.weatherList[0].tempMax }}° /
                        최저: {{ weeklyWeather.weatherList[0].tempMin }}°
                        <br />
                        {{ weeklyWeather.weatherList[0].iconName }}
                      </p4>
                <div style="display: flex; flex-direction: column">
                  <div :class="$style.detailInfo">
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850; margin-right: 15px"
                      >강수량 
                      <br />

                      <p4 style="font-size: large; font-weight: 600">{{ currentWeather.rain }} </p4>
                    </p1>
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850"
                      >강수확률 
                      <br />
                      <p4 style="font-size: large; font-weight: 600">{{selectedGame.rain}}%</p4>
                    </p1>
                  </div>
                  <br />
                  <div :class="$style.detailInfo">
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850; margin-right: 20px"
                      >풍향 
                      <br />
                      <p4 style="font-size: large; font-weight: 600">{{currentWeather.wind}}-/s</p4>
                    </p1>
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850"
                      >습도 
                      <br />
                      <p4 style="font-size: large; font-weight: 600">{{currentWeather.humi}}%</p4>
                    </p1>
                  </div>
                  <div :class="$style.detailInfo2">
                    <img src="../assets/logo.png" alt="logo" style="width: 40px; height: 40px" />
                    <p1 style="font-size: large; font-weight: 850; margin-right: 20px"
                      >미세먼지 
                      <br />
                      <p4 style="font-size: large; font-weight: 400">{{currentWeather.dust}}</p4>
                    </p1>
                    <br />
                    <img src="../assets/logo.png" alt="logo" style="width: 40px; height: 40px" />
                    <p1 style="font-size: large; font-weight: 850"
                      >초미세먼지 
                      <br />
                      <p4 style="font-size: large; font-weight: 400">{{ currentWeather.microDust }}</p4>
                    </p1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <P :class="$style.font">{{ selectedGame.stadiumFullName }} 일기예보 </P>
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
              <td v-for="(weather,index) in weeklyWeather.weatherList" :key="index">
                {{  weather.tempMax }}°
              </td>
            </tr>
            <tr>
              <td>최저기온</td>
              <td v-for="(weather,index) in weeklyWeather.weatherList" :key="index">
                {{  weather.tempMin }}°
              </td>
            </tr>
            <tr>
              <td>강수확률</td>
             <td v-for="(weather,index) in weeklyWeather.weatherList" :key="index">
              {{ weather.tempMin }}%
             </td>
            </tr>
          </table>
        </div>
        <div :class="$style.chatContainer">
          <div :class="$style.chatlayout">
            <div :class="$style.inputlayout">
              <input :class="$style.chatBox" />
              <button :class="$style.buttonBox">
                <div>send</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { weatherData, selectedGame, fetchTodayGames, weeklyWeather, selectGame, 
  weeklyData,currentWeather, fetchWeatherData } from '../WeatherInfo';

export default {
  name: 'TestPage',
  setup() {
    onMounted(() => {
      fetchTodayGames();
      weeklyData();
      fetchWeatherData();
    });

    return {
      weatherData,
      selectedGame,
      weeklyWeather, 
      currentWeather,
      selectGame,
      weeklyData
    };
  }
}
</script>
<style module src="@/assets/TestPage.module.css"></style>
