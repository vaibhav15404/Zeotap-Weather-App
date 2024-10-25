// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './App.css';

// // function App() {
// //   const [summary, setSummary] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [unit, setUnit] = useState('Celsius');
// //   const FETCH_INTERVAL = 10000;

// //   useEffect(() => {
// //     async function fetchWeather() {
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/daily-summary');
// //         setSummary((prevSummary) => {
// //           const newSummary = res.data;
// //           const updatedSummary = newSummary.map((newData) => {
// //             const oldData = prevSummary.find(item => item._id === newData._id);
// //             return { ...newData, isNew: !oldData || JSON.stringify(oldData) !== JSON.stringify(newData) };
// //           });
// //           return updatedSummary;
// //         });
// //         setError(null);
// //       } catch (error) {
// //         console.error('Error fetching weather data:', error);
// //         setError('Failed to fetch weather data. Please try again later.');
// //       }
// //     }

// //     fetchWeather();
// //     const intervalId = setInterval(fetchWeather, FETCH_INTERVAL);
// //     return () => clearInterval(intervalId);
// //   }, []);

// //   const convertTemperature = (tempInCelsius) => {
// //     switch (unit) {
// //       case 'Fahrenheit':
// //         return (tempInCelsius * 9 / 5) + 32;
// //       case 'Kelvin':
// //         return tempInCelsius + 273.15;
// //       case 'Celsius':
// //       default:
// //         return tempInCelsius;
// //     }
// //   };

// //   // Function to generate random stars
// //   const generateStars = (number) => {
// //     return Array.from({ length: number }).map((_, index) => {
// //       const randomX = Math.random() * 100; // Random position on the x-axis
// //       const randomDuration = Math.random() * 3 + 2; // Duration between 2s to 5s
// //       const randomDelay = Math.random() * 2; // Delay between 0s to 2s
// //       return (
// //         <div
// //           key={index}
// //           className="star"
// //           style={{
// //             left: `${randomX}%`,
// //             animationDuration: `${randomDuration}s`,
// //             animationDelay: `${randomDelay}s`,
// //           }}
// //         ></div>
// //       );
// //     });
// //   };

// //   return (
// //     <div>
// //       {/* Starry Background */}
// //       <div className="stars">
// //         {generateStars(100)} {/* Generate 100 stars */}
// //       </div>

// //       <h1>Weather Monitoring System</h1>
// //       {error && <p className="error">{error}</p>}

// //       <div className="unit-selector">
// //         <label htmlFor="unit">Select Temperature Unit:</label>
// //         <select
// //           id="unit"
// //           value={unit}
// //           onChange={(e) => setUnit(e.target.value)}
// //         >
// //           <option value="Celsius">Celsius</option>
// //           <option value="Fahrenheit">Fahrenheit</option>
// //           <option value="Kelvin">Kelvin</option>
// //         </select>
// //       </div>

// //       <div className="table-container">
// //         <h2>Daily Summary</h2>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>City</th>
// //               <th>Average Temp ({unit})</th>
// //               <th>Max Temp ({unit})</th>
// //               <th>Min Temp ({unit})</th>
// //               <th>Humidity (%)</th>
// //               <th>Wind Speed (km/h)</th>
// //               <th>Dominant Weather</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {summary.map((data) => (
// //               <tr key={data._id} className={data.isNew ? 'fade-in' : ''}>
// //                 <td>{data._id}</td>
// //                 <td>{convertTemperature(data.avgTemp).toFixed(2)}</td>
// //                 <td>{convertTemperature(data.maxTemp).toFixed(2)}</td>
// //                 <td>{convertTemperature(data.minTemp).toFixed(2)}</td>
// //                 <td>{data.avgHumidity.toFixed(2)}</td>
// //                 <td>{data.maxWindSpeed.toFixed(2)}</td>
// //                 <td>{data.dominantWeather}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [summary, setSummary] = useState([]);
//   const [error, setError] = useState(null);
//   const [unit, setUnit] = useState('Celsius');
//   const [newCity, setNewCity] = useState(''); // New state for user-inputted city
//   const [cities, setCities] = useState(['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad']); // Default cities
//   const FETCH_INTERVAL = 10000;

