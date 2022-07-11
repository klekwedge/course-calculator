import { Button } from "@chakra-ui/react";

function CountButton(props) {
  const expressions = /\+|\-|\/|\*| /;
  const lastNumber = props.data[props.data.length - 1];

  function checkExpressionType() {
    if (expressions.test(lastNumber)) {
      return;
    }

    props.onClick(props.data + props.expression);
  }

  return (
    <Button
      onClick={() => {
        checkExpressionType();
      }}
      w="40px"
      h="40px"
      margin="4px"
    >
      {props.expression}
    </Button>
  );
}

export default CountButton;
