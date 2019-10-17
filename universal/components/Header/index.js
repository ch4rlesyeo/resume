import React from 'react'
import Link from 'next/link'

import { Container, CenterView, Spacer } from './Styled'

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <CenterView>
          <Link href='/' passHref><a>im.charles</a></Link>
        </CenterView>
      </Container>
      <Spacer />
    </React.Fragment>
  )
}

export default Header
