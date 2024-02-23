import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

interface AvatarContainerProps {
  src: string;
}

const AvatarContainer: React.FC<AvatarContainerProps> = ({ src }) => {
  return (
    <Avatar.Root>
      <Avatar.Image src={src} />
      <Avatar.Fallback />
    </Avatar.Root>
  );
};

export default AvatarContainer;
