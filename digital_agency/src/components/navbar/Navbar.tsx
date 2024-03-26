import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";


const Navbar = () => {
  return (
    <FullWidth>
      <Container>
        <div className="navbar">
          <div>
            <img src="../../../public/image/logo/logo.svg" alt="" />
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