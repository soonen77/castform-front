<template>
  <div class="logo">
    <img src="../assets/logo.png" alt="logo" style="width: 100px; height: 100px" />
    <text style="color: black">CASTFORM</text>
  </div>
  <div class="container">
    <div class="maplayout">
      <div>
        <div class="weather_map"></div>
        <div class="weather_map2"></div>
        <div class="weather_map3"></div>
        <div class="weather_map4"></div>
        <div class="weather_map5"></div>
      </div>
      <img
        class="mapImg"
        src="../assets/map.png"
        alt="map"
        style="width: 290px; height: 480px; margin-top: 15%"
      />
    </div>
    <div class="weatherInfoLayout">
      <div class="playInfo"></div>
      <div class="weatherInfo"></div>
    </div>
    <div class="chatlayout"></div>
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
</template>

<style scoped>
.font{
  font-family: 'CookieRun', sans-serif;
  margin-left: 12%;
  margin-top: 30px;
  font-size: 24px;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'CookieRun', sans-serif;
  font-size: 34px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 25px;
  border-bottom: 0.5px solid #e5e7eb;
  background-color: #ffffff;
  z-index: 2; /*인덱스가 높을수록 앞으로 보낼 수 있음*/
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
  margin-top: -32px;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.weather_map2 {
  width: 180px;
  height: 120px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.weather_map3 {
  width: 180px;
  height: 120px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.weather_map4 {
  width: 180px;
  height: 120px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
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
  margin-bottom: 15px;
}
.weatherInfo {
  width: 400px;
  height: 490px;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
}
.chatlayout {
  width: 310px;
  height: 480px;
  background-color: #d9d9d9;
  margin-left: 15px;
  border-radius: 10px;
  position: sticky;
  top: 150px; /* Adjust this value as needed */
  align-self: flex-start;
}
.custom-table {
  font-family: 'Pretendard', sans-serif;
  width: 58.5%;
  border-collapse: collapse;
  margin-top: 20px;
  margin-left: 228px;
  background-color: #ffffff;
  border-radius: 10px;
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
</style>
