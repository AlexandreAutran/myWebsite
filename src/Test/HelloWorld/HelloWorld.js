import React, {Component} from 'react'
import {STRINGS} from '../../Values/Strings'
import './HelloWorld.css';
import logo from './logo.png';

class HelloWorld extends Component {
  render(){
    return (
      <div className="HelloWorld">
        <body className="HelloWorld-body">
          <header className="HelloWorld-header">
            <img src={logo} className="HelloWorld-logo" alt="logo" />
          </header>
          <section className="HelloWorld-section1">
            <p>Ecocote WebSite <code>by</code> Mousquetaires</p>
            <a
              className="HelloWorld-link"
              href="https://github.com/AlexandreAutran/EcoCote"
              target="_blank"
              rel="noopener noreferrer"
            >
              {STRINGS.ecocote} GitHub
            </a>
          </section>
        </body>
      </div>
    );
  }
}

export default HelloWorld;