'use client';

import React, { useEffect, useState } from 'react';
import fetchUser from '@/app/api/github';
import AvatarContainer from '@/app/components/AvatarContainer';
import BackBtn from '@/app/components/BackBtn';
import CardUserInfo from '@/app/components/CardUser';

interface Info {
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

function Page({ params }: { params: { username: string } }) {
  const [user, setUser] = useState<Info | null>(null);
  const [toggle, setToggle] = useState(false);

  const toggleElement = (): void => {
    setToggle(!toggle);
  };

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
        html_url,
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
        html_url,
      };
      setUser(userInfo);
    };
    fetchData();
  }, [params.username]);

  return (
    <>
      <div className=" flex flex-col justify-center mx-2 my-14">
        <p className="text-center text-2xl">We found</p>
        <div className="flex flex-col items-center my-1">
          {user && (
            <>
              <AvatarContainer
                onClick={toggleElement}
                src={user.avatar_url}
                name={user.login}
              ></AvatarContainer>
              {toggle && <CardUserInfo user={user}></CardUserInfo>}
              {!toggle && (
                <p className="text-center text-sm" onClick={toggleElement}>
                  Click on the card for more info
                </p>
              )}

              <BackBtn></BackBtn>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
