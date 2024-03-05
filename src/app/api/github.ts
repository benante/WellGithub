const fetchUser = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const userData = await res.json()
  
  return userData
};

export default fetchUser