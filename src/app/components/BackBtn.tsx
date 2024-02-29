import React from 'react';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="bg-white border border-black rounded-2xl shadow px-4 py-1.5 my-6"
    >
      <IoArrowBack size={'2em'}></IoArrowBack>
    </button>
  );
};

export default BackBtn;
