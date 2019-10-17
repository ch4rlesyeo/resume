import styled from 'styled-components'

export const Container = styled.div`
  display: table;
  position: absolute;
  top: 50px;
  height: 80%;
  width: 100%;
`

export const CenterView = styled.div`
  display: table-cell;
  vertical-align: middle;
`

export const Name = styled.div`
  font-size: 28.222px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-align: center;
`

export const Navigations = styled.div`
  width: 512px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  a {
    color: rgb(160, 170, 180);
    font-size: 17.222px;
    /* font-weight: 600; */
    letter-spacing: 0.3px;

    &:hover {
      transition: 0.1s;
      color: rgb(16, 143, 233);
    }
  }

  @media screen and (max-width: 512px) {
    width: 100%;
  }
`
