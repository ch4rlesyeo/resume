import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #__next {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }

  * {
    -webkit-overflow-scrolling: touch;
  }

  body {
    padding: 0;
    margin: 0;
    color: black;
    font-family: 'Source Sans Pro' !important;
    font-size: 15.222px;
    font-weight: 400;
    letter-spacing: 0.1px;

    input {
      font-family: 'Source Sans Pro';
    }

    a, div, span {
      font-family: 'Source Sans Pro';
    }

    .ant-btn {
      height: 36px;
      font-size: 16.222px;
      letter-spacing: 0.5px;
    }
  }

  .ant-layout {
    background: transparent;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: black;
    position: fixed;
    z-index: 1199;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px black, 0 0 5px black;
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    visibility: collapse;
    position: fixed;
    z-index: 1199;
    top: 90%;
    right: 10%;
  }

  #nprogress .spinner-icon {
    width: 0px;
    height: 0px;
    box-sizing: border-box;
    visibility: collapse;

    border: solid 2px transparent;
    border-top-color: black;
    border-left-color: black;
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
