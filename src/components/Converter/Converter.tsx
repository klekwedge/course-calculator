import { Flex } from "@chakra-ui/react";
import Money from "../Money/Money";

function Converter() {

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      gap="10px"
      w="100%"
    >
      <Money />
    </Flex>
  );
}

export default Converter;
