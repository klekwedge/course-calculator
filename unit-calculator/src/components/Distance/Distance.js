import { useState, useRef } from "react";
import Convertible from "./../Convertible/Convertible";

function Distance(props) {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  const dataDistance = ["Centimeters", "Meters"];

  const first = useRef();
  const second = useRef();

  function convert() {
    if (first.current.value === "Meters") {
      switch (second.current.value) {
        case "Centimeters":
          setResult(input * 100);
          break;
        case "Meters":
          setResult(input);
          break;
        default:
          setResult(input);
          break;
      }
    } else if (first.current.value === "Centimeters") {
      switch (second.current.value) {
        case "Centimeters":
          setResult(input);
          break;
        case "Meters":
          setResult(input / 100);
          break;
        default:
          setResult(input);
          break;
      }
    }
  }

  return (
    <Convertible
      data={dataDistance}
      convertFunc={convert}
      firstRef={first}
      secondRef={second}
      result={result}
      setInput={setInput}
    />
  );
}

export default Distance;
