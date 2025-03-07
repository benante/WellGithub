'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchRepos } from '@/app/api/github';
import { Repo } from '@/app/types/types';

const ReposPage = () => {
  const params = useParams();
  const userName = params.username as string;

  const [reposArray, setReposArray] = useState<Repo[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const repos = await fetchRepos(userName);
        if (!repos) {
          throw new Error('Repos cannot be fetched');
        }
        const copyArray = repos.map((repo: Repo) => {
          const repository = {
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            language: repo.language,
          };
          return repository;
        });
        setReposArray(copyArray);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [userName]);

  return <div>{userName}</div>;
};

export default ReposPage;
