import React from 'react';
import styled, { keyframes } from 'styled-components';

import helpers from '@/assets/style/helpers';

const loading = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`;

const LoadingWrapper = styled.div`
  >div {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    background-color: ${helpers.theme_color};
    animation: ${loading} 1.4s infinite ease-in;
  }
  >div:nth-child(2) {
    animation-delay: -0.7s;
  }
`;

interface LoadingProps {
  show?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  show = true,
}) => {
  return (
    <LoadingWrapper style={show ? { display: "" } : { display: "none" }}>
      <div></div>
      <div></div>
    </LoadingWrapper>
  );
};

export default React.memo<typeof Loading>(Loading);
