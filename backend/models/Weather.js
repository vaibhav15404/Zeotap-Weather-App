import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  city: String,
  main: String,
  temp_min: Number,
  temp_max: Number,
  humidity: Number, // New field for humidity
  wind_speed: Number, // New field for wind speed
  dt: Date,
});

export default mongoose.model('Weather', weatherSchema);
