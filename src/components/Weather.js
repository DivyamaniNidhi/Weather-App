import React, { useState, useEffect } from "react";
import axios from "axios";
import { VStack, SimpleGrid, useToast, Box } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [weatherDataList, setWeatherDataList] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const storedWeatherData = JSON.parse(
      localStorage.getItem("weatherDataList")
    );
    if (storedWeatherData) {
      setWeatherDataList(storedWeatherData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("weatherDataList", JSON.stringify(weatherDataList));
  }, [weatherDataList]);

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=069493fd93621192b6b67cd345872f1d&units=metric`
      );

      // Check if the city already exists in the list
      const isCityExist = weatherDataList.some(
        (data) => data.name === response.data.name
      );
      if (isCityExist) {
        // Show toast message if city already exists
        toast({
          title: "City already exists",
          description: `${response.data.name} is already in the list.`,
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setWeatherDataList((prevData) => [...prevData, response.data]);
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Invalid location or network error",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const removeWeatherCard = (name) => {
    setWeatherDataList((prevData) =>
      prevData.filter((data) => data.name !== name)
    );
  };

  return (
    <Box position="relative" minHeight="100vh" alignSelf="center">
      <VStack spacing={4} align="center">
        <Navbar />
        <SearchBar onSearch={fetchWeather} />
        <SimpleGrid
          columns={[1, 2, 2, 3, 4]}
          spacing={4}
          mt={4}
          width="94%"
          justifyContent="center"
        >
          {weatherDataList.map((weatherData, index) => (
            <WeatherCard
              key={index}
              weatherData={weatherData}
              onRemove={removeWeatherCard}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Weather;
