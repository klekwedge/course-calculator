import { useState } from "react";
import Convertible from "../Convertible/Convertible";

function Money() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  const dataMoney = ["Доллар США", "Рубли"];

  function convertMoney(
    fieldInput: HTMLSelectElement | null,
    fieldResult: HTMLSelectElement | null
  ) {
    if (fieldInput && fieldInput.value === "Рубли" && fieldResult) {
      switch (fieldResult.value) {
        case "Доллар США":
          setResult(input / 80);
          break;
        case "Рубли":
          setResult(input);
          break;
        default:
          setResult(input);
          break;
      }
    } else if (fieldInput && fieldInput.value === "Доллар США" && fieldResult) {
      switch (fieldResult.value) {
        case "Доллар США":
          setResult(input);
          break;
        case "Рубли":
          setResult(input * 80);
          break;
        default:
          setResult(input);
          break;
      }
    }
  }

  return (
    <Convertible
      data={dataMoney}
      convertFunc={convertMoney}
      result={result}
      setInput={setInput}
    />
  );
}

export default Money;
