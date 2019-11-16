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

export const DetailsView = styled.div`
  width: 512px;
  margin: auto;

  @media screen and (max-width: 555px) {
    width: 100%;
    padding: 0 20px;
  }
`

export const Name = styled.div`
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.3px;
`

export const Description = styled.div`
  color: rgb(60, 70, 80);
  font-size: 17px;
`

export const Navigations = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  a {
    color: rgb(110, 115, 120);
    font-size: 15.222px;
    padding: 3px 0;
    border-bottom: 1px solid rgb(200, 202, 204);

    &:hover {
      transition: 0.1s;
      color: rgb(26, 115, 232);
      border-bottom-color: rgb(26, 115, 232);
    }
  }

  @media screen and (max-width: 555px) {
    width: 100%;
    margin-top: 30px;
    display: block;
    justify-content: flex-start;

    a {
      display: block;
      padding: 20px 0;
    }
  }
`
