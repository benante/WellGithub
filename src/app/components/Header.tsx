import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <nav className="flex justify-around items-center p-4 border-b-2 border-b-black bg-white">
        <div>
          <Link href={'/'}>
            <h1 className="spaceInText font-bold text-3xl md:text-5xl ">
              {' '}
              Well Github
            </h1>
          </Link>

          <h2>Search engine for Github users</h2>
        </div>
        <Link href="https://github.com/" aria-label="GitHub Link">
          <FaGithub size={80} />
        </Link>
      </nav>
    </>
  );
};

export default Header;
