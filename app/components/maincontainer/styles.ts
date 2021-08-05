import styled from 'styled-components';
import { Card } from '../core/card';

export const MainContainerWrapper = styled.div`
  margin: 2em auto;
  width: calc(100% - 1.5em);
  max-width: 40em;
  min-height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > ${Card} {
    margin-top: 1.5em;
    width: 100%;
    min-height: 20em;
  }
`;

export const LoadingWrapper = styled.p`
  text-align: center;
  padding: 2em 0;
`;

export const CenterWrapper = styled.div`
  & > p,
  & > h3,
  & > .icon {
    text-align: center;
    display: block;
  }
  & > .icon {
    font-size: 2.5em;
  }
`;
