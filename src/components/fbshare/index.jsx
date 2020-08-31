import React, { Component } from 'react'
import { FacebookProvider, ShareButton } from 'react-facebook'

export default class Fbshare extends Component {
  render() {
    return (
      <FacebookProvider appId="234272844571247">
        <ShareButton href="http://www.facebook.com">
          แชร์ไปยัง facebook
        </ShareButton>
      </FacebookProvider>
    )
  }
}
