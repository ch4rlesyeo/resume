import React, { Component } from 'react'

import { Container, CenterView, Title } from './Styled'
import SocialLink from './SocialLink'

class Contact extends Component {
  render () {
    return (
      <Container>
        <CenterView>
          <Title>Keep in touch</Title>
          <SocialLink type='twitter' href='https://twitter.com/charlesyeo92' />
          <SocialLink type='github' href='https://github.com/ch4rlesyeo' />
          <SocialLink type='linkedin' filled href='https://www.linkedin.com/in/yeo-cheah-haw-9125b6138' />
          <SocialLink type='mail' filled href='mailto:yeocheahhaw92@gmail.com' />
        </CenterView>
      </Container>
    )
  }
}

export default Contact
