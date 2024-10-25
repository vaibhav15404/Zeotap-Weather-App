import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();
const ALERT_THRESHOLD = process.env.ALERT_THRESHOLD;

const FORM_ENDPOINT = 'https://formspree.io/f/meoqodyz'; // Replace with your Formspree endpoint

async function sendAlert(city, temp_max) {
  // console.log(`Checking temperature for ${city}: ${temp_max}`);
  if (temp_max > ALERT_THRESHOLD) {
    try {
      const response = await axios.post(FORM_ENDPOINT, {
        city: city,
        temperature: temp_max.toFixed(2),
      });
      console.log(`Alert sent for ${city} at ${temp_max.toFixed(2)}°C:`, response.data);
    } catch (error) {
      console.error('Error sending alert:', error.response ? error.response.data : error.message);
    }
  }
}

export default sendAlert;
