// import { ref, onMounted } from 'vue';

// export default {
//   name: 'TestPage',
//   setup() {
//     const weatherData = ref({
//       gameList: []
//     });

//     const selectedGame = ref({
//       homeName: '',
//       awayName: ''
//     });

//     const fetchTodayGames = async () => {
//       const requestOptions = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           gameDate: getCurrentDateFormatted(),
//           leId: "1",
//           srId: "0,1,2,3,4,5,6,7,8,9",
//           headerCk: "1"
//         })
//       };

//       try {
//         const response = await fetch('http://localhost:8080/weather/todaygames', requestOptions);
//         if (!response.ok) {
//           throw new Error(`status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         weatherData.value = data;

//         for (const game of data.gameList) {
//           await fetchWeatherData(game.stadium, game.homeCode, game.awayCode);
//         }
//       } catch (error) {
//         console.error("Error fetching today's games:", error);
//       }
//     };

//     const fetchWeatherData = async (stadium, home, away) => {
//       try {
//         const response = await fetch('http://localhost:8080/weather/current', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             stadium,
//             home,
//             away,
//             leid: "1"
//           })
//         });

//         if (!response.ok) {
//           throw new Error(`status: ${response.status}`);
//         }

//         const data = await response.json();
//         const gameIndex = weatherData.value.gameList.findIndex(game => game.stadium === stadium);
//         if (gameIndex !== -1) {
//           weatherData.value.gameList[gameIndex] = { ...weatherData.value.gameList[gameIndex], ...data };
//         }
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     const sendWeeklyRequest = async (stadium) => {
//       try {
//         const requestBody = {
//           weatherList: [
//             {
//               stadium: stadium
//             }
//           ]
//         };

//         const response = await fetch('http://localhost:8080/weather/weekly', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(requestBody)
//         });

//         if (!response.ok) {
//           throw new Error(`status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Weekly weather data:', data);
//       } catch (error) {
//         console.error('Error fetching weekly weather data:', error);
//       }
//     };

//     const selectGame = (index) => {
//       const game = weatherData.value.gameList[index];
//       selectedGame.value = {
//         homeName: game.homeName,
//         awayName: game.awayName,
//         // gameTime : game.gameTime,
//         // date:game.date
//       };
//     };

//     const getCurrentDateFormatted = () => {
//       const currentDate = new Date();
//       const year = currentDate.getFullYear();
//       const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//       const day = String(currentDate.getDate()).padStart(2, '0');
//       return `${year}${month}${day}`;
//     };

//     onMounted(fetchTodayGames);

//     return {
//       weatherData,
//       selectedGame,
//       sendWeeklyRequest,
//       selectGame,
//       fetchTodayGames
//     };
//   }
// };




//// WeatherInfo.js
import { ref } from 'vue';

export const weatherData = ref({
  gameList: []
});

export const selectedGame = ref({
  homeName: '',
  awayName: '',
  stadiumFullName : '',
  date:''
  
});

export const fetchTodayGames = async () => {
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
                weatherData.value = data;
        
                for (const game of data.gameList) {
                  await fetchWeatherData(game.stadium, game.homeCode, game.awayCode);
                }
              } catch (error) {
                console.error("Error fetching today's games:", error);
              }
            };
        

export const fetchWeatherData = async (stadium, home, away) => {
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
  


export const sendWeeklyRequest = async (stadium) => {
            try {
                const requestBody = {
                  weatherList: [
                    {
                      stadium: stadium
                    }
                  ]
                };
        
                const response = await fetch('http://localhost:8080/weather/weekly', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(requestBody)
                });
        
                if (!response.ok) {
                  throw new Error(`status: ${response.status}`);
                }
        
                const data = await response.json();
                console.log('Weekly weather data:', data);
              } catch (error) {
                console.error('Error fetching weekly weather data:', error);
              }
            };


export const selectGame = (index) => {
  const game = weatherData.value.gameList[index];
  selectedGame.value = {
    homeName: game.homeName,
    awayName: game.awayName,
    stadiumFullName : game.stadiumFullName,
    data : game.date
    
  };
};

const getCurrentDateFormatted = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};