//   useEffect(() => {
//     fetchWeather();
//     const intervalId = setInterval(fetchWeather, FETCH_INTERVAL);
//     return () => clearInterval(intervalId);
//   }, [cities]);

//   const fetchWeather = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/daily-summary', { cities });
//       setSummary(res.data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//       setError('Failed to fetch weather data. Please try again later.');
//     }
//   };

//   const handleAddCity = () => {
//     if (newCity && !cities.includes(newCity)) {
//       setCities([...cities, newCity]);
//       setNewCity(''); // Clear input after adding
//     }
//   };

//   const convertTemperature = (tempInCelsius) => {
//     switch (unit) {
//       case 'Fahrenheit':
//         return (tempInCelsius * 9 / 5) + 32;
//       case 'Kelvin':
//         return tempInCelsius + 273.15;
//       case 'Celsius':
//       default:
//         return tempInCelsius;
//     }
//   };

//   const generateStars = (number) => {
//     return Array.from({ length: number }).map((_, index) => {
//       const randomX = Math.random() * 100; // Random position on the x-axis
//       const randomDuration = Math.random() * 3 + 2; // Duration between 2s to 5s
//       const randomDelay = Math.random() * 2; // Delay between 0s to 2s
//       return (
//         <div
//           key={index}
//           className="star"
//           style={{
//             left: `${randomX}%`,
//             animationDuration: `${randomDuration}s`,
//             animationDelay: `${randomDelay}s`,
//           }}
//         ></div>
//       );
//     });
//   };

//   return (
//     <div>
//       <div className="stars">
//         {generateStars(100)} {/* Generate 100 stars */}
//       </div>

//       <h1>Weather Monitoring System</h1>
//       {error && <p className="error">{error}</p>}

//       <div className="unit-selector">
//         <label htmlFor="unit">Select Temperature Unit:</label>
//         <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
//           <option value="Celsius">Celsius</option>
//           <option value="Fahrenheit">Fahrenheit</option>
//           <option value="Kelvin">Kelvin</option>
//         </select>
//       </div>

//       <div className="add-city">
//         <input
//           type="text"
//           placeholder="Add City"
//           value={newCity}
//           onChange={(e) => setNewCity(e.target.value)}
//         />
//         <button onClick={handleAddCity}>Add City</button>
//       </div>

//       <div className="table-container">
//         <h2>Daily Summary</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>City</th>
//               <th>Average Temp ({unit})</th>
//               <th>Max Temp ({unit})</th>
//               <th>Min Temp ({unit})</th>
//               <th>Humidity (%)</th>
//               <th>Wind Speed (km/h)</th>
//               <th>Dominant Weather</th>
//             </tr>
//           </thead>
//           <tbody>
//             {summary.map((data) => (
//               <tr key={data._id}>
//                 <td>{data._id}</td>
//                 <td>{convertTemperature(data.avgTemp).toFixed(2)}</td>
//                 <td>{convertTemperature(data.maxTemp).toFixed(2)}</td>
//                 <td>{convertTemperature(data.minTemp).toFixed(2)}</td>
//                 <td>{data.avgHumidity.toFixed(2)}</td>
//                 <td>{data.maxWindSpeed.toFixed(2)}</td>
//                 <td>{data.dominantWeather}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;









// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [summary, setSummary] = useState([]);
//   const [error, setError] = useState(null);
//   const [unit, setUnit] = useState("Celsius");
//   const [newCity, setNewCity] = useState("");
//   const [cities, setCities] = useState([
//     "Delhi",
//     "Mumbai",
//     "Chennai",
//     "Bangalore",
//   ]);
//   const FETCH_INTERVAL = 10000;

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetchWeather();
//     };
//     fetchData();

//     const intervalId = setInterval(fetchWeather, FETCH_INTERVAL);
//     return () => clearInterval(intervalId);
//   }, [cities]);

