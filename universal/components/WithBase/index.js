import React from 'react'

import { initGA, logPageView } from '@utils/ga'
import '../Progress'
import Header from '../Header'
import { ContentView } from './Styled'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mounted: false
    }
  }

  componentDidMount () {
    initGA()

    logPageView()

    this.setState({
      mounted: true
    })
  }

  render () {
    const { useHeader, children } = this.props
    const { mounted } = this.state

    if (!mounted) {
      return null
    }

    return (
      <React.Fragment>
        {useHeader && (
          <Header />
        )}
        <ContentView notop={!useHeader}>
          {children}
        </ContentView>
      </React.Fragment>
    )
  }
}
