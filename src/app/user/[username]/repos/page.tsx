'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const ReposPage = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get('user/repos');

  return <div>params</div>;
};

export default ReposPage;
