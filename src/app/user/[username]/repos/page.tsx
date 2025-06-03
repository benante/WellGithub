'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchRepos } from '@/app/api/github';
import { Repo } from '@/app/types/types';
import Link from 'next/link';
import sortBy from '@/app/sortBy';
import Pagination from '@/app/components/Pagination';

const ReposPage = () => {
  const params = useParams();
  const userName = params.username as string;

  const [reposArray, setReposArray] = useState<Repo[]>([]);
  const [currentIndexPagination, setIndexPagination] = useState<number>(1);
  const [renderedRepos, setRenderedRepos] = useState<Repo[]>([]);

  // PAGINATION >>
  // 1. Set number pages
  // 2. Render correct slice of array
  // 3. Render pagination number

  useEffect(() => {
    getData();
  }, [userName]);

  const getData = async () => {
    try {
      const repos = await fetchRepos(userName);

      if (!repos) {
        throw new Error('Repos cannot be fetched');
      }

      const copyArray: Repo[] = [...repos];

      setReposArray(copyArray);
      setRenderedRepos(copyArray.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  const sliceArray = (indexPagination: number) => {
    const sliceBy10 = indexPagination * 10;
    const copyRepos = [...reposArray];
    console.group('Pagination func', copyRepos);
    // Case Index 1
    if (indexPagination === 1) {
      setRenderedRepos(copyRepos.slice(0, sliceBy10));
      console.log('case1');
      console.log(copyRepos.slice(0, sliceBy10));
      return;
    }
    // Case all indexes
    if (indexPagination * 10 < copyRepos.length) {
      setRenderedRepos(copyRepos.slice(sliceBy10 - 10, sliceBy10));
      console.log('case2');
      console.log(copyRepos.slice(sliceBy10 - 10, sliceBy10));
      return;
    }
    // Case last index
    setRenderedRepos(copyRepos.slice(sliceBy10 - 10));
    console.log('caseLast');
    console.log(copyRepos.slice(sliceBy10 - 10));
    console.groupEnd();
  };

  const handleOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOrder = e.currentTarget.value;
    const orderedArray = [...reposArray];
    console.group('handleOrder from reposArray', reposArray);
    console.log('orderedArrays', orderedArray);
    sortBy(reposArray, newOrder);
    setIndexPagination(1);

    setRenderedRepos(reposArray.slice(0, 10));
    console.log('renderedRep', renderedRepos);
    console.groupEnd();
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
            onChange={handleOrder}
          >
            <option value="">--Choose order--</option>
            <option value="last-updated">last updated</option>
            <option value="oldest">oldest</option>
            <option value="newest">newest</option>
            <option value="alphabet">alphabet</option>
          </select>
        </section>
      </div>
      <Pagination
        arrayLenght={reposArray.length}
        setIndexPagination={setIndexPagination}
        sliceArray={sliceArray}
        currentIndexPagination={currentIndexPagination}
      />
      <div className="m-4">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xlg:grid-cols-3">
          {renderedRepos.map((repo) => {
            return (
              <div
                key={repo.name}
                className=" bg-white flex flex-col  p-8 my-4 borders-container shadow "
              >
                <li className="mb-2">
                  <strong>{repo.name.toUpperCase()}</strong>
                  {repo.description && <p>{repo.description}</p>}
                </li>
                <span>{currentIndexPagination}</span>
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
                  {repo.homepage !== null ? (
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
      <Pagination
        arrayLenght={reposArray.length}
        setIndexPagination={setIndexPagination}
        sliceArray={sliceArray}
        currentIndexPagination={currentIndexPagination}
      />
    </main>
  );
};

export default ReposPage;
