import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: white;
  line-height: 50px;
  box-shadow: 0 0 10px 0 rgba(0, 10, 20, 0.1);

  a {
    color: black;
    font-size: 17.222px;
    font-weight: 600;
    letter-spacing: 0.3px;

    &:hover {
      color: rgb(16, 143, 233);
    }
  }
`

export const CenterView = styled.div`
  width: 512px;
  margin: auto;

  @media screen and (max-width: 512px) {
    width: 100%;
    padding: 0 20px;
  }
`

export const Spacer = styled.div`
  height: 50px;
`
