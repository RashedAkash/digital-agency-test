import { useState } from "react";
import Container from "../../shared/Container";

import { IoMenuSharp } from "react-icons/io5";
import ContainerFulid from '../../shared/ContainerFulid'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContainerFulid
    >
      <Container>
        {/* mobile menu */}
        <header className="mobile-menu desktop-hidden">
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
        </header>
        {/* <menu></menu> */}
        <header className="navbar ">
          <div className="navbar-logo">
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
        </header>
      </Container>
    </ContainerFulid>
  );
};

export default Navbar;
