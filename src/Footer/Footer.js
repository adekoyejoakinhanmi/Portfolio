import React from "react";
import { FaGithubSquare, FaTwitterSquare, FaMedium, FaLinkedin } from "react-icons/fa";

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
              <p className="social-icons">
                <a href="https://www.linkedin.com/in/aakinhanmid/" target="blank"><FaLinkedin/></a>
                <a href="https://www.github.com/adekoyejoakinhanmi" target="blank"><FaGithubSquare/></a>
                <a href="https://www.twitter.com/senorNigeria" target="blank"><FaTwitterSquare/></a>
                <a href="https://medium.com/@senorNigeria" target="blank"><FaMedium/></a>
              </p>
            </div>
          </div>
          <p className="text-center">Built with &hearts; and React </p>
        </div>
      </footer>
    )
  }
}