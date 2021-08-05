import React, { FC } from 'react';
import pkg from '../../package.json';
import { AppHeaderWrapper } from './styles';

const AppHeader: FC = () => {
  return (
    <AppHeaderWrapper>
      <h1>Todo App</h1>
      <small>v {pkg.version}</small>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
