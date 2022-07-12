import { useState, useRef } from "react";
import { Select, Flex, Input, Button, Text, Box, List } from "@chakra-ui/react";

import { SlideFade, useDisclosure } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

import Distance from "./../Distance/Distance";
import Money from "../Money/Money";

function Menu(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex zIndex={1000}>
      <SettingsIcon
        w="45px"
        h="45px"
        p="5px"
        m="5px"
        cursor="pointer"
        borderRadius="5px"
        onClick={onToggle}
      />
      <SlideFade in={isOpen} offsetY="-20px" unmountOnExit>
        <Flex
          bg="gray.100"
          p="10px"
          m="4px"
          borderRadius="8px"
          w="160px"
          position="absolute"
        >
          <List>
            <Button
              onClick={() => {
                props.onClick("Money");
              }}
            >
              Валюта
            </Button>
            <Button
              onClick={() => {
                props.onClick("Distance");
              }}
            >
              Дистанция
            </Button>
          </List>
        </Flex>
      </SlideFade>
    </Flex>
  );
}

function Converter() {
  const [mode, setMode] = useState("Distance");
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);


  

  let converter;

  switch (mode) {
    case "Distance":
      converter = (
        <Distance
          setInput={setInput}
          // data={dataDistance}
        />
      );
      break;
    case "Money":
      converter = (
        <Money
          setInput={setInput}
          // data={dataMoney}
        />
      );
      break;
    default:
      converter = (
        <Distance
          setInput={setInput}
          // data={dataDistance}
        />
      );
      break;
  }

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      gap="10px"
      w="100%"
    >
      <Menu onClick={setMode}></Menu>
      <Text>{result}</Text>
      {converter}
    </Flex>
  );
}

export default Converter;
