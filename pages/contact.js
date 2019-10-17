import React from 'react'

import WithBase from '@components/WithBase'
import ContactScreen from '@screens/Contact'

const ContactPage = () => {
  return (
    <WithBase useHeader>
      <ContactScreen />
    </WithBase>
  )
}

export default ContactPage
