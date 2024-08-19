// import { ref, onMounted } from 'vue';


// export function WeatherInfo() {
//   const weatherData = ref([]);

//   const fetchTodayGames = async () => {
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         gameDate: getCurrentDateFormatted(),
//         leId: "1",
//         srId: "0,1,2,3,4,5,6,7,8,9",
//         headerCk: "1"
//       })
//     };

//     try {
//       const response = await fetch('http://localhost:8080/weather/todaygames', requestOptions);
//       if (!response.ok) {
//         throw new Error(`status: ${response.status}`);
//       }
//       const data = await response.json();

//       // Iterate over gameList and fetch weather data for each game
//       for (const game of data.gameList) {
//         const { stadium, homeCode, awayCode } = game;
//         await fetchWeatherData(stadium, homeCode, awayCode);
//       }
//     } catch (error) {
//       console.error('Error fetching today\'s games:', error);
//     }
//   };

//   const fetchWeatherData = async (stadium, home, away) => {
//     try {
//       const response = await fetch('http://localhost:8080/weather/current', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           stadium,
//           home,
//           away,
//           leid: "1"
//         })
//       });

//       if (!response.ok) {
//         throw new Error(` status: ${response.status}`);
//       }

//       const data = await response.json();
//       weatherData.value.push(data); // Collect weather data for each game
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   const getCurrentDateFormatted = () => {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//     const day = String(currentDate.getDate()).padStart(2, '0');
//     return `${year}${month}${day}`;
//   };

//   onMounted(fetchTodayGames);

//   return {
//     weatherData
//   };
// }