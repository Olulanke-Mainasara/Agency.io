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
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY}/latest/${fromCurrency}`,
      { cache: "no-store" }
    );
    const data = await response.json();
    const exchangeRate = data.conversion_rates[toCurrency];
    const convertedAmount = amount * exchangeRate;
    setResult(`${convertedAmount.toFixed(2)} ${toCurrency}`);
  };

  React.useEffect(() => {
    convertCurrency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <p className="flex w-[90%] max-w-lg justify-between rounded-xl border border-brandDark px-5 py-8 text-5xl dark:border-brandLight md:text-6xl">
        {result}
      </p>

      <div className="flex w-[90%] max-w-lg space-x-5">
        <div className="flex w-full items-center justify-between space-x-2 rounded-lg border p-3">
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
            className="w-full border-brandDark text-xl outline-none dark:border-brandLight"
          >
            {currencies.map((currency: string) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <FaExchangeAlt size={60} className="text-3xl text-brandLight" />

        <div className="flex w-full items-center justify-between space-x-2 rounded-lg border p-3">
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
            className="w-full border-brandDark text-xl outline-none dark:border-brandLight"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex w-[90%] max-w-lg items-center justify-between rounded-lg border p-3">
        <label htmlFor="amount" className="text-xl">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border-brandDark text-center text-xl outline-none dark:border-brandLight"
        />
      </div>
      <button
        onClick={convertCurrency}
        className="w-[90%] max-w-lg rounded-lg bg-brandDark p-3 text-xl transition-colors hover:bg-brandDark/50"
      >
        Convert
      </button>
    </main>
  );
};

export default Currency;
