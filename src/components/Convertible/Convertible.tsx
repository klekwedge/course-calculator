import { Select, Flex, Input, Button, Text } from "@chakra-ui/react";
import { useRef } from "react";

interface ConvertibleProps {
  convertFunc: (
    fieldInput: HTMLSelectElement | null,
    fieldResult: HTMLSelectElement | null
  ) => void;
  data: string[];
  result: number;
  setInput: (value: number) => void;
}

function Convertible({
  result,
  data,
  setInput,
  convertFunc,
}: ConvertibleProps) {
  const fieldInput = useRef<HTMLSelectElement>(null);
  const fieldResult = useRef<HTMLSelectElement>(null);

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
        <Select size="md" ref={fieldInput}>
          {selection}
        </Select>
      </Flex>

      <Flex alignItems="center" gap="5px">
        <Text>{result}</Text>
        <Select size="md" ref={fieldResult}>
          {selection}
        </Select>
      </Flex>
      <Button
        onClick={() => convertFunc(fieldInput.current, fieldResult.current)}
      >
        Convert
      </Button>
    </Flex>
  );
}

export default Convertible;
