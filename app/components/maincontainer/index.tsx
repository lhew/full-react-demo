import React, { FC } from 'react';
import { Card } from '../core/card';
import { MainContainerWrapper } from './styles';
import AppHeader from '../appheader';
import { ReactNode } from 'react';

interface MainContainerProps {
  children?: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <MainContainerWrapper key={Date.now()}>
      {' '}
      {/* hack to  avoid className mismatch */}
      <AppHeader />
      <Card>{children}</Card>
    </MainContainerWrapper>
  );
};

export default MainContainer;
