import React, { useState } from "react";
import {
  HStack,
  Input,
  Button,
  InputGroup,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
    setInput("");
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <HStack spacing={0} width="94%">
      <InputGroup width="100%">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city name or zip code"
          _placeholder={{ color: "white", opacity: 0.4 }}
          width="100%"
        />
        {input && (
          <InputRightElement>
            <IconButton
              aria-label="Clear search"
              icon={<CloseIcon />}
              onClick={handleClear}
              size="sm"
            />
          </InputRightElement>
        )}
      </InputGroup>
      <Button ml={2} onClick={handleSearch} width="auto">
        <Search2Icon />
      </Button>
    </HStack>
  );
};

export default SearchBar;
