'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import fetchUser from '@/app/api/github';
import AvatarContainer from '@/app/components/AvatarContainer';

interface Info {
  name: string;
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
        name,
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
        name,
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
  });

  return (
    <>
      <div className="">
        {user && (
          <div>
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
                  ) : key === 'login' ? (
                    <>
                      <strong>{value as string}</strong>
                    </>
                  ) : (
                    <>
                      <strong>{key}</strong>: {(value as ReactNode) || 'N/a'}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
