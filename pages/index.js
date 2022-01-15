// import { Emoji } from "emoji-mart";

import "emoji-mart/css/emoji-mart.css";

// import { Picker } from "emoji-mart";
import { useState } from "react";

import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setMemo(e.target.value);
  };

  const handleSubmit = (e) => {
    // prevent page from refreshing on submit
    e.preventDefault();
    setMemoList([memo, ...memoList]);
    // Clear input by resetting state? It no work :(
    setMemo("");
  };
  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-900 min-h-screen">
      <Meta title="Home" />
      <Nav />
      <main className="m-6 flex flex-col">
        <h1 className="text-center title mb-4">Wahoo</h1>
        <form action="/" className="mx-auto">
          <div className="flex flex-row space-x-3 items-center">
            {/** Emoji Picker component (has all the emojis) */}
            {/* <Picker /> */}
            <button className="absolute p-5" type="reset">
              🐟
            </button>
            <input
              className="bg-gray-200 pr-2 pl-8 py-2 rounded-lg dark:bg-gray-700 w-96"
              placeholder="Thinking about..."
              onChange={handleChange}
            />
            <button className="btn" type="submit" onClick={handleSubmit}>
              Yeet
            </button>
          </div>
        </form>
        <ul className="text-center mt-6">
          {memoList.length >= 1 ? (
            memoList.map((memo, index) => {
              return <li key={index}>{memo}</li>;
            })
          ) : (
            <p className="text-gray-400 text-center py-6 font-semibold">
              Nothing here yet...
            </p>
          )}
        </ul>
      </main>
    </div>
  );
}
