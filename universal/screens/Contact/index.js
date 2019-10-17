import React, { Component } from 'react'

import { Container, CenterView, Title } from './Styled'
import SocialLink from './SocialLink'

class Contact extends Component {
  render () {
    return (
      <Container>
        <CenterView>
          <Title>Keep in touch</Title>
          <SocialLink type='facebook' href='https://www.facebook.com/yeo.haw' />
          <SocialLink type='linkedin' href='https://www.linkedin.com/in/yeo-cheah-haw-9125b6138' />
          <SocialLink type='mail' href='mailto:yeocheahhaw92@gmail.com' />
        </CenterView>
      </Container>
    )
  }
}

export default Contact
