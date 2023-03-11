import authHeader from "./auth-header";

const getAllUserVerses = () => {
  return fetch("https://holy-verses-api.onrender.com/api/verse", {
    headers: authHeader(),
  });
};

const verseService = {
  getAllUserVerses,
};

export default verseService;
