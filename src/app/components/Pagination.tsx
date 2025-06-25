import React from 'react';
import { chunkArray } from '../functions';

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
  const pagIndexes: number[] = [];
  let pages = arrayLenght;
  console.log('pages', pages);
  if (pages % 10 !== 0) {
    pages++;
  }
  for (let i = 1; i < pages / 10 + 1; i++) {
    pagIndexes.push(i);
  }

  const handleRendering = (index: number) => {
    setIndexPagination(index);
    sliceArray(index);
  };

  return (
    <section>
      <nav className="flex justify-end mt-4 mx-4" aria-label="pagination">
        <ul className="flex gap-2 ">
          {pagIndexes.map((index) => (
            <button onClick={() => handleRendering(index)} key={index}>
              <li
                style={
                  index === currentIndexPagination
                    ? {
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: '1000%',
                        marginLeft: '5px',
                        marginRight: '5px',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        fontWeight: 'bolder',
                        // textDecorationLine: 'underline',
                      }
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
