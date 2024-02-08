const fetchUser = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const userData = await res.json()
  console.log(userData);

  return userData
};

console.log(fetchUser("benante"));
