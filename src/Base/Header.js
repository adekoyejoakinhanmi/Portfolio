import React from 'react';

class Header extends React.Component{
  constructor (props) {
    super()
  }
  render () {
    return (
      <div className="header">
        <nav className="container">
        
        </nav>
        <div className="hero">
          <div className="container">
            <h1>
              Hey there * <br/>
              My name is Adekoyejo. <br/>
              I am a javascript developer.
            </h1>
            <p className="description">
            I like to think of myself as having no special affinity to either the front end or the back end essentially because I love writing JavaScript. However, I am currently working as a front end developer at <a href="https://www.verifi.ng" target="_blank">VerifiNG</a>. Check out my github profile to see some of the work I have done.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
