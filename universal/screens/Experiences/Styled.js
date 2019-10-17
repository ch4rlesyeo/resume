import styled from 'styled-components'

const dotSize = '8px'

export const Container = styled.div`
  width: 512px;
  margin: auto;
  margin-top: 70px;

  @media screen and (max-width: 512px) {
    width: 100%;
    padding: 0 20px;
  }
`

export const PastDot = styled.div`
  height: ${dotSize};
  width: ${dotSize};
  border-radius: 50%;
  background: rgb(210, 212, 214);
`

export const PresentDot = styled.div`
  height: ${dotSize};
  width: ${dotSize};
  border-radius: 50%;
  background: black;
`

export const DateText = styled.span`
  font-size: 15.222px;
  font-weight: ${props => props.last ? 'bold' : '400'};
  color: ${props => props.last ? 'black' : 'rgb(140, 145, 150)'};
  letter-spacing: 0.2px;
  margin-right: 10px;
`

export const CompanyName = styled.a`
  display: inline-block;
  padding: 0px;
  font-size: 17.222px;
  font-weight: 600;
  color: #151b26;
  letter-spacing: 0.2px;
  text-decoration: none;

  &:hover {
    color: #1890ff;
  }

  &:focus {
    text-decoration: none;
  }
`

export const JobRole = styled.div`
  font-size: 14.222px;
  font-weight: 400;
  color: rgb(130, 130, 130);
  letter-spacing: 0.2px;
  padding-bottom: 10px;
`

export const JobDescription = styled.div`
  font-size: 14.5px;
  font-weight: 400;
  color: #151b26;
  padding: 10px 0;
  letter-spacing: 0.2px;
`

export const Spacer = styled.div`
  height: 30px;
`
