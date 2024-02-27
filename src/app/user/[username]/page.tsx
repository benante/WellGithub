'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import fetchUser from '@/app/api/github';
import AvatarContainer from '@/app/components/AvatarContainer';

const mock = {
  login: 'benante',
  id: 63957194,
  avatar_url: 'https://avatars.githubusercontent.com/u/63957194?v=4',
};

// console.log(mock);

interface Info {
  login: string;
  avatar_url: string | null;
  company: string | null;
  email: string | null;
  followers: number;
  following: number;
  location: string | null;
  public_repos: number | null;
  url: string;
}

function Page({ params }: { params: { username: string } }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchUser(params.username);
      const {
        login,
        avatar_url,
        company,
        email,
        followers,
        following,
        location,
        public_repos,
        url,
      } = res;
      const userInfo: Info = {
        login,
        avatar_url,
        company,
        email,
        followers,
        following,
        location,
        public_repos,
        url,
      };
      setUser(userInfo);
    };
    fetchData();
  }, []);

  return (
    <>
      {user && (
        <ul>
          {Object.entries(user).map(([key, value]) => (
            <li key={key}>
              {key === 'avatar_url' ? (
                <AvatarContainer src={value as string}></AvatarContainer>
              ) : key === 'url' ? (
                <>
                  <strong>github page</strong>:{' '}
                  <a href={value as string}>{value as string}</a>
                </>
              ) : (
                <>
                  <strong>{key}</strong>: {(value as ReactNode) || 'N/a'}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Page;
