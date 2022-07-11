import { Input, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";

function InputCalc(props) {
  const [counts, setCounts] = useState("");
  const [result, setResult] = useState("");

  function updateCounts(e) {
    const expressions = /\+|\-|\/|\*|=|\$|[A-z]| /;
    const lastNumber = e.target.value[e.target.value.length - 2];

    if (
      expressions.test(lastNumber) &&
      expressions.test(e.nativeEvent.data) &&
      expressions.test(e.nativeEvent.data) !== null
    ) {
      return;
    }

    if (!expressions.test(e.nativeEvent.data)) {
      setResult(eval(e.target.value));
    }

    setCounts(e.target.value);
  }

  return (
    <Flex bg="gray.300" p="0.5" borderRadius="5">
      <Input
        type="text"
        value={counts}
        border="transparent"
        onChange={(e) => {
          updateCounts(e);
        }}
      ></Input>
      <Text textColor="tomato">{result}</Text>
    </Flex>
  );
}

export default InputCalc;
