import React from 'react'
import { HelloContainer, HelloH1 } from './HelloWorldElements'
import { STRINGS } from '../../values/Strings'

const HelloWorld = () => {
  return (
    <HelloContainer>
      <HelloH1>Hello, {STRINGS.cocote}!</HelloH1>
    </HelloContainer>
  )
}

export default HelloWorld
