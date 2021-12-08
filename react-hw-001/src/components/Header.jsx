import React, { Fragment } from 'react';
import Button from './Button';
import Link from './Link';
//import MyUl from './MyUl';
import profileImage from '../img/profile.jpg';

function Header() {
const ProfilStyle = {
  backgroundImage:'url(' + profileImage + ")",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};


  return (
    <Fragment>
      <header className="header">
        <nav className="header_nav">
          
          <ul className='nav_ul'>
            <li className='nav_li'><Link className='nav_ref'>Почта</Link></li>
            <li className='nav_li'><Link className='nav_ref'>Картинки</Link></li>
            <li>
              <Button className='header_service_btn'>
                <svg focusable="false" viewBox="0 0 24 24" className='dots_img'>
                  <path
                    d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                  2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                  2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                  2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                  2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                  2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,
                  2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                  2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                  2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z">
                  </path>
                </svg>
              </Button>
            </li>
            <li><Button className='header_profile_btn' style={ProfilStyle}></Button></li>
          </ul>
        </nav>

      </header>
    </Fragment>
  );
}

export default Header;
