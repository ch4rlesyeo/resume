import React from 'react'

import WithBase from '@components/WithBase'
import StacksScreen from '@screens/Stacks'

const StacksPage = () => {
  return (
    <WithBase useHeader>
      <StacksScreen />
    </WithBase>
  )
}

export default StacksPage
