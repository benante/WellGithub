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
  // Get number of indexPages given that each page displays 10 projects and create an array with them

  const numOfIndexes: number[] = [];
  let pages = arrayLenght / 10;
  if (pages % 10 !== 0) pages++;

  for (let i = 1; i < pages + 1; i++) {
    numOfIndexes.push(i);
  }

  // create subArrays in chunks of 5
  const indexesSubArray = chunkArray(numOfIndexes, 5);

  const handleRendering = (index: number) => {
    setIndexPagination(index);
    sliceArray(index);
  };

  return (
    <section>
      <nav className="flex justify-end mt-4 mx-4" aria-label="pagination">
        <ul className="flex gap-2 ">
          {numOfIndexes.map((index) => (
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
