import { Box, Button } from "@chakra-ui/react";

function History(props) {
  const results = props.data.map((result) => {
    return <Button key={result} m='1'>{result}</Button>;
  });

  return <Box>{results}</Box>;
}

export default History;
