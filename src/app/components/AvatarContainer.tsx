import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

interface AvatarContainerProps {
  name: string;
  src: string;
  onClick: React.MouseEventHandler;
}

const AvatarContainer: React.FC<AvatarContainerProps> = ({
  src,
  name,
  onClick,
}) => {
  return (
    <div
      className="bg-white my-2 flex flex-col items-center gap-1 pt-3 borders-container shadow w-3/4"
      onClick={onClick}
    >
      <Avatar.Root className="flex justify-center">
        <Avatar.Image className="rounded-full max-w-20" src={src} />
        <Avatar.Fallback />
      </Avatar.Root>
      <strong>{name}</strong>
    </div>
  );
};

export default AvatarContainer;
