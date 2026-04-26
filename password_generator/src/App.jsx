import { useEffect, useRef } from "react";
import { useCallback } from "react";
import React from "react";
function App() {
  const [length, setLength] = React.useState(8);
  const [numAllowed, setNumAllowed] = React.useState(false);
  const [charAllowed, setCharAllowed] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const passwordRef = useRef(null);

  const passWordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passWordGenerator();
  }, [length, numAllowed, charAllowed, passWordGenerator]);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto shadow-2xl rounded-3xl px-6 py-8 bg-white/10 backdrop-blur-lg border border-white/20">
          <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
            🔐 Password Generator
          </h1>

          {/* Input + Copy */}
          <div className="flex items-center rounded-xl overflow-hidden mb-6 bg-white shadow-md">
            <input
              type="text"
              value={password}
              placeholder="Your password"
              className="outline-none w-full py-3 px-4 text-gray-800 font-medium"
              readOnly
              ref={passwordRef}
            />

            <button
              onClick={copyPass}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 font-semibold transition-all duration-300"
            >
              Copy
            </button>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-5 text-sm">
            {/* Range */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium">
                Length: <span className="text-orange-400">{length}</span>
              </label>

              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer w-full accent-orange-500"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
            </div>

            {/* Checkboxes */}
            <div className="flex justify-between">
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  className="accent-blue-500"
                  onChange={() => {
                    setNumAllowed((prev) => !prev);
                  }}
                />
                Numbers
              </label>

              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  className="accent-pink-500"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                Symbols
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
