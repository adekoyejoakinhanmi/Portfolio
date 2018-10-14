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
              I am a <span className="lighter">fullstack</span> backend developer.
            </h1>
            <p className="description">
            I am currently building applications as a fullstack developer at <a href="https://www.foodie.com.ng" target="blank">Foodie Nigeria</a>. I throughly enjoy working with nodejs and other backend technologies although I sometimes build frontend applications using HTML, CSS, Javascript.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header