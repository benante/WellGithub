import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <div className="flex justify-around items-center p-4 border-2 border-black bg-white">
        <div>
          <h1 className="letter-spacing: 0.1em font-bold text-3xl md:text-5xl ">
            Well Github
          </h1>
          <h2>Search engine for Github users</h2>
        </div>
        <Link href="https://github.com/">
          <FaGithub size={80} />
        </Link>
      </div>
    </>
  );
}
