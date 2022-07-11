import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import Numbers from "../numbers/Numbers";
import CountButton from "../countButton/CountButton";

function App() {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");

  function applyExpression(countedNumber) {
    setCounts(countedNumber);
    setResult(eval(counts));
  }

  return (
    <div className="App">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Box
          display="flex"
          gap="5px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="200px"
        >
          <Box
            display="flex"
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
          </Box>
          <Box display="flex" alignItems="center">
            <Numbers data={counts} onClick={setCounts}></Numbers>
            <Box display="flex" flexDirection="column">
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
                expression={"/  "}
                onClick={applyExpression}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
