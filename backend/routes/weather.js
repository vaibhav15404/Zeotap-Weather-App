import express from 'express';
import Weather from '../models/Weather.js';
import fetchWeatherData from '../utils/apiClient.js';
import sendAlert from '../utils/alertService.js';
const router = express.Router();

router.post('/fetch-weather', async (req, res) => {

  try {
    const { cities } = req.body;
    const data = await Promise.all(
      cities.map(async (city) => {
        const data = await fetchWeatherData(city);
        const weather = new Weather(data);
        await weather.save();
        await sendAlert(city, data.temp);
        return data;
      })
    );
    res.json(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/daily-summary', async (req, res) => {
  try {
    const today = new Date().setHours(0, 0, 0, 0);
    const data = await Weather.aggregate([
      { $match: { dt: { $gte: new Date(today) } } },
      {
        $group: {
          _id: '$city',
          avgTemp: { $avg: '$temp' },
          maxTemp: { $max: '$temp' },
          minTemp: { $min: '$temp' },
          avgHumidity: { $avg: '$humidity' }, 
          maxWindSpeed: { $max: '$wind_speed' }, 
          dominantWeather: { $first: '$main' },
        },
      },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;








// import express from 'express';
// import Weather from '../models/Weather.js';
// import fetchWeatherData from '../utils/apiClient.js';
// import sendAlert from '../utils/alertService.js';

// const router = express.Router();

// router.post('/fetch-weather', async (req, res) => {
//   const { cities } = req.body;

//   try {
//     const results = await Promise.all(cities.map(async (city) => {
//       try {
//         const data = await fetchWeatherData(city);
//         const weather = new Weather(data);
//         await weather.save();
//         await sendAlert(city, data.main.temp_max);
//         return { city, data, error: null };
//       } catch (error) {
//         console.error(`Error fetching weather for ${city}:`, error);
//         return { city, data: null, error: error.message };
//       }
//     }));

//     res.json(results);
//   } catch (error) {
//     console.error('Error processing city requests:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get('/daily-summary', async (req, res) => {
//   try {
//     const today = new Date().setHours(0, 0, 0, 0);
//     const data = await Weather.aggregate([
//       { $match: { dt: { $gte: new Date(today) } } },
//       {
//         $group: {
//           _id: '$city',
//           avgTemp: { $avg: '$temp' },
//           maxTemp: { $max: '$temp' },
//           minTemp: { $min: '$temp' },
//           avgHumidity: { $avg: '$humidity' }, 
//           maxWindSpeed: { $max: '$wind_speed' }, 
//           dominantWeather: { $first: '$main' },
//         },
//       },
//     ]);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;
