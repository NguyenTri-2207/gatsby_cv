import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./index.scss"
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const Header = () => (
  <header
  >
    <div className="header">
      <Link to="#" className="header_title">Portfolio</Link>
      <ul className="header_menu">
        <li><Link className="li" to="#">Home</Link></li>
        <li><Link to="#" activeClassName="active">About</Link></li>
        <li><Link to="#">Resume</Link></li>
        <li><Link to="#">Skills</Link></li>
        <li><Link to="#">Project</Link></li>
        <li><Link to="#">My Blog</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
      <div className="header_contact">
      <Link className="header_fb" to="google.com"><FaFacebook /></Link>
      <Link  className="header_git" to="google.com"><AiOutlineGithub/></Link>
      <Link className="header_linkedin" to="google.com"><TiSocialLinkedinCircular /></Link>
      </div>
    </div>
    <div className="name">
      <p>Hello, my name is</p>
      <p className="name_one">Nguyen Ngoc Tri</p>
      <span>And I'm a </span>
      <span className="name_position">Developer</span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
