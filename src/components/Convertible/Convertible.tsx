import { Select, Flex, Input, Button, Text } from "@chakra-ui/react";

interface ConvertibleProps {
  convertFunc: () => void;
  data: string[];
  result: number;
  setInput: (value: number) => void;
  firstRef: any;
  secondRef: any;
}

function Convertible({
  result,
  data,
  firstRef,
  secondRef,
  setInput,
  convertFunc,
}: ConvertibleProps) {
  const selection = data.map((e) => {
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
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <Select size="md" ref={firstRef}>
          {selection}
        </Select>
      </Flex>

      <Flex alignItems="center" gap="5px">
        <Text>{result}</Text>
        <Select size="md" ref={secondRef}>
          {selection}
        </Select>
      </Flex>
      <Button onClick={() => convertFunc()}>Convert</Button>
    </Flex>
  );
}

export default Convertible;
