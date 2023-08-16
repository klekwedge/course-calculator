import { Box } from '@chakra-ui/react';
import Converter from '../Converter/Converter';
import CustomNumberInput from '../CustomNumberInput/CustomNumberInput';

function App() {
  return (
    <Box h="90vh">
      <CustomNumberInput />
      <Converter />
    </Box>
  );
}

export default App;
