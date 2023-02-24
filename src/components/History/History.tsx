import { Box, Button } from "@chakra-ui/react";

interface HistoryProps {
  data: number[];
}

function History({ data }: HistoryProps) {
  const results = data.map((result, index) => {
    return <Button key={index}>{result}</Button>;
  });

  return (
    <Box display="flex" gap="10px" p="10px" flexWrap="wrap">
      {results}
    </Box>
  );
}

export default History;
