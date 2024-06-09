import React from "react";
import { HStack, Text, Switch, useColorMode, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon, FaCloudSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justifyContent="space-between"
      w="100%"
      maxWidth="100%"
      p={4}
      shadow="md"
    >
      <HStack spacing={2}>
        <Icon as={FaCloudSun} boxSize={6} />
        <Text fontSize={{ base: "lg", sm: "2xl" }} fontWeight="bold">
          Weather App
        </Text>
      </HStack>
      <HStack>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        {colorMode === "dark" ? <FaMoon /> : <FaSun />}
      </HStack>
    </HStack>
  );
};

export default Navbar;
