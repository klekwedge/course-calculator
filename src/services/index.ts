export const API_DOMAIN = "https://api.apilayer.com/fixer";
const API_KEY = import.meta.env.VITE_API_KEY

export const convert = (from: string, to: string, amount: number) =>
    `${API_DOMAIN}/convert?apikey=${API_KEY}&to=${to}&from=${from}&amount=${amount}`;

export const getSymbols = () =>
    `${API_DOMAIN}/symbols?apikey=${API_KEY}`;