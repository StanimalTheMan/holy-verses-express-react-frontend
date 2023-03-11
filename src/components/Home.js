import { useEffect, useState } from "react";
import VerseService from "../services/verse.service";

const Home = () => {
  const [userVerses, setUserVerses] = useState([]);

  useEffect(() => {
    VerseService.getAllUserVerses().then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
