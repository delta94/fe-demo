import React from 'react';

import face1 from 'assets/images/face-male-1.jpg';

import { StatusTypes } from './type';
import StyledAvatar, { StatusIcon, AvatarClip, AvatarImage } from './style';

interface AvatarProps {
  src: string;
  status?: StatusTypes;
  size?: string;
  statusIconSize?: string;
  style?: React.CSSProperties;
}

function Avatar({
  src = face1,
  size = '48px',
  status,
  statusIconSize = '8px',
  style,
  ...rest
}: AvatarProps) {
  return (
    <StyledAvatar style={style} {...rest}>
      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt="" />
      </AvatarClip>
    </StyledAvatar>
  );
}

export default Avatar;