//   const fetchWeather = async () => {
//     try {
//       const res = await axios.post(`http://localhost:5000/api/fetch-weather`, {
//         cities,
//       });
//       setSummary(res.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       setError("Failed to fetch weather data. Please try again later.");
//     }
//   };

//   const handleAddCity = () => {
//     if (newCity && !cities.includes(newCity)) {
//       setCities([...cities, newCity.trim()]); // Trim spaces and add new city
//       setNewCity(""); // Clear input after adding
//     }
//   };

//   const convertTemperature = (tempInCelsius) => {
//     switch (unit) {
//       case "Fahrenheit":
//         return (tempInCelsius * 9) / 5 + 32;
//       case "Kelvin":
//         return tempInCelsius + 273.15;
//       case "Celsius":
//       default:
//         return tempInCelsius;
//     }
//   };

//   const generateStars = (number) => {
//     return Array.from({ length: number }).map((_, index) => {
//       const randomX = Math.random() * 100; // Random position on the x-axis
//       const randomDuration = Math.random() * 3 + 2; // Duration between 2s to 5s
//       const randomDelay = Math.random() * 2; // Delay between 0s to 2s
//       return (
//         <div
//           key={index}
//           className="star"
//           style={{
//             left: `${randomX}%`,
//             animationDuration: `${randomDuration}s`,
//             animationDelay: `${randomDelay}s`,
//           }}
//         ></div>
//       );
//     });
//   };

//   return (
//     <div>
//       //{" "}
//       <div className="stars">
//         {generateStars(100)} {/* Generate 100 stars */}{" "}
//       </div>
//       <h1>Weather Monitoring System</h1>
//       {error && <p className="error">{error}</p>}
//       <div className="unit-selector">
//         <label htmlFor="unit">Select Temperature Unit:</label>
//         <select
//           id="unit"
//           value={unit}
//           onChange={(e) => setUnit(e.target.value)}
//         >
//           <option value="Celsius">Celsius</option>
//           <option value="Fahrenheit">Fahrenheit</option>
//           <option value="Kelvin">Kelvin</option>
//         </select>
//       </div>
//       <div className="add-city">
//         <input
//           type="text"
//           placeholder="Add City"
//           value={newCity}
//           onChange={(e) => setNewCity(e.target.value)}
//         />
//         <button onClick={handleAddCity}>Add City</button>
//       </div>
//       <div className="table-container">
//         <h2>Daily Summary</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>City</th>
//               <th>Average Temp ({unit})</th>
//               <th>Max Temp ({unit})</th>
//               <th>Min Temp ({unit})</th>
//               <th>Humidity (%)</th>
//               <th>Wind Speed (km/h)</th>
//               <th>Dominant Weather</th>
//             </tr>
//           </thead>
//           <tbody>
//             {summary.length === 0 ? (
//               <tr>
//                 <td colSpan="7">
//                   No weather data available. Please add cities.
//                 </td>
//               </tr>
//             ) : (
//               summary.map((data) => (
//                 <tr key={data.id}>
//                   <td>{data.city}</td>
//                   <td>
//                     {data.temp_min !== undefined && data.temp_max !== undefined
//                       ? convertTemperature(
//                           (data.temp_min + data.temp_max) / 2
//                         ).toFixed(2)
//                       : "N/A"}
//                   </td>
//                   <td>
//                     {data.temp_max !== undefined
//                       ? convertTemperature(data.temp_max).toFixed(2)
//                       : "N/A"}
//                   </td>
//                   <td>
//                     {data.temp_min !== undefined
//                       ? convertTemperature(data.temp_min).toFixed(2)
//                       : "N/A"}
//                   </td>
//                   <td>
//                     {data.humidity !== undefined
//                       ? data.humidity.toFixed(2)
//                       : "N/A"}
//                   </td>
//                   <td>
//                     {data.wind_speed !== undefined
//                       ? data.wind_speed.toFixed(2)
//                       : "N/A"}
//                   </td>
//                   <td>{data.main || "N/A"}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;














