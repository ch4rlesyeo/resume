import React from 'react'
import PropTypes from 'prop-types'

import { SocialAnchor, SocialIcon } from './Styled'

const SocialLink = (props) => {
  return (
    <SocialAnchor href={props.href} target='_blank'>
      <SocialIcon theme={props.filled ? 'filled' : 'outlined'} type={props.type} />
    </SocialAnchor>
  )
}

SocialLink.propTypes = {
  href: PropTypes.string,
  type: PropTypes.string
}

export default SocialLink
