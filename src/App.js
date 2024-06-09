import React, { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const { colorMode } = useColorMode();

  // Effect hook to update body class based on color mode
  useEffect(() => {
    document.body.className = colorMode === "dark" ? "dark-mode" : "light-mode";
  }, [colorMode]);

  return <Weather />;
}

export default App;
