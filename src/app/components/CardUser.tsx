import React, { ReactNode } from 'react';

interface CardUserProps {
  user: object;
}

const CardUserInfo: React.FC<CardUserProps> = ({ user }) => {
  return (
    <div className="">
      <div>
        <ul>
          {Object.entries(user).map(([key, value]) => (
            <li key={key}>
              {key === 'avatar_url' || key === 'login' ? (
                <></>
              ) : key === 'url' ? (
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
    </div>
  );
};

export default CardUserInfo;
