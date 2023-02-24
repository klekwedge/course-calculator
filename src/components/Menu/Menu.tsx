import { Box, List, Button } from "@chakra-ui/react";
import { SlideFade, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface MenuProps {
  onClick: (mode: string) => void;
}

function Menu({ onClick }: MenuProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <HamburgerIcon
        w="45px"
        h="45px"
        p="5px"
        m="5px"
        cursor="pointer"
        borderRadius="5px"
        onClick={onToggle}
      />
      <SlideFade in={isOpen} offsetY="-20px" unmountOnExit>
        <Box
          bg="gray.100"
          p="10px"
          m="4px"
          borderRadius="8px"
          w="160px"
          position="absolute"
        >
          <List>
            <Button onClick={() => onClick("Calculator")}>Calculator</Button>
            <Button onClick={() => onClick("Converter")}>Converter</Button>
          </List>
        </Box>
      </SlideFade>
    </Box>
  );
}

export default Menu;
