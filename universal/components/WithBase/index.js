import React from 'react'

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
        <ContentView>
          {children}
        </ContentView>
      </React.Fragment>
    )
  }
}
