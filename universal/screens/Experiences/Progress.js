import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from 'antd'
import { DateText, CompanyName, JobRole, JobDescription, Spacer } from './Styled'

class Progress extends Component {
  render () {
    const { experience } = this.props

    return (
      <React.Fragment>
        <Row>
          <Col span={7}>
            <DateText last={experience.isLast}>{experience.time}</DateText>
          </Col>
          <Col span={17}>
            <CompanyName href={experience.company && experience.company.link} target='_blank'>
              {experience.company && experience.company.name}
            </CompanyName>
            <JobRole>
              {experience.company && experience.company.role}
            </JobRole>
            {experience.company.descriptions && experience.company.descriptions.map((desc, index) => (
              <JobDescription key={index}>
                {desc.text}
              </JobDescription>
            ))}
          </Col>
        </Row>
        {experience && !experience.isPresent && <Spacer />}
      </React.Fragment>
    )
  }
}

Progress.propTypes = {
  experience: PropTypes.object
}

export default Progress
