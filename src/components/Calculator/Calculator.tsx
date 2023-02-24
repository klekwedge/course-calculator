import { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";

import InputCalc from "../InputCalc/InputCalc";
import ClickCalc from "../ClickCalc/ClickCalc";
import History from "../History/History";

function Calculator() {
  const [calcType, setCalcType] = useState("ClickCalc");
  const [history, setHistory] = useState([]);

  function updateHistory(calcResult: string) {

    if (history.length > 6) {
      history.shift();
    }
    setHistory(history.concat(eval(calcResult)));
  }

  let calculator;

  function calcTypeChange() {
    calcType === "ClickCalc"
      ? setCalcType("InputCalc")
      : setCalcType("ClickCalc");
  }
  switch (calcType) {
    case "ClickCalc":
      calculator = <ClickCalc onClick={updateHistory} />;
      break;
    case "InputCalc":
      calculator = <InputCalc onKeyDown={updateHistory} />;
      break;
    default:
      calculator = <ClickCalc onClick={updateHistory} />;
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
          <History data={history}></History>
          <Box m="10px"> {calculator}</Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Calculator;
