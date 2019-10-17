import React from 'react'
import NextApp from 'next/app'

import { Layout } from 'antd'

import { GlobalStyle } from '@screens/Styled'

export default class extends NextApp {
  render () {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}
