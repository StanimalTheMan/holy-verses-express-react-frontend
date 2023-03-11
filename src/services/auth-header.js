export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);
  if (user && user.token) {
    // return { Authentication: `Bearer ${user.token}` };
    return { "x-auth-token": user.token };
  } else {
    return {};
  }
}
