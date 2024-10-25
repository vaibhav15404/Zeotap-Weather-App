🌤️Zeotap Weather App

Welcome to Zeotap Weather App, a real-time weather monitoring system designed to track, process, and visualize weather data for metro cities across India. This project utilizes the OpenWeatherMap API to fetch, 
analyze, and store weather data, including temperature, main weather conditions, and alerts based on user-defined thresholds.


📜 Table of Contents
  1). Features
  2). Tech Stack
  3). Project Structure
  4). Installation
  5). Environment Setup
  6). Usage
  7). Future Enhancements

  
✨ Features

Real-Time Data Retrieval: Pulls weather data for major metro cities from OpenWeatherMap API.
Daily Summaries: Summarize weather conditions for each city daily.
Alert System: Notifies users when specific thresholds (temperature, conditions) are met.
Visualizations: Displays weather summaries and trends with easy-to-interpret graphs.
Customizable Cities: Users can add new cities to be monitored.


💻 Tech Stack
Frontend: React, Chart.js
Backend: Node.js, Express
Database: MongoDB
External API: OpenWeatherMap API


📁 Project Structure
plaintext
Copy code
Zeotap-Weather-App/
├── frontend/               # Frontend (React)
├── backend/                # Backend (Express, MongoDB)
│   ├── config/             # Database connect
│   ├── models/             # MongoDB Schema
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
├── .env                    # Environment variables
└── README.md


🚀 Installation
Clone the repository:
    git clone https://github.com/vaibhav15404/Zeotap-Weather-App.git
    cd Zeotap-Weather-App

Install server dependencies:
    cd backend
    npm install
    
Install frontend dependencies:
    cd ../frontend
    npm install

    
🌐 Environment Setup
Configure Environment Variables: Create a .env file in the root folder with these variables:
MONGO_URI=<Your MongoDB URI>
API_KEY=<Your OpenWeatherMap API Key>
ALERT_THRESHOLD=<Your choice temperature for Alert>


Starting the Server:
    # From the Zeotap-Weather-App directory
    cd backend
    npm start
    
Starting the Client:
    # In a separate terminal
    cd frontend
    npm start


📊 Usage
Homepage: View the weather data summaries and trends.
Add City: Use the interface to add cities for monitoring weather conditions.
Weather Alerts: Get notified based on user-defined conditions for temperature and weather events.



🔮 Future Enhancements
User Authentication: Add user accounts for personalized weather tracking.
Historical Data Analysis: Store and analyze historical data for trend forecasting.
Mobile App: Extend the project for mobile platforms.

UI Images:
![image](https://github.com/user-attachments/assets/d8a259fb-69b4-488f-9d2d-4671f2b17d03)
