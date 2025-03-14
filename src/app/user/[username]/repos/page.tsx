'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchRepos } from '@/app/api/github';
import { Repo } from '@/app/types/types';
import Link from 'next/link';

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
            html_url: repo.html_url,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            language: repo.language || 'N/A',
            homepage: repo.homepage || undefined,
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
    <main className="  my-14">
      <h1 className="text-center text-2xl">Public repos by {userName}</h1>
      <div className="m-4">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xlg:grid-cols-3">
          {reposArray.map((repo) => (
            <div
              key={repo.name}
              className=" bg-white flex flex-col  p-8 my-4 borders-container shadow "
            >
              <li className="mb-2">
                <strong>{repo.name.toUpperCase()}</strong>
                {repo.description && <p>{repo.description}</p>}
              </li>

              <p>
                <strong>Github page</strong>:{' '}
                <Link
                  className="text-blue-600 break-words"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.html_url}
                </Link>
              </p>
              <p>
                <strong>Project webpage</strong>:{' '}
                {repo.homepage !== undefined ? (
                  <Link
                    className="text-blue-600 break-words"
                    href={repo.homepage!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.homepage}
                  </Link>
                ) : (
                  <>N/A</>
                )}
              </p>
              <p>
                <strong>Created at</strong>:{' '}
                {new Date(repo.created_at).toDateString()}
              </p>
              <p>
                <strong>Last update</strong>:{' '}
                {new Date(repo.updated_at).toDateString()}
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
