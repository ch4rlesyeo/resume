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
    color: rgb(26, 115, 232);
    font-size: 16.5px;

    &:hover {
      transition: 0.1s;
      color: rgb(26, 115, 232);
    }
  }

  @media screen and (max-width: 512px) {
    width: 100%;
  }
`
