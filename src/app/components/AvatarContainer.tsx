import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

interface AvatarContainerProps {
  name: string;
  src: string;
}

const AvatarContainer: React.FC<AvatarContainerProps> = ({ src, name }) => {
  return (
    <div>
      <strong>{name}</strong>
      <Avatar.Root>
        <Avatar.Image className="rounded-full" src={src} />
        <Avatar.Fallback />
      </Avatar.Root>
    </div>
  );
};

export default AvatarContainer;
