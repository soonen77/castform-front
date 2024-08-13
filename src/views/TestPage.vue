<template>
  <div class="logo">
    <img src="../assets/logo.png" alt="logo" style="width: 50px; height: 50px" />
    <text>CASTFORM</text>
  </div>
  <div class="maplayout">
    <div class="weather_map"></div>
    <img
      class="mapImg"
      src="../assets/map.png"
      alt="map"
      style="width: 250px; height: 550px; margin-top: 10%"
    />
  </div>
</template>

<style>
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'CookieRun', sans-serif;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 25px;
  border-bottom: 0.5px solid #e5e7eb;
  background-color: #ffffff;
  z-index: 1; /*인덱스가 높을수록 앞으로 보낼 수 있음*/
  width: 100%;
  position: sticky;
  top: 0;
}
.logoImg {
  width: 50px;
  height: 50px;
}
.maplayout {
  width: 580px;
  height: 700px;
  border-radius: 15px;
  background-color: rgba(217, 217, 217, 0.19);
  display: flex;
  margin-left: 7%;
  margin-top: 3%;
  justify-content: space-evenly;
}
.weather_map {
  width: 170px;
  height: 120px;
  border-radius: 15px;
  background-color: #ffffff;
  margin-left: 15px;
  margin-bottom: 10px;
}
</style>
