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
            description: repo.description || 'N/A',
            html_url: repo.html_url,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            language: repo.language || 'N/A',
            homepage: repo.homepage || 'N/A',
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

  return (
    <main className=" flex flex-col justify-center mx-2 my-14">
      <h1 className="text-center text-2xl">Public Repos by {userName}</h1>
      <div>
        <ul className="flex flex-col items-center my-1">
          {reposArray.map((repo) => (
            <div
              key={repo.name}
              className=" bg-white p-8 my-4 borders-container shadow"
            >
              <li>
                <strong>Name</strong>: {repo.name}
              </li>
              <p>
                <strong>Description</strong>: {repo.description}
              </p>
              <p>
                <strong>Github page</strong>:
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.html_url}
                </a>
              </p>
              <p>
                <strong>Project webpage</strong>:
                <a
                  href={repo.homepage || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.homepage}
                </a>
              </p>
              <p>
                <strong>Created at</strong>: {repo.created_at}
              </p>
              <p>
                <strong>Last update</strong>: {repo.updated_at}
              </p>
              <p>
                <strong>Main language</strong>: {repo.language}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ReposPage;
