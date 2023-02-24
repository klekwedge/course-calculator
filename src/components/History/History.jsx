import { Box, Button } from "@chakra-ui/react";

function History(props) {
  const results = props.data.map((result, index) => {
    return (
      <Button key={index} className="draggable">
        {result}
      </Button>
    );
  });

  return (
    <Box display="flex" gap="10px" p='10px' flexWrap='wrap'>
      {results}
    </Box>
  );
}

export default History;
