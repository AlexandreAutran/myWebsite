import React, {Component} from 'react'
import {STRINGS} from '../Values/Strings'
import {COLORS} from '../Values/Colors'

class HelloWorld extends Component {
  render(){
    return (
      <div className="App">
          <h1 style={{color: COLORS.BurlyWood}}>Hello, {STRINGS.cocote}!</h1>
        </div>
    );
  }
}

export default HelloWorld;