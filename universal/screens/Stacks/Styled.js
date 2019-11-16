import styled from 'styled-components'

export const Container = styled.div`
  width: 512px;
  margin: auto;

  a {
    font-size: 15.222px;
    font-weight: 400;
    color: rgb(10, 15, 20);
    margin-right: 20px;
    display: inline-block;
    white-space: nowrap;

    &:hover {
      color: rgb(26, 115, 232);
    }
  }

  @media screen and (max-width: 512px) {
    width: 100%;
    padding: 0 20px;
  }
`

export const StackName = styled.div`
  font-size: 19.222px;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin: 80px 0 20px;

  &:first-child {
    margin-top: 50px;
  }
`

export const Section = styled.div`
  margin: 10px 0 30px;
`

export const SectionName = styled.div`
  color: rgb(150, 160, 170);
  font-size: 12.222px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`
