import React, { ReactNode } from 'react';
import User from '@/app/types/types';
import Link from 'next/link';

interface CardUserProps {
  user: User;
}

const CardUserInfo: React.FC<CardUserProps> = ({ user }) => {
  return (
    <div className="max-w-fit bg-white p-8 my-4 borders-container shadow">
      <ul className="overflow-auto">
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            {key === 'avatar_url' || key === 'login' ? (
              <></>
            ) : key === 'html_url' ? (
              <>
                <strong>github page</strong>:{' '}
                <Link className="text-blue-600" href={value}>
                  {value || 'N/a'}
                </Link>
              </>
            ) : key === 'public_repos' ? (
              <>
                <strong>{key}</strong>:{' '}
                <Link
                  className="text-blue-600"
                  href={`/user/${user.login}/repos`}
                >
                  {value || 'N/a'}
                </Link>
              </>
            ) : (
              <>
                <strong>{key}</strong>: {value || 'N/a'}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardUserInfo;
