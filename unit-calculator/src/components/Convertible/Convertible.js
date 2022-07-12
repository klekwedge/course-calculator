import { useState, useRef } from "react";
import { Select, Flex, Input, Button, Text } from "@chakra-ui/react";

function Convertible(props) {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  const first = useRef();
  const second = useRef();

  const selection = props.data.map((e) => {
    return (
      <option key={e} value={e}>
        {e}
      </option>
    );
  });

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      gap="10px"
      w="100%"
    >
      <Flex alignItems="center" gap="5px">
        <Input
          type="number"
          w="50%"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Select size="md" ref={first}>
          {selection}
        </Select>
      </Flex>

      <Flex alignItems="center" gap="5px">
        <Text>{result}</Text>
        <Select size="md" ref={second}>
          {selection}
        </Select>
      </Flex>
      <Button
        onClick={() => {
          props.convert();
        }}
      >
        Convert
      </Button>
    </Flex>
  );
}

export default Convertible;
