import React, { useCallback, useEffect, useRef, useState } from "react";

const PracticePG = () => {
  const [length, setLength] = useState(6);
  const [addNumber, setAddNumber] = useState(false);
  const [addChar, setAddChar] = useState(false);
  const [password, setPassword] = useState("");
  const [isSelected, setIsSelected] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(addNumber) str += "0123456789"
    if(addChar) str += "!@#$%^&*,.?/"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, addNumber, addChar]);

  useEffect(() => {
    passwordGenerator();
    setIsSelected(false)
  }, [length, addNumber, addChar]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    setIsSelected(true)
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Your Password</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="password"
          className="outline-none w-full py-1 px-3"
          value={password}
          ref={passwordRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>
          {isSelected? "copied" : "copy"}
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input
            type="range"
            className="outline-none w-full py-1 px-3"
            min={6}
            max={40}
            onChange={(e) => {
                setLength(e.target.value)
            }}
          />
          <label>Length: {length}</label>
        </div>
        <br />
        <div className="flex items-center gap-x-1 ">
          <input type="checkbox" defaultChecked={addNumber} className="outline-none w-full py-1 px-3" onChange={() => {
              setAddNumber((prev) => !prev);
            }}/>
          <label htmlFor="numberInput">Numbers</label>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={addChar} onChange={() => {
            setAddChar((prev) => !prev)
        }}  />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  );
};

export default PracticePG;
