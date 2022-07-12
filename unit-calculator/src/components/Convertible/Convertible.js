import { Select, Flex, Input, Button, Text } from "@chakra-ui/react";

function Convertible(props) {

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
            props.setInput(e.target.value);
          }}
        />
        <Select size="md" ref={props.firstRef}>
          {selection}
        </Select>
      </Flex>

      <Flex alignItems="center" gap="5px">
        <Text>{props.result}</Text>
        <Select size="md" ref={props.secondRef}>
          {selection}
        </Select>
      </Flex>
      <Button
        onClick={() => {
          props.convertFunc();
        }}
      >
        Convert
      </Button>
    </Flex>
  );
}

export default Convertible;
