import { useId } from "react";
import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={`w-full bg-transparent bg-white p-3 text-sm rounded-lg flex ${className}`}>
      <div className=" w-1/2">
        <label htmlFor={id} className="text-black/40 inline-block mb-2">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="w-full outline-none bg-transparent py-3 p-2"
          placeholder="0"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="w-full text-black/40 mb-2">Currency type</p>
        <select
          className=" rounded-lg bg-white outline-none p-1"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
