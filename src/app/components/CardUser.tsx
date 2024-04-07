import React, { ReactNode } from 'react';

interface CardUserProps {
  user: object;
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
                <a href={value}>{(value as ReactNode) || 'N/a'}</a>
              </>
            ) : (
              <>
                <strong>{key}</strong>: {(value as ReactNode) || 'N/a'}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardUserInfo;
