import React from 'react'
import PropTypes from 'prop-types'

import { SocialAnchor, SocialIcon } from './Styled'

const SocialLink = (props) => {
  return (
    <SocialAnchor href={props.href} target='_blank'>
      <SocialIcon theme='filled' type={props.type} />
    </SocialAnchor>
  )
}

SocialLink.propTypes = {
  href: PropTypes.string,
  type: PropTypes.string
}

export default SocialLink
