# Weather App

## Overview
This Weather App allows users to search for weather information by city name or zip code. It displays current weather conditions including temperature, wind speed, humidity, and weather description. Users can add multiple cities to track their weather conditions.

## How to Run Locally
To run the application locally, follow these steps:
1. Clone the repository to your local machine using the following command:
   ```
   git clone git@github.com:DivyamaniNidhi/Weather-App.git
   ```
2. Navigate to the project directory:
   ```
   cd weather-app
   ```
3. Install dependencies using npm:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5.  Open your browser and visit http://localhost:3000 to view the application.

## Approach and Technologies Used
### Approach
- The application is built using React, a popular JavaScript library for building user interfaces.
- Chakra UI is used for styling components, providing a consistent and responsive design.
- Axios is used for making HTTP requests to fetch weather data from the OpenWeatherMap API.
- Local storage is used to persist weather data across sessions.

### Technologies Used
- React
- Chakra UI
- Axios
- Font Awesome for icons
- OpenWeatherMap API

## Known Issues and Limitations
- The application currently does not support autocomplete for city names in the search bar.
- Due to limitations of the OpenWeatherMap API, some cities may not return accurate or complete weather information.


### Deployment

The application is deployed using Vercel and can be accessed at https://weather-app-nu-sandy-41.vercel.app/.
