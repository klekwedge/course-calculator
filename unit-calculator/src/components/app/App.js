import { useState } from "react";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import "./App.css";

import Numbers from "../numbers/Numbers";
import CountButton from "../countButton/CountButton";
import InputCalc from "../inputCalc/InputCalc";

function App() {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");

  function applyExpression(countedNumber) {
    setCounts(countedNumber);
    setResult(eval(counts));
  }

  return (
    <div className="App">
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
          <InputCalc> </InputCalc>
          <Flex
            w="100%"
            justifyContent="between"
            bg="gray.50"
            alignItems="center"
            borderRadius="8px"
            px="4px"
          >
            <Text
              display="flex"
              justifyContent="start"
              alignItems="center"
              w="100%"
              h="38px"
            >
              {counts}
            </Text>
            <Text
              display="flex"
              justifyContent="start"
              alignItems="center"
              w="fit-content"
              h="38px"
              textColor="tomato"
            >
              {result}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Numbers data={counts} onClick={setCounts}></Numbers>
            <Flex flexDirection="column">
              <CountButton
                data={counts}
                expression={"+"}
                onClick={applyExpression}
              />
              <CountButton
                data={counts}
                expression={"-"}
                onClick={applyExpression}
              />
              <CountButton
                data={counts}
                expression={"*"}
                onClick={applyExpression}
              />
              <CountButton
                data={counts}
                expression={"/"}
                onClick={applyExpression}
              />
            </Flex>
            <Button
              alignSelf="start"
              bg="tomato"
              m="4px"
              onClick={() => {
                setResult(eval(counts));
              }}
            >
              =
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
