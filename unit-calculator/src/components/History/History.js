import { Box, Button } from "@chakra-ui/react";

function History(props) {
  const results = props.data.map((result, index) => {
    return (
      <Button key={index} m="1" className="draggable">
        {result}
      </Button>
    );
  });

  return <Box>{results}</Box>;
}

export default History;
