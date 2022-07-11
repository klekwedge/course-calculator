import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Calculator from "../Calculator/Calculator";
import Converter from "../Converter/Converter";
import Menu from "../Menu/Menu";

function App() {
  const [mode, setMode] = useState("Calculator");
  let application;


  switch (mode) {
    case "Calculator":
      application = <Calculator />;
      break;
    case "Converter":
      application = <Converter />;
      break;
    default:
      application = <Calculator />;
      break;
  }

  return (
    <Box h="90vh">
      <Menu onClick={setMode}></Menu>
      {application}
    </Box>
  );
}

export default App;
