import { Box, Button } from "@chakra-ui/react";

function Numbers(props) {
  const nums = Array.from(Array(10).keys()).map((number, index) => {
    return (
      <Button key={number} w="40px" h="40px" margin="4px">
        {number}
      </Button>
    );
  });

  return (
    <Box display="flex" flexWrap="wrap" w="15%">
      {nums}
    </Box>
  );
}

export default Numbers;
