import React, { Component } from 'react'

import { Timeline } from 'antd'

import { Container, PastDot, PresentDot } from './Styled'
import Progress from './Progress'

import { experiences } from './Data'

class Experience extends Component {
  renderDot = (isPresent) => {
    if (isPresent) {
      return <PresentDot />
    }

    return <PastDot />
  }

  render () {
    return (
      <Container>
        <Timeline>
          {experiences.map((exp, index) => {
            return (
              <Timeline.Item dot={this.renderDot(exp.isPresent)} key={index}>
                <Progress experience={exp} />
              </Timeline.Item>
            )
          })}
        </Timeline>
      </Container>
    )
  }
}

export default Experience
