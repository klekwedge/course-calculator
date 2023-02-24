import cheerio from "cheerio";
import axios from "axios";

const url = "https://www.banki.ru/products/currency/cb/";

const getData = async (currency: string) => {
  const array: string[] = [];

  const response = await axios.get(url);
  const $ = await cheerio.load(response.data);
  const regex = new RegExp(currency);

  $("tr").each((e, i) => {
    if ($(i).text().match(regex)) {
      $(i)
        .children()
        .each((e, x) => array.push($(x).html()));
    }
  });

  console.log(array);

  return array[3];
};

export default getData;
