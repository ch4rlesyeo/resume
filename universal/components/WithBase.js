import React from 'react'

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
    const { mounted } = this.state

    if (!mounted) {
      return null
    }

    return this.props.children
  }
}
