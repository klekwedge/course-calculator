import "./App.css";
import { Box, Text, Button } from "@chakra-ui/react";
import Numbers from "../numbers/Numbers"

function App() {
  return (
    <div className="App">
      <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
        <Numbers></Numbers>
      </Box>
    </div>
  );
}

export default App;
