import { Emoji } from "emoji-mart";

import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-900 min-h-screen">
      <Meta title="Home" />
      <Nav />
      <main className="m-6 flex flex-col">
        <h1 className="text-center title mb-4">Wahoo</h1>
        <form action="/" className="mx-auto">
          <div className="flex flex-row space-x-3 items-center">
            <input
              className="bg-gray-200 px-2 py-2 rounded-lg dark:bg-gray-700 w-96"
              placeholder="Thinking about..."
            />
            <button className="btn" type="submit">
              Yeet
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
