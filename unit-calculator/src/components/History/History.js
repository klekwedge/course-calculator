import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";

function History(props) {
  const results = props.data.map((result) => {
    return <Button key={result} m='1'>{result}</Button>;
  });

  return <Box>{results}</Box>;
}

export default History;
