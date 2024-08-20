<template>
 
  <div style="display: flex; justify-content: center"></div>
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
              <div v-for="(game, index) in weatherData.gameList" :key="index" :class="$style['weather_map' + (index + 1)]" @click="selectGame(index)">
                <p>
                  <b :class="$style.weather_map_title">{{ game.stadiumFullName }}</b><br>
                  <img src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png" alt="이미지 없음" />
                  <span :class="$style.celsius">{{ game.temp }}℃</span><br>
                  강수확률 {{ game.rain}}%<br>
                  (초)미세먼지 <strong>{{ game.dust }}</strong>
                </p>
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
                <p2 style="font-weight: 800; font-size: 25px; line-height: 29.83px">오늘의 경기</p2>
                <text style="font-weight: 700; font-size: 15px">경기시작 {{ selectedGame.date}}</text>
              </div>
              <div :class="$style.vsLayout">
                <img src="../assets/logo.png" alt="logo" style="width: 80px; height: 80px" />
                <p2 style="font-size: xxx-large">{{ selectedGame.homeName }} VS {{ selectedGame.awayName }}</p2>
                  <img src="../assets/logo.png" alt="logo" style="width: 80px; height: 80px" />
                </div>
              </div>
              <div :class="$style.weatherInfo">
                <p2 style="font-weight: 800; font-size: 25px; line-height: 29.83px">
                  stadiumFullname
                </p2>
                <p1 style="font-size: xxx-large">33°</p1>
                <p4 style="font-size: small; text-align: center; margin-bottom: 10px"
                  >최고:33° 최저:23° <br />흐림</p4>
                <div style="display: flex; flex-direction: column">
                  <div :class="$style.detailInfo">
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850; margin-right: 15px"
                      >강수량
                      <br />
                      <p4 style="font-size: large; font-weight: 600">-mm</p4>
                    </p1>
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850"
                      >강수확률
                      <br />
                      <p4 style="font-size: large; font-weight: 600">40%</p4>
                    </p1>
                  </div>
                  <br />
                  <div :class="$style.detailInfo">
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850; margin-right: 20px"
                      >풍향
                      <br />
                      <p4 style="font-size: large; font-weight: 600">2.8-/s</p4>
                    </p1>
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850"
                      >습도
                      <br />
                      <p4 style="font-size: large; font-weight: 600">75%</p4>
                    </p1>
                  </div>
                  <div :class="$style.detailInfo2">
                    <img src="../assets/logo.png" alt="logo" style="width: 40px; height: 40px" />
                    <p1 style="font-size: large; font-weight: 850; margin-right: 20px"
                      >미세먼지
                      <br />
                      <p4 style="font-size: large; font-weight: 400">보통</p4>
                    </p1>
                    <br />
                    <img src="../assets/logo.png" alt="logo" style="width: 40px; height: 40px" />
                    <p1 style="font-size: large; font-weight: 850"
                      >초미세먼지
                      <br />
                      <p4 style="font-size: large; font-weight: 400">안좋음</p4>
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
              <th>m월 d일</th>
              <th>m월 d일</th>
              <th>m월 d일</th>
              <th>m월 d일</th>
              <th>m월 d일</th>
            </tr>
            <tr>
              <td>예보</td>
              <td>구름많음</td>
              <td>구름많음</td>
              <td>구름많음</td>
              <td>구름많음</td>
              <td>구름많음</td>
            </tr>
            <tr>
              <td>최고기온</td>
              <td>33°</td>
              <td>33°</td>
              <td>33°</td>
              <td>33°</td>
              <td>33°</td>
            </tr>
            <tr>
              <td>최저기온</td>
              <td>25°</td>
              <td>25°</td>
              <td>25°</td>
              <td>25°</td>
              <td>25°</td>
            </tr>
            <tr>
              <td>강수확률</td>
              <td>20%</td>
              <td>20%</td>
              <td>20%</td>
              <td>20%</td>
              <td>20%</td>
            </tr>
          </table>
        </div>
        <div :class="$style.chatContainer">
          <div :class="$style.chatlayout">
            <div :class="$style.inputlayout"><input :class="$style.chatBox"/>
              <button :class="$style.buttonBox">
                <div style="font-size: 16px;">
                    전송
                </div></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted } from 'vue';
import { weatherData, selectedGame, fetchTodayGames, sendWeeklyRequest, selectGame } from '../WeatherInfo';

export default {
  name: 'TestPage',
  setup() {
    onMounted(fetchTodayGames);

    return {
      weatherData,
      selectedGame,
      sendWeeklyRequest,
      selectGame
    };
  }
};
</script>
<style module src="@/assets/TestPage.module.css"></style>