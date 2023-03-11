import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

const publicVerses = [
  {
    content:
      "For by grace you have been saved through faith.  And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.  For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.",
    book: "Ephesians",
    chapter: 2,
    translation: "ESV",
    verses: [8, 9, 10],
  },
];

function App() {
  return (
    <div>
      <h1>
        Battle spiritual warfare by memorizing Bible Verses. Sign up today!
      </h1>
      <ul>
        {publicVerses.map((verse, index) => {
          const versesLength = verse.verses.length;
          const versesFormatted =
            versesLength > 1
              ? [verse.verses[0], verse.verses[versesLength - 1]].join("-")
              : verse.verses[0];
          return (
            <li key={verse.content}>
              {verse.content} -{verse.book} {verse.chapter}:{versesFormatted}
            </li>
          );
        })}
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
