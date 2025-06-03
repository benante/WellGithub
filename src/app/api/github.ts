import { Repo } from "../types/types";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

function getHeaders() {
  const headers: Record<string, string> = {};
  if (GITHUB_TOKEN) {
    headers["Authorization"] = `token ${GITHUB_TOKEN}`;
  }
  return headers;
}

// Fetch general user info
export const fetchUser = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: getHeaders(),
  });
  const userData = await res.json();
  return userData;
};

// Fetch user's repos
export const fetchRepos = async (username: string) => {
  let allRepos: Repo[] = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
      { headers: getHeaders() }
    );
    console.log('Fetching page:', page, 'Status:', res.status);
    if (!res.ok) {
      const errorText = await res.text();
      console.error('GitHub API error response:', errorText);
      throw new Error(`Repos cannot be fetched: error at ${page}, status: ${res.status}`);
    }
    let userRepos: Repo[] = await res.json();
    
    allRepos = [...allRepos, ...userRepos];
    if (userRepos.length < 100) {
      break;
    }
    page++;
  }
  allRepos = allRepos.flat()
  console.log("all rpoes:", allRepos);
  return allRepos;
};
