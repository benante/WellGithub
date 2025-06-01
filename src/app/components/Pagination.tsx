import React from 'react';

type PaginationProps = {
  arrayLenght: number;
  currentIndexPagination: number;
  setIndexPagination: (value: number) => void;
  sliceArray: (value: number) => void;
};

const Pagination = ({
  arrayLenght,
  currentIndexPagination,
  setIndexPagination,
  sliceArray,
}: PaginationProps) => {
  const length: number[] = [];
  let pages = arrayLenght;
  if (pages % 10 !== 0) {
    pages++;
  }
  for (let i = 1; i < pages / 10 + 1; i++) {
    length.push(i);
  }

  const handleRendering = (index: number) => {
    setIndexPagination(index);
    sliceArray(index);
  };

  // const sliceArray = (indexPagination: number) => {
  //   const sliceBy10 = indexPagination * 10;
  //   const copyRepos = [...renderedRepos];
  //   console.log(copyRepos);
  //   // Case Index 1
  //   if (indexPagination === 1) {
  //     return copyRepos.slice(0, sliceBy10);
  //   }
  //   // Case all indexes
  //   if (indexPagination * 10 < copyRepos.length) {
  //     return copyRepos.slice(sliceBy10 - 10, sliceBy10);
  //   }
  //   // Case last index
  //   return copyRepos.slice(sliceBy10 - 10);
  // };

  return (
    <section>
      <nav aria-label="pagination">
        <ul className="flex">
          {length.map((index) => (
            <button onClick={() => handleRendering(index)} key={index}>
              <li
                style={
                  index === currentIndexPagination
                    ? { fontWeight: 'bolder' }
                    : undefined
                }
              >
                {index}
              </li>
            </button>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
