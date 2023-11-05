import React from 'react';
import './Header.css';
import headerlogo from "./headerlogo.png";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
        <img 
          className="header__logo"
          src={headerlogo}
        />

        <div className="header__search">
          <input 
            className="header__searchInput"
            type="text"
          />
          <SearchIcon
            className="header__searchIcon"
          />
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">
              Stores & Services
            </span>
            <span className="header__optionLineTwo">
              Sephora Eaton Centre
            </span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">
              Sign in
            </span>
            <span className="header__optionLineTwo">
              for FREE Shipping
            </span>
          </div>
          <div className="header__option">
            <div className="header__mini-options">

            </div>
            <div className="header__mini-options">

            </div>
            <div className="header__mini-options">

            </div>                        
          </div>                    
        </div>
    </div>
  )
}

export default Header
