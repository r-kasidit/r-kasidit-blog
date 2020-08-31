import React, { Component } from 'react'
import { FacebookProvider, Comments } from 'react-facebook'

export default class Fbcomment extends Component {
  render() {
    return (
      <FacebookProvider appId="234272844571247">
        <Comments href="http://www.facebook.com" />
      </FacebookProvider>
    )
  }
}
