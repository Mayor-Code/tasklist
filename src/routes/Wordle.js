import React, { useEffect, useState, useContext } from "react";
import WordBox from "../components/WordBox";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Keyboard from "../components/Keyboard";
import DataContext from "../context/DataContext";

function Wordle() {
  const word = "ADMIN";
  const [isOpen, setIsOpen] = useState(false);
  const [innerText, setInnerText] = useState([
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
    [
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
      { letter: "", state: "" },
    ],
  ]);
  const { windowWidth } = useContext(DataContext);
  console.log(windowWidth);
  const [isGameMode, setIsGameMode] = useState(true);
  const [target, setTarget] = useState([0, 0]);
  const handleOptionButton = () => {
    setIsOpen((prev) => !prev);
    setIsGameMode((prev) => !prev);
  };
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (target[0] >= 6 || !isGameMode || isOpen) {
        return;
      }
      let newInnerText = [...innerText];

      const resultChecker = () => {
        let complete = true;
        for (let i = 0; i < 5; i++) {
          if (word.includes(newInnerText[target[0]][i].letter)) {
            console.log(newInnerText[target[0]][i].letter + 1);
            if (newInnerText[target[0]][i].letter === word[i]) {
              newInnerText[target[0]][i].state = "correct";
            } else {
              newInnerText[target[0]][i].state = "partial";
              complete = false;
            }
          } else {
            newInnerText[target[0]][i].state = "incorrect";
            complete = false;
          }
        }
        return complete;
      };
      if (e.key == "Backspace") {
        target[1] = target[1] ? target[1] - 1 : target[1];
        newInnerText[target[0]][target[1]].letter = "";
        setInnerText([...newInnerText]);
      } else if (e.key == "Enter") {
        if (target[1] < 5) {
          return;
        }
        const result = resultChecker();
        target[0] = target[0] + 1;
        target[1] = 0;
        setInnerText([...newInnerText]);

        if (result) {
          setIsGameMode(false);
        } else {
          console.log("try again");
        }
      } else {
        if (!/^[A-Za-z]$/.test(e.key)) {
          return;
        }
        if (target[1] >= 5) {
          return;
        }
        newInnerText[target[0]][target[1]].letter = e.key.toUpperCase();
        target[1] = target[1] + 1;
        setInnerText([...newInnerText]);
        console.log(innerText);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isGameMode]);
  return (
    <div className="px-4 py-2 relative">
      <h2 className="text-2xl font-semibold text-center">Wordle</h2>
      <button
        className={`absolute top-4 right-10 text-2xl ${
          isOpen ? "text-red-500" : "text-blue-500"
        } z-20`}
        onClick={handleOptionButton}
      >
        {isOpen ? <AiOutlineCloseCircle /> : <BsInfoCircle />}
      </button>
      <div className="flex flex-col gap-4 items-center mt-8">
        <div className="flex gap-4">
          <WordBox innerText={innerText[0][0]} />
          <WordBox innerText={innerText[0][1]} />
          <WordBox innerText={innerText[0][2]} />
          <WordBox innerText={innerText[0][3]} />
          <WordBox innerText={innerText[0][4]} />
        </div>
        <div className="flex gap-4">
          <WordBox innerText={innerText[1][0]} />
          <WordBox innerText={innerText[1][1]} />
          <WordBox innerText={innerText[1][2]} />
          <WordBox innerText={innerText[1][3]} />
          <WordBox innerText={innerText[1][4]} />
        </div>
        <div className="flex gap-4">
          <WordBox innerText={innerText[2][0]} />
          <WordBox innerText={innerText[2][1]} />
          <WordBox innerText={innerText[2][2]} />
          <WordBox innerText={innerText[2][3]} />
          <WordBox innerText={innerText[2][4]} />
        </div>
        <div className="flex gap-4">
          <WordBox innerText={innerText[3][0]} />
          <WordBox innerText={innerText[3][1]} />
          <WordBox innerText={innerText[3][2]} />
          <WordBox innerText={innerText[3][3]} />
          <WordBox innerText={innerText[3][4]} />
        </div>
        <div className="flex gap-4">
          <WordBox innerText={innerText[4][0]} />
          <WordBox innerText={innerText[4][1]} />
          <WordBox innerText={innerText[4][2]} />
          <WordBox innerText={innerText[4][3]} />
          <WordBox innerText={innerText[4][4]} />
        </div>
        <div className="flex gap-4">
          <WordBox innerText={innerText[5][0]} />
          <WordBox innerText={innerText[5][1]} />
          <WordBox innerText={innerText[5][2]} />
          <WordBox innerText={innerText[5][3]} />
          <WordBox innerText={innerText[5][4]} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white p-4">
          <h3 className="text-xl font-bold">How To Play</h3>
          <p>Guess the word in 6 tries</p>
          <ul className=" list-disc px-4">
            <li>Each guess most have a valid 5 letter</li>
            <li>
              The colors of the tiles will change to show how close your guess
              was to the word
            </li>
          </ul>
          <div className="mt-3">
            <h6 className="font-bold text-lg">Examples</h6>
            <div>
              <span className="font-semibold flex gap-2">
                <span className="w-6 h-6 grid place-content-center border-green-500 border-2 bg-green-200">
                  W
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  E
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  A
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  R
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  Y
                </span>
              </span>
              <p>W is in the word and in the correct spot.</p>
            </div>
            <div>
              <span className="font-semibold flex gap-2">
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  P
                </span>
                <span className="w-6 h-6 grid place-content-center border-yellow-500 border-2 bg-yellow-200">
                  I
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  L
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  L
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  S
                </span>
              </span>
              <p>I is in the word but in the wrong spot.</p>
            </div>
            <div>
              <span className="flex font-semibold gap-2">
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  V
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  A
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  G
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 bg-gray-200 border-2">
                  U
                </span>
                <span className="w-6 h-6 grid place-content-center border-gray-500 border-2">
                  E
                </span>
              </span>
              <p>U is not in the word in any spot.</p>
            </div>
          </div>
        </div>
      )}
      {windowWidth < 1024 ? <Keyboard /> : ""}
    </div>
  );
}

export default Wordle;
