import { FormControl, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';

interface CustomNumberInputProps {
  name: any;
  value: any;
  handleChange: any;
  isDisabled: any;
  initialRef: any;
}

function CustomNumberInput({ name, value, handleChange, isDisabled, initialRef }: CustomNumberInputProps) {
  return (
    <FormControl id={name}>
      <NumberInput allowMouseWheel name={name} value={value} onChange={handleChange} min={0} isDisabled={isDisabled}>
        <NumberInputField maxLength={9} ref={initialRef || null} onFocus={(event) => event.target.select()} />
        <NumberInputStepper />
      </NumberInput>
    </FormControl>
  );
}

export default CustomNumberInput;
