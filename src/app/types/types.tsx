export default interface User {
  name: string;
  login: string;
  avatar_url: string;
  company: string | null;
  email: string | null;
  followers: number;
  following: number;
  location: string | null;
  public_repos: number | null;
  html_url: string;
}
