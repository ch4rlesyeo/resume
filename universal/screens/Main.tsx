import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Source Sans Pro';
  font-size: 16px;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MainScreen = () => {
  return <Container>{`I'm Charles`}</Container>;
};

export default MainScreen;
