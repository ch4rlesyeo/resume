import styled from 'styled-components'

export const ContentView = styled.div`
  position: absolute;
  top: ${props => props.notop ? '0' : '50'}px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`
