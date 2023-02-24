import { useState } from "react";
// import getData from "../../helpers/parser.js";
import Convertible from "../Convertible/Convertible.js";

function Money() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  const dataMoney = ["Доллар США", "Рубли"];

  // async function convertMoney() {
  //   getData(first.current && first.current.value).then((x) => {
  //     // console.log('object');
  //     switch (second.current.value) {
  //       case "Доллар США":
  //         setResult(input);
  //         break;
  //       case "Рубли":
  //         setResult(input * Number(x));
  //         break;
  //       default:
  //         setResult(input);
  //         break;
  //     }
  //   });
  // }

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
