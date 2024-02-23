'use client';

import React, { useEffect, useState } from 'react';
import fetchUser from '@/app/api/github';

function Page({ params }: { params: { username: string } }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUser(params.username);
      setUser(userData);
    };
    fetchData();
    console.log(user);
  }, []);

  return (
    <>
      <div>Not working</div>
      {user &&
        Object.keys(user).map((e) => {
          return <div key={e}>username is: {e}</div>;
        })}
    </>
  );
}

export default Page;
