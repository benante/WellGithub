'use client';
import React from 'react';
import Image from 'next/image';
import BackBtn from '../components/BackBtn';

const errorPage = () => {
  return (
    <main className="my-8 flex flex-col justify-center items-center">
      <div className=" w-fit bg-white p-8 my-4 borders-container shadow">
        <Image
          priority={true}
          src={'/userNotFound.png'}
          width={400}
          height={400}
          alt="error image of homer simpson"
        ></Image>
      </div>
      <BackBtn message={'Try again'}></BackBtn>
    </main>
  );
};

export default errorPage;
