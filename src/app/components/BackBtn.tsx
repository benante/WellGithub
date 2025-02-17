import React from 'react';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

interface BackBtnProps {
  message?: string;
}
const BackBtn: React.FC<BackBtnProps> = ({ message }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="bg-white border border-black rounded-2xl shadow px-4 py-1.5 my-6"
    >
      {message ? (
        <span>{message}</span>
      ) : (
        <IoArrowBack size={'2em'}></IoArrowBack>
      )}
    </button>
  );
};

export default BackBtn;
