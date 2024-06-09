import React from "react";
import {
  Box,
  Text,
  Icon,
  HStack,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";
import { FaTimes, FaTemperatureHigh, FaWind, FaTint } from "react-icons/fa";

const WeatherCard = ({ weatherData, onRemove }) => {
  const getIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };
  return (
    <Box
      textAlign="center"
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      position="relative"
    >
      <Button
        variant="unstyled"
        position="absolute"
        top={2}
        right={2}
        onClick={() => onRemove(weatherData.name)}
      >
        <FaTimes color="red" />
      </Button>
      <Text fontSize="30px" fontWeight="bold">
        {weatherData.name}
      </Text>
      <Text mb={2}>{new Date().toLocaleString()}</Text>
      <Center>
        <HStack mb={2} spacing={0}>
          <Image
            src={getIconUrl(weatherData.weather[0].icon)}
            alt="Weather Icon"
          />
          <Text
            fontWeight="600"
            textTransform="capitalize"
            fontSize="18px"
            mb={2}
          >
            {weatherData.weather[0].description}
          </Text>
        </HStack>
      </Center>
      <HStack spacing={4} mb={2} ml={4}>
        <Icon as={FaTemperatureHigh} boxSize={6} />
        <Text fontWeight={600} fontSize="18px">
          Temperature: {weatherData.main.temp}°C
        </Text>
      </HStack>
      <HStack spacing={4} mb={2} ml={4}>
        <Icon as={FaWind} boxSize={6} />
        <Text fontWeight={600} fontSize="18px">
          Wind: {weatherData.wind.speed} m/s
        </Text>
      </HStack>
      <HStack spacing={4} ml={4}>
        <Icon as={FaTint} boxSize={6} />
        <Text fontWeight={600} fontSize="18px">
          Humidity: {weatherData.main.humidity}%
        </Text>
      </HStack>
    </Box>
  );
};

export default WeatherCard;
