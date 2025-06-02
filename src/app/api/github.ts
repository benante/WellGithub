// Fetch general user info

export const fetchUser = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const userData = await res.json()
  
  return userData
};


// Fetch user' s repos
export const fetchRepos = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
  const userRepos = await res.json()
  console.log("repos:" , userRepos)
  return userRepos
};
