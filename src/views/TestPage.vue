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
              <div :class="$style.weather_map_layout">
                <div v-if="weatherData.gameList.length > 0" :class="$style.weather_map_layout">
                <div :class="$style.weather_map">
                  <li :class="$style.JS_today">
                    <dl :class="$style.location-box">
                      <dt>{{ weatherData.gameList[0].stadiumFullName }}</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span :class="$style.celsius">{{weatherData.gameList[0].temp}}</span>
                        <p>{{ weatherData.gameList[0].rain }}</p>
                        <p>
                          (초)미세먼지
                          <strong>{{ weatherData.gameList[0].dust}}</strong>
                        </p>
                      </dd>
                    </dl>
                  </li>
                </div>
                <div :class="$style.weather_map2">
                  <li :class="$style.DK_today">
                    <dl :class="$style.location-box">
                      <dt>{{ weatherData.gameList[1].stadiumFullName }}</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span :class="$style.celsius">{{weatherData.gameList[1].temp}}</span>
                        <p>강수확률 {{weatherData.gameList[1].rain}}</p>
                        <p>
                          (초)미세먼지
                          <strong>좋음{{weatherData.gameList[1].dust}}</strong>
                        </p>
                      </dd>
                    </dl>
                  </li>
                </div>
                <div :class="$style.weather_map3">
                  <li :class="$style.CW_today">
                    <dl :class="$style.location-box">
                      <dt>{{ weatherData.gameList[2].stadiumFullName }}</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span :class="$style.celsius">{{ weatherData.gameList[2].temp }}</span>
                        <p>강수확률 {{weatherData.gameList[2].rain}}</p>
                        <p>
                          (초)미세먼지
                          <strong>{{weatherData.gameList[2].dust}}</strong>
                        </p>
                      </dd>
                    </dl>
                  </li>
                </div>
                <div :class="$style.weather_map4">
                  <li :class="$style.GC_today">
                    <dl :class="$style.location-box">
                      <dt>{{weatherData.gameList[3].dust}}</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span :class="$style.celsius">35℃</span>
                        <p>강수확률{{weatherData.gameList[3].rain}}</p>
                        <p>
                          (초)미세먼지
                          <strong>{{weatherData.gameList[3].dust}}</strong>
                        </p>
                      </dd>
                    </dl>
                  </li>
                </div>
                <div :class="$style.weather_map5">
                  <li :class="$style.DJ_today">
                    <dl :class="$style.location-box">
                      <dt>{{weatherData.gameList[4].stadiumFullName}}</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span :class="$style.celsius">{{weatherData.gameList[3].temp}}</span>
                        <p>강수확률 {{weatherData.gameList[3].rain}}</p>
                        <p>
                          (초)미세먼지
                          <strong>{{weatherData.gameList[3].dust}}</strong>
                        </p>
                      </dd>
                    </dl>
                  </li>
                </div>
              </div>
              <img
                class="mapImg"
                src="../assets/map.png"
                alt="map"
                style="width: 290px; height: 480px; margin-top: 15%"
              />
            </div>
          </div>
            <div :class="$style.weatherInfoLayout">
              <div :class="$style.playInfo">
                <div :class="$style.startLayout">
                  
                  <p2 style="font-weight: 800; font-size: 25px; line-height: 29.83px">
                    오늘의 경기
                  </p2>
                  <text style="font-weight: 700; font-size: 15px"> 경기시작 </text>
                </div>
                <div :class="$style.vsLayout">
                  <img src="../assets/logo.png" alt="logo" style="width: 80px; height: 80px" />
                  <p2 style="font-size: xxx-large">VS</p2>
                  <img src="../assets/logo.png" alt="logo" style="width: 80px; height: 80px" />
                </div>
              </div>
              <div :class="$style.weatherInfo">
                <p2 style="font-weight: 800; font-size: 25px; line-height: 29.83px">
                  stadiumFullname
                </p2>
                <p1 style="font-size: xxx-large">33°</p1>
                <p4 style="font-size: small; text-align: center; margin-bottom: 10px"
                  >최고:33° 최저:23° <br />흐림</p4
                >
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

          <P :class="$style.font">stadiumFullname 일기예보 </P>
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
import { ref, onMounted } from 'vue';

export default {
  
  name: 'TestPage',
  setup() {
    const weatherData = ref({
      gameList: [

      ]
    });

    const fetchTodayGames = async () => {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gameDate: getCurrentDateFormatted(),
          leId: "1",
          srId: "0,1,2,3,4,5,6,7,8,9",
          headerCk: "1"
        })
      };

      try {
        const response = await fetch('http://localhost:8080/weather/todaygames', requestOptions);
        if (!response.ok) {
          throw new Error(`status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        weatherData.value = data;  // 전체 데이터를 설정합니다

        // 각 게임에 대한 날씨 데이터를 가져옵니다
        for (const game of data.gameList) {
          await fetchWeatherData(game.stadium, game.homeCode, game.awayCode);
        }
      } catch (error) {
        console.error('Error fetching today\'s games:', error);
      }
    };

    const fetchWeatherData = async (stadium, home, away) => {
      try {
        const response = await fetch('http://localhost:8080/weather/current', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            stadium,
            home,
            away,
            leid: "1"
          })
        });

        if (!response.ok) {
          throw new Error(`status: ${response.status}`);
        }

        const data = await response.json();
        const gameIndex = weatherData.value.gameList.findIndex(game => game.stadium === stadium);
        if (gameIndex !== -1) {
          weatherData.value.gameList[gameIndex] = { ...weatherData.value.gameList[gameIndex], ...data };
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const getCurrentDateFormatted = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      return `${year}${month}${day}`;
    };

    onMounted(fetchTodayGames);

    return {
      weatherData
    };
  }
};
</script>

<style module src="@/assets/TestPage.module.css"></style>
