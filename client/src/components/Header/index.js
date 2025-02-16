import React from 'react';
import GithubIcon from "../../assets/icons/github.svg";  // Import SVG as React Component
import InstagramIcon from "../../assets/icons/instagram.svg";  // Use normal import for other SVGs
import DiscordIcon from "../../assets/icons/discord.svg";  // Use normal import for other SVGs
import "./index.scss";

const Header = () => {
  return (
      <div className='header-wrapper'>
          <div className="header-container">
      <div className="header-left">
        <div className="header-logo">
          {"<C/>"}
        </div>
        <div className="header-user-name">
          Vishnu Vardhan Raju
        </div>
      </div>
      <div className="header-right">
        <div className="ctas-container">
          <a className="header-ctas" href="/home">
            Home
          </a>
          <a className="header-ctas" href="/projects">
            Projects
          </a>
        </div>
        <div className="socials-container">
          <a className="social-wrapper">
            <img src={InstagramIcon} alt="Instagram logo"  className='social-icon'/>
            <div className='social-title'>Instagram</div>
          </a>
          <a className="social-wrapper">
            <img src={DiscordIcon} alt="Discord logo" className='social-icon'/>
            <div className='social-title'>Discord</div>
          </a>
          <a className="social-wrapper">
            <img src={GithubIcon} alt="Discord logo" className='social-icon'/>
            <div className='social-title'>Github</div>
          </a>
        </div>
      </div>
    </div>
      </div>
  );
}

export default Header;
