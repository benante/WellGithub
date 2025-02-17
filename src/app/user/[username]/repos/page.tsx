'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchRepos } from '@/app/api/github';

const ReposPage = () => {
  const params = useParams();
  // params will return an array, hence the [0] to catch the first element
  const data = params.username[0];

  const getData = async () => {
    try {
      const repos = await fetchRepos(data);
      if (!repos) {
        throw new Error('Repos cannot be fetched');
      }
      console.log(repos);
    } catch (error) {
      console.log(error);
    }
  };

  const repos = getData();
  console.log(repos);

  // useEffect(() => {
  //   getData();
  // }, [params]);

  return <div>{data}</div>;
};

export default ReposPage;
