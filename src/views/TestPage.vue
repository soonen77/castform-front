<template>
  <div style="display: flex; justify-content: center"></div>
  <div class="main-container">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" style="width: 100px; height: 100px" />
      <b style="color: black; font-weight: 600">CASTFORM</b>
    </div>
    <div style="display: flex; justify-content: center">
      <div class="content-wrapper">
        <div>
          <div class="container">
            <div class="maplayout">
              <div class="weather_map_layout">
                <div class="weather_map">
                  <li class="JS_today">
                    <dl class="location-box">
                      <dt>잠실야구장</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span class="celsius">35℃</span>
                        <p>강수확률 30%</p>
                        <p>
                          (초)미세먼지
                          <strong>좋음</strong>
                        </p>
                      </dd>
                    </dl>
                  </li>
                </div>
                <div class="weather_map2">
                  <li class="DK_today">
                    <dl class="location-box">
                      <dt>잠실야구장</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span class="celsius">35℃</span>
                        <p>강수확률 30%</p>
                        <p>
                          (초)미세먼지
                          <strong>좋음</strong>
                        </p>
                      </dd>
                    </dl>
                  </li>
                </div>
                <div class="weather_map3">
                  <li class="CW_today">
                    <dl class="location-box">
                      <dt>잠실야구장</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span class="celsius">35℃</span>
                        <p>강수확률 30%</p>
                        <p>
                          (초)미세먼지
                          <strong>좋음</strong>
                        </p>
                      </dd>
                    </dl>
                  </li>
                </div>
                <div class="weather_map4">
                  <li class="GC_today">
                    <dl class="location-box">
                      <dt>잠실야구장</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span class="celsius">35℃</span>
                        <p>강수확률 30%</p>
                        <p>
                          (초)미세먼지
                          <strong>좋음</strong>
                        </p>
                      </dd>
                    </dl>
                  </li>
                </div>
                <div class="weather_map5">
                  <li class="DJ_today">
                    <dl class="location-box">
                      <dt>잠실야구장</dt>
                      <dd>
                        <img
                          src="//lgcxydabfbch3774324.cdn.ntruss.com/KBO_IMAGE/KBOHome/resources/images/weather/sky/02_s.png"
                          alt="이미지 없음"
                        />
                        <span class="celsius">35℃</span>
                        <p>강수확률 30%</p>
                        <p>
                          (초)미세먼지
                          <strong>좋음</strong>
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
            <div class="weatherInfoLayout">
              <div class="playInfo">
                <div class="startLayout">
                  <p2 style="font-weight: 800; font-size: 25px; line-height: 29.83px">
                    오늘의 경기
                  </p2>
                  <text style="font-weight: 700; font-size: 15px"> 경기시작 </text>
                </div>
                <div class="vsLayout">
                  <img src="../assets/logo.png" alt="logo" style="width: 80px; height: 80px" />
                  <p2 style="font-size: xxx-large">VS</p2>
                  <img src="../assets/logo.png" alt="logo" style="width: 80px; height: 80px" />
                </div>
              </div>
              <div class="weatherInfo">
                <p2 style="font-weight: 800; font-size: 25px; line-height: 29.83px">
                  스퐁이 야구장
                </p2>
                <p1 style="font-size: xxx-large">33°</p1>
                <p4 style="font-size: small; text-align: center; margin-bottom: 10px"
                  >최고:33° 최저:23° <br />흐림</p4
                >
                <div style="display: flex; flex-direction: column">
                  <div class="detailInfo">
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850; margin-right: 15px"
                      >강수량
                      <br />
                      <p4 style="font-size: large; font-weight: 600">-mm</p4>
                    </p1>
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850"
                      >습도
                      <br />
                      <p4 style="font-size: large; font-weight: 600">40%</p4>
                    </p1>
                  </div>
                  <br />
                  <div class="detailInfo">
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850; margin-right: 20px"
                      >풍향
                      <br />
                      <p4 style="font-size: large; font-weight: 600">2.8-/s</p4>
                    </p1>
                    <img src="../assets/logo.png" alt="logo" style="width: 65px; height: 65px" />
                    <p1 style="font-size: large; font-weight: 850"
                      >자외선
                      <br />
                      <p4 style="font-size: large; font-weight: 600">75%</p4>
                    </p1>
                  </div>
                  <div class="detailInfo2">
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

          <P class="font"> 00 야구장 일기예보 </P>
          <table class="custom-table">
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
              <td>최저기온</td>
              <td>33°</td>
              <td>33°</td>
              <td>33°</td>
              <td>33°</td>
              <td>33°</td>
            </tr>
            <tr>
              <td>최고기온</td>
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
        <div class="chat-container">
          <div class="chatlayout"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  font-weight: 400;
  font-style: normal;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
}

.font {
  font-family: 'Pretendard-Regular', sans-serif;
  margin-left: 12%;
  margin-top: 30px;
  font-size: 24px;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 34px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 25px;
  border-bottom: 0.5px solid #e5e7eb;
  background-color: #ffffff;
  z-index: 2;
  width: 100%;
  position: sticky;
  top: 0;
}

.logoImg {
  width: 50px;
  height: 50px;
}

.container {
  display: flex;
  flex-direction: row;
  margin-top: 3%;
}

.maplayout {
  width: 700px;
  height: 715px;
  border-radius: 10px;
  background-color: rgba(217, 217, 217, 0.19);
  display: flex;
  margin-left: 12%;
  padding-top: 2.5%;
  justify-content: space-evenly;
  margin-right: 15px;
}

.weather_map {
  width: 180px;
  height: 120px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: -12px;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.weather_map:hover {
  transform: translateY(-8px);
}

.weather_map2,
.weather_map3,
.weather_map4,
.weather_map5 {
  width: 180px;
  height: 120px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.weatherInfoLayout {
  display: flex;
  flex-direction: column;
  gap: auto;
}

.playInfo {
  width: 400px;
  height: 208px;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
}
.startLayout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vsLayout {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-gap: 15px;
  justify-items: center;
  align-items: center;
}

.weatherInfo {
  width: 400px;
  height: 490px;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.detailInfo {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}
.detailInfo2 {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-top: 30px;
}

.chat-container {
  width: 310px;
  position: sticky;
  top: 17%;
  height: fit-content;
  margin-left: 15px;
  margin-right: 15px;
  align-self: flex-start;
}

.chatlayout {
  width: 100%;
  height: 480px;
  background-color: #d9d9d9;
  border-radius: 10px;
}

.custom-table {
  font-family: 'Pretendard', sans-serif;
  width: 88%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-left: 12%;
}

.custom-table th,
.custom-table td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
}

.custom-table th {
  background-color: #f3f4f6;
  font-weight: bold;
  font-size: 14px;
  color: #4b5563;
}

li {
  list-style: none;
}
</style>