import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [summary, setSummary] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [unit, setUnit] = useState("Celsius");
  const [newCity, setNewCity] = useState("");
  const [cities, setCities] = useState([
    "Delhi",
    "Mumbai",
    "Chennai",
    "Bangalore",
  ]);
  const FETCH_INTERVAL = 10000;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetching
      await fetchWeather();
      setIsLoading(false); // Set loading to false after fetching
    };
    fetchData();

    const intervalId = setInterval(fetchWeather, FETCH_INTERVAL);
    return () => clearInterval(intervalId);
  }, [cities]);

  const fetchWeather = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/api/fetch-weather`, {
        cities,
      });
      setSummary(res.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please try again later.");
    }
  };

  const handleAddCity = () => {
    if (newCity && !cities.includes(newCity)) {
      setCities([...cities, newCity.trim()]); // Trim spaces and add new city
      setNewCity(""); // Clear input after adding
    }
  };

  const convertTemperature = (tempInCelsius) => {
    switch (unit) {
      case "Fahrenheit":
        return (tempInCelsius * 9) / 5 + 32;
      case "Kelvin":
        return tempInCelsius + 273.15;
      case "Celsius":
      default:
        return tempInCelsius;
    }
  };

  const generateStars = (number) => {
    return Array.from({ length: number }).map((_, index) => {
      const randomX = Math.random() * 100; // Random position on the x-axis
      const randomDuration = Math.random() * 3 + 2; // Duration between 2s to 5s
      const randomDelay = Math.random() * 2; // Delay between 0s to 2s
      return (
        <div
          key={index}
          className="star"
          style={{
            left: `${randomX}%`,
            animationDuration: `${randomDuration}s`,
            animationDelay: `${randomDelay}s`,
          }}
        ></div>
      );
    });
  };

  return (
    <div>
      <div className="stars">
        {generateStars(100)} {/* Generate 100 stars */} 
      </div>
      <h1>Weather Monitoring System</h1>
      {error && <p className="error">{error}</p>}
      {isLoading ? ( // Show loading state
        <p>Loading weather data...</p>
      ) : (
        <>
          <div className="unit-selector">
            <label htmlFor="unit">Select Temperature Unit:</label>
            <select
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Kelvin">Kelvin</option>
            </select>
          </div>
          <div className="add-city">
            <input
              type="text"
              placeholder="Add City"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
            <button onClick={handleAddCity}>Add City</button>
          </div>
          <div className="table-container">
            <h2>Daily Summary</h2>
            <table>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Average Temp ({unit})</th>
                  <th>Max Temp ({unit})</th>
                  <th>Min Temp ({unit})</th>
                  <th>Humidity (%)</th>
                  <th>Wind Speed (km/h)</th>
                  <th>Dominant Weather</th>
                </tr>
              </thead>
              <tbody>
                {summary.length === 0 ? (
                  <tr>
                    <td colSpan="7">
                      No weather data available. Please add cities.
                    </td>
                  </tr>
                ) : (
                  summary.map((data) => (
                    <tr key={data.id}>
                      <td>{data.city}</td>
                      <td>
                        {data.temp_min !== undefined && data.temp_max !== undefined
                          ? convertTemperature(
                              (data.temp_min + data.temp_max) / 2
                            ).toFixed(2)
                          : "N/A"}
                      </td>
                      <td>
                        {data.temp_max !== undefined
                          ? convertTemperature(data.temp_max).toFixed(2)
                          : "N/A"}
                      </td>
                      <td>
                        {data.temp_min !== undefined
                          ? convertTemperature(data.temp_min).toFixed(2)
                          : "N/A"}
                      </td>
                      <td>
                        {data.humidity !== undefined
                          ? data.humidity.toFixed(2)
                          : "N/A"}
                      </td>
                      <td>
                        {data.wind_speed !== undefined
                          ? data.wind_speed.toFixed(2)
                          : "N/A"}
                      </td>
                      <td>{data.main || "N/A"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
