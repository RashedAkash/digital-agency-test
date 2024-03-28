import { useState } from "react";
import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";
import { IoMenuSharp } from "react-icons/io5";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 

   
  return (
    <FullWidth>
      <Container>
        {/* mobile menu */}
        <div className="mobile-menu desktop-hidden">
          <div>
            <img src="/image/logo/logo.svg" alt="" />
          </div>
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <IoMenuSharp />
            {isOpen && (
              <ul className="mobile-list">
                <li className="mobile-link">
                  <a href="#">home</a>
                </li>
                <li className="mobile-link">
                  <a href="#">about</a>
                </li>
                <li className="mobile-link">
                  <a href="#">testimonials</a>
                </li>
                <li className="mobile-link">
                  <a href="#">contact</a>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* <menu></menu> */}
        <div className="navbar">
          <div>
            <img src="/image/logo/logo.svg" alt="" />
          </div>
          <div>
            <ul className="navbar-list">
              <li className="navbar-link">
                <a href="">home</a>
              </li>
              <li className="navbar-link">
                <a href="">about</a>
              </li>
              <li className="navbar-link">
                <a href="">testimonials</a>
              </li>
              <li className="navbar-link">
                <a href="">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </FullWidth>
  );
};

export default Navbar;