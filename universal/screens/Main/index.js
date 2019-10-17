import React from 'react'
import Link from 'next/link'

import { Container, CenterView, Name, Navigations } from './Styled'

const MainScreen = () => {
  return (
    <Container>
      <CenterView>
        <Name>Charles Yeo</Name>
        <Navigations>
          <Link href='/stacks' passHref><a>Stacks</a></Link>
          <Link href='/experiences' passHref><a>Experiences</a></Link>
          <Link href='/projects' passHref><a>Projects</a></Link>
          <Link href='/contact' passHref><a>Contact</a></Link>
        </Navigations>
      </CenterView>
    </Container>
  )
}

export default MainScreen
