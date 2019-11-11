import styled from 'styled-components'

import { Icon } from 'antd'

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

export const Title = styled.div`
  color: rgb(130, 140, 150);
  font-size: 17.222px;
  letter-spacing: 0.3px;
  text-align: center;
  margin-bottom: 30px;
`

export const SocialAnchor = styled.a`
  color: black;

  &:hover {
    color: black;
  }
`

export const SocialIcon = styled(Icon)`
  margin: 0 25px;
  font-size: 30px;
  color: rgb(150, 160, 170);
`
