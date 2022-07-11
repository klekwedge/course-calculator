import { useState, useRef } from "react";
import { Select, Flex, Input, Button, Text } from "@chakra-ui/react";

function Converter() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  const first = useRef();
  const second = useRef();

  function convert() {
    if (first.current.value === "Meters") {
      switch (second.current.value) {
        case "Centimeters":
          setResult(input * 100);
          break;
        case "Meters":
          setResult(input);
          break;
        default:
          setResult(input);
          break;
      }
    } else if (first.current.value === "Centimeters") {
      switch (second.current.value) {
        case "Centimeters":
          setResult(input);
          break;
        case "Meters":
          setResult(input / 100);
          break;
        default:
          setResult(input);
          break;
      }
    }
  }
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      gap="10px"
      w="100%"
    >
      <Flex alignItems='center' gap='5px'>
        <Input
          type="number"
          w="50%"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Select size="md" ref={first}>
          <option value="Centimeters">Centimeters</option>
          <option value="Meters">Meters</option>
        </Select>
      </Flex>

      <Flex alignItems='center' gap='5px'>
        <Text>{result}</Text>
        <Select size="md" ref={second}>
          <option value="Centimeters">Centimeters</option>
          <option value="Meters">Meters</option>
        </Select>
      </Flex>
      <Button
          onClick={() => {
            convert();
          }}
        >
          Convert
        </Button>
    </Flex>
  );
}

export default Converter;
