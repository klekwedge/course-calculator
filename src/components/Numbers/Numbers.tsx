import { Box, Button } from "@chakra-ui/react";

interface NumbersProps {
  data: string;
  onClick: (str: string) => void;
}

function Numbers({ data, onClick }: NumbersProps) {
  const nums = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","].map(
    (number) => {
      return (
        <Button
          onClick={(e) => {
            if (data !== "0") {
              onClick(data + e.target.innerHTML);
            } else {
              onClick(e.target.innerHTML);
            }
          }}
          key={number}
          w="40px"
          h="40px"
          margin="4px"
        >
          {number}
        </Button>
      );
    }
  );

  return (
    <Box display="flex" flexWrap="wrap" w="150px">
      {nums}
    </Box>
  );
}

export default Numbers;
