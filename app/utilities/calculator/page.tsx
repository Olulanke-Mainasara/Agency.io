"use client";

import React from "react";

const Calculator = () => {
  const [operation, setOperation] = React.useState("0");
  const [answer, setAnswer] = React.useState("0");
  const handleClick = (event: any) => {
    event.preventDefault();
    if (operation === "0" && event.target.name !== "operation") {
      setOperation(event.target.value);
    } else if (event.target.name === "operation") {
      setOperation(operation + " " + event.target.value + " ");
    } else {
      setOperation(operation + event.target.value);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center pt-10">
      <div className="scale-90 rounded-lg text-3xl md:text-4xl">
        <div className="space-y-2 rounded-lg border border-brandLight px-4 py-5">
          <div className="text-right">{operation}</div>

          <div className="text-right">{answer}</div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-5 md:gap-x-7">
          <button
            className="rounded-full border border-brandLight transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            onClick={() => {
              setOperation("0");
              setAnswer("0");
            }}
          >
            ac
          </button>
          <button
            name="operation"
            className="rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="%"
            onClick={(e) => handleClick(e)}
          >
            %
          </button>
          <button
            name="operation"
            onClick={(e) => handleClick(e)}
            className="rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="/"
          >
            /
          </button>
          <button
            name="operation"
            className="rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="*"
            onClick={(e) => handleClick(e)}
          >
            x
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="7"
            onClick={(e) => handleClick(e)}
          >
            7
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="8"
            onClick={(e) => handleClick(e)}
          >
            8
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="9"
            onClick={(e) => handleClick(e)}
          >
            9
          </button>
          <button
            name="operation"
            className="rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="-"
            onClick={(e) => handleClick(e)}
          >
            -
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="4"
            onClick={(e) => handleClick(e)}
          >
            4
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="5"
            onClick={(e) => handleClick(e)}
          >
            5
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="6"
            onClick={(e) => handleClick(e)}
          >
            6
          </button>
          <button
            name="operation"
            className="rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="+"
            onClick={(e) => handleClick(e)}
          >
            +
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="1"
            onClick={(e) => handleClick(e)}
          >
            1
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="2"
            onClick={(e) => handleClick(e)}
          >
            2
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="3"
            onClick={(e) => handleClick(e)}
          >
            3
          </button>
          <button
            className="row-span-2 rounded-full border border-brandLight transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            onClick={() => setAnswer(eval(operation))}
          >
            =
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="0"
            onClick={(e) => handleClick(e)}
          >
            0
          </button>
          <button
            className="operand rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="."
            onClick={(e) => handleClick(e)}
          >
            .
          </button>
          <button
            name="operation"
            className="rounded-full border border-brandLight px-4 py-5 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            value="-"
            onClick={(e) => handleClick(e)}
          >
            +/-
          </button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
