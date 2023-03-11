// probably  not good to use localStorage to handle tokens in production but works for now

const login = (username, password) => {
  return fetch("https://holy-verses-api.onrender.com/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
      }

      return data;
    });
};

const authService = {
  login,
};

export default authService;
