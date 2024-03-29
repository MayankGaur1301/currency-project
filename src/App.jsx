import UseStateHook from "../src/components/useState";
import {
  BgColor,
  PasswordGenerator,
  PracticePG,
  InputBox, // currencyProject
} from "./components/Index.jsx";
import useCurrencyInfo from "./components/customHook/CustomHook"; // currencyProject
import { useState } from "react";

function App() {
  /*  const myObj = {
    name: "Mayank",
    email: "gaurm924@gmail.com",
  };
  const profession = "developer";      */

  // for currencyProject
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // return (     
  //   <>
  //     {/* <UseStateHook myObj={myObj} profession={undefined} /> */}
  //     {/* <BgColor /> */}
  //     {/* <PasswordGenerator /> */}
  //     {/* <PracticePG /> */}
  //   </>
  // );
  // how to swap variables--------

  const swap = () => {
    const tempFrom = from;
    const tempAmount = amount;
    setFrom(to);
    setTo(tempFrom);
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };
  

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
