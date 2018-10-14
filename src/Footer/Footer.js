import React from "react";

export default class Footer extends React.Component{
  constructor (props) {
    super()
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-boundary">
            <h1>Right now, I am not available for work but you can still say Hi.</h1>
            <div className="contact-box">
              <p>Email Address</p>
              <a href="mailto:koyesavedbygrace@yahoo.com">koyesavedbygrace@yahoo.com</a>
            </div>
          </div>
          <p className="text-center">Built with &hearts; and React </p>
        </div>
      </footer>
    )
  }
}