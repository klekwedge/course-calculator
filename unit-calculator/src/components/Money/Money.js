import { useState, useRef } from "react";
import { Select, Flex, Input, Button, Text } from "@chakra-ui/react";
import getData from "./../../parser.js";
import Convertible from "../Convertible/Convertible.js";

function Money(props) {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  const dataMoney = ["Доллар США", "Рубли"];

  const first = useRef();
  const second = useRef();

  // async function convertMoney() {
  //   getData(first.current.value).then((x) => {
  //     console.log('object');
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

  function convertMoney() {
    if (first.current.value === "Рубли") {
      switch (second.current.value) {
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
    } else if (first.current.value === "Доллар США") {
      switch (second.current.value) {
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

  const selection = props.data.map((e) => {
    return (
      <option key={e} value={e}>
        {e}
      </option>
    );
  });

  // return <Convertible convert={convertMoney} data={dataMoney}></Convertible>;
}

export default Money;
