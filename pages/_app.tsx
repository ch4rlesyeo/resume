import React from 'react';
import NextApp from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  #__next {
    height: 100vh;
  }
`;

export default class extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}
