import { useState } from "react";
import { Flex, Button, List } from "@chakra-ui/react";

import { SlideFade, useDisclosure } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

import Distance from "../Distance/Distance";
import Money from "../Money/Money";

interface ConverterMenuProps {
  onClick: (mode: string) => void;
}

function ConverterMenu({ onClick }: ConverterMenuProps) {
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
            <Button onClick={() => onClick("Money")}>Валюта</Button>
            <Button onClick={() => onClick("Distance")}>Дистанция</Button>
          </List>
        </Flex>
      </SlideFade>
    </Flex>
  );
}

function Converter() {
  const [mode, setMode] = useState("Distance");

  let converter;

  switch (mode) {
    case "Distance":
      converter = <Distance />;
      break;
    case "Money":
      converter = <Money />;
      break;
    default:
      converter = <Distance />;
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
      <ConverterMenu onClick={setMode}></ConverterMenu>
      {converter}
    </Flex>
  );
}

export default Converter;
