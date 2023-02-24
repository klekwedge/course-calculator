import { Button } from "@chakra-ui/react";

interface CountButtonProps {
  data: string;
  expression: string;
  onClick: (str: string) => void;
}

function CountButton({ data, expression, onClick }: CountButtonProps) {
  const expressions = /\+|\-|\/|\*| /;
  const lastNumber = data[data.length - 1];

  function checkExpressionType() {
    if (expressions.test(lastNumber)) {
      return;
    }

    onClick(data + expression);
  }

  return (
    <Button
      onClick={() => {
        checkExpressionType();
      }}
      w="40px"
      h="40px"
      margin="4px"
      bg="blue.400"
      className="droppable"
    >
      {expression}
    </Button>
  );
}

export default CountButton;
