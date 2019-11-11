import styled from 'styled-components'

export const Container = styled.div`
  font-size: 14.222px;
  color: #151b26;
  letter-spacing: 0.3px;
  width: 512px;
  margin: auto;
  margin-top: 50px;

  a {
    color: rgb(26, 115, 232);
    font-weight: 600;
  }

  @media only screen and (max-width: 512px) {
    width: 100%;
    padding: 0 20px;
  }
`

export const ProjectItem = styled.div`
  margin-bottom: 60px;
`

export const ProjectName = styled.div`
  font-size: 17.222px;
  font-weight: 600;
`

export const ProjectNameWithLink = styled.a`
  font-size: 17.222px;
  font-weight: 600;
`

export const ProjecDesc = styled.div`
  color: rgb(40, 45, 50);
  font-size: 15.222px;
  margin-top: 5px;
`

export const InProgress = styled.div`
  padding: 3px 0;
`

export const MoreToCome = styled.div`
  text-align: center;
  font-size: 14.5px;
  color: rgb(140, 145, 150);
  padding-top: 50px;
`
