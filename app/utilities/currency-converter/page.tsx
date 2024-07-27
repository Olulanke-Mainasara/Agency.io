"use client";

import React from "react";
import Image from "next/image";
import { country_list } from "@/static-data/country_list";
import { FaExchangeAlt } from "react-icons/fa";

const Currency = () => {
  const currencies = Object.keys(country_list);
  const [fromCurrency, setFromCurrency] = React.useState("USD");
  const [toCurrency, setToCurrency] = React.useState("EUR");
  const [amount, setAmount] = React.useState(1);
  const [result, setResult] = React.useState("Converting...");

  const handleCurrencyChange = (
    selectedOption: string,
    type: "from" | "to"
  ) => {
    if (type === "from") {
      setFromCurrency(selectedOption);
    } else {
      setToCurrency(selectedOption);
    }
  };

  const convertCurrency = async () => {
    setResult("Converting...");
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY}/latest/${fromCurrency}`,
      { cache: "no-store" }
    );
    const data = await response.json();
    const exchangeRate = data.conversion_rates[toCurrency];
    const convertedAmount = amount * exchangeRate;
    const formattedAmount = convertedAmount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setResult(`${formattedAmount} ${toCurrency}`);
  };

  React.useEffect(() => {
    convertCurrency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-5">
      <p className="flex w-[90%] max-w-lg justify-between rounded-xl border border-brandDark px-5 py-8 text-4xl dark:border-brandLight md:text-5xl">
        {result}
      </p>

      <div className="flex w-[90%] max-w-lg items-center space-x-5">
        <div className="flex flex-col items-center justify-between w-full p-3 border rounded-lg sm:flex-row sm:space-x-2">
          <label htmlFor="from-currency" className="w-full text-xl">
            From:
          </label>
          <Image
            src={`https://flagsapi.com/${
              fromCurrency ? country_list[fromCurrency] : "US"
            }/flat/64.png`}
            alt={`Flag of ${country_list[fromCurrency]}`}
            width={60}
            height={30}
          />
          <select
            id="from-currency"
            value={fromCurrency}
            onChange={(e) => handleCurrencyChange(e.target.value, "from")}
            className="w-full text-xl outline-none border-brandDark dark:border-brandLight"
          >
            {currencies.map((currency: string) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <FaExchangeAlt size={60} className="text-3xl text-brandLight" />

        <div className="flex flex-col items-center justify-between w-full p-3 border rounded-lg sm:flex-row sm:space-x-2">
          <label htmlFor="to-currency" className="w-full text-xl">
            To:
          </label>
          <Image
            src={`https://flagsapi.com/${
              toCurrency ? country_list[toCurrency] : "FR"
            }/flat/64.png`}
            alt={`Flag of ${country_list[toCurrency]}`}
            width={60}
            height={30}
          />
          <select
            id="to-currency"
            value={toCurrency}
            onChange={(e) => handleCurrencyChange(e.target.value, "to")}
            className="w-full text-xl outline-none border-brandDark dark:border-brandLight"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex h-14 w-[90%] max-w-lg items-center justify-between overflow-hidden rounded-lg border">
        <label htmlFor="amount" className="py-3 pl-3 text-xl">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="h-full text-xl text-center bg-transparent border-l outline-none border-brandDark dark:border-brandLight sm:w-1/2"
        />
      </div>
      <button
        onClick={convertCurrency}
        disabled={result === "Converting..."}
        className="w-[90%] max-w-lg rounded-lg bg-brandDark p-3 text-xl transition-colors hover:bg-brandDark/50 disabled:opacity-50"
      >
        Convert
      </button>
    </main>
  );
};

export default Currency;
