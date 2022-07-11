import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";

import InputCalc from "../InputCalc/InputCalc";
import ClickCalc from "../ClickCalc/ClickCalc";

function Calculator() {
  const [calcType, setCalcType] = useState("ClickCalc");
  let calculator;

  function calcTypeChange() {
    calcType === "ClickCalc"
      ? setCalcType("InputCalc")
      : setCalcType("ClickCalc");
  }
  switch (calcType) {
    case "ClickCalc":
      calculator = <ClickCalc />;
      break;
    case "InputCalc":
      calculator = <InputCalc />;
      break;
    default:
      calculator = <ClickCalc />;
      break;
  }

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Flex
        gap="5px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="200px"
      >
        <Flex flexDirection="column" justifyContent="center" m="10px">
          <Button onClick={calcTypeChange}>Change CalcType</Button>
          <Box m="10px"> {calculator}</Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Calculator;
