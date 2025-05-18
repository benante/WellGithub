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
    getData();
  }, [userName]);

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
          created_at: new Date(repo.created_at).toDateString(),
          updated_at: new Date(repo.updated_at).toDateString(),
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

  return (
    <main className="my-14">
      <div className="flex flex-col items-center ">
        <h1 className="text-center text-2xl">Public repos by {userName}</h1>
        <section className="mt-5">
          <label htmlFor="selection">Order by:</label>
          <select
            className=" bg-slate-200 ml-2 border-2   border-slate-900 rounded-md p-"
            name="selection"
            id="selection"
            onClick={(e) => {
              if (e.currentTarget.value !== '')
                console.log(e.currentTarget.value);
            }}
          >
            <option value="">--Choose order--</option>
            <option value="last-updated">last updated</option>
            <option value="oldest">oldest</option>
            <option value="newest">newest</option>
            <option value="alphabet">alphabet</option>
          </select>
        </section>
      </div>
      <section>
        <nav aria-label="pagination">
          <ul>
            <li>1</li>
          </ul>
        </nav>
      </section>
      <div className="m-4">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xlg:grid-cols-3">
          {reposArray.map((repo, index) => {
            while (index <= 10)
              return (
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
                    <strong>Created at</strong>: {repo.created_at}
                  </p>
                  <p>
                    <strong>Last update</strong>: {repo.updated_at}
                  </p>
                  <p>
                    <strong>Main language</strong>: {repo.language}
                  </p>
                </div>
              );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ReposPage;
