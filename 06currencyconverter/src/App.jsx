import { useState } from "react";
import { InputBox } from "./components/index.js";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("vnd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);

  };

  return (
    <div
      className=" w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="w-full">
        <div className=" w-full max-w-md mx-auto border border-gray-60 rounded-lg backdrop-blur-sm p-5 bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectedCurrency={from}
              />
            </div>
            <div className=" relative w-full h-0.5">
              <button className=" absolute left-1/2 -translate-x-1/2 
              -translate-y-1/2 border-2 border-white bg-blue-600 text-white rounded-md px-2 py-0.5"
                onClick={swap}>
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="to"
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={options}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2 px-3 text-white font-bold">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
