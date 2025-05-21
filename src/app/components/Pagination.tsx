import React from 'react';

type PaginationProps = {
  arrayLenght: number;
  setIndexPagination: (value: number) => void;
};

const Pagination = ({ arrayLenght, setIndexPagination }: PaginationProps) => {
  const length: number[] = [];
  let pages = arrayLenght;
  if (pages % 10 !== 0) {
    pages++;
  }
  for (let i = 1; i < pages / 10 + 1; i++) {
    length.push(i);
  }

  return (
    <section>
      <nav aria-label="pagination">
        <ul className="flex">
          {length.map((index) => (
            <button onClick={() => setIndexPagination(index)} key={index}>
              <li>{index}</li>
            </button>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
