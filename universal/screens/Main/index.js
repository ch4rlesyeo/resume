import React from 'react'
import Link from 'next/link'

import { Container, CenterView, DetailsView, Name, Description, Navigations } from './Styled'

const MainScreen = () => {
  return (
    <Container>
      <CenterView>
        <DetailsView>
          <Name>Hi, I'm <b>Charles Yeo</b></Name>
          <Description>
            Software engineer for web, mobile and server applications.
          </Description>
          <Navigations>
            <Link href='/stacks' passHref><a>Skills</a></Link>
            <Link href='/experiences' passHref><a>Experiences</a></Link>
            <Link href='/projects' passHref><a>Personal Projects</a></Link>
            <Link href='/contact' passHref><a>Contacts</a></Link>
          </Navigations>
        </DetailsView>
      </CenterView>
    </Container>
  )
}

export default MainScreen
