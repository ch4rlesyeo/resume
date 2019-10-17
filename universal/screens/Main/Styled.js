import styled from 'styled-components'

export const Container = styled.div`
  display: table;
  position: absolute;
  top: 50px;
  height: 85%;
  width: 100%;
`

export const CenterView = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`

export const Name = styled.div`
  font-size: 24.222px;
  font-weight: 600;
  letter-spacing: 0.3px;
`

export const Navigations = styled.div`
  margin-top: 30px;

  a {
    color: rgb(150, 160, 170);
    font-size: 16.222px;
    letter-spacing: 0.1px;
    margin: 0 25px;

    &:hover {
      transition: 0.1s;
      color: rgb(16, 143, 233);
    }
  }
`
