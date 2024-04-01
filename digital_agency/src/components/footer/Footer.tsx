import Container from "../../shared/Container";
import ContainerFulid from "../../shared/ContainerFulid";

const Footer = () => {
  return (
    <ContainerFulid>
      <div className="full-footer mt-138">
        <Container>
          <div className="footer">
            <div className="footer-col footer-logo">
              <h2 className="footer-title ">Digital Agency</h2>
              <p className="footer-text">
                Building digital products, brands & experience
              </p>
            </div>
            <div className="footer-col footer-resource">
              <h2 className="footer-title ">Resources</h2>
              <ul>
                <li className="footer-link">
                  <a href="">Guides</a>
                </li>
                <li className="footer-link">
                  <a href="">Blog</a>
                </li>
                <li className="footer-link">
                  <a href="">Customer Stories</a>
                </li>
                <li className="footer-link">
                  <a href="">Glossery</a>
                </li>
              </ul>
            </div>
            <div className="footer-col footer-company">
              {" "}
              <h2 className="footer-title ">Company</h2>
              <ul>
                <li className="footer-link">
                  <a href="">About us</a>
                </li>
                <li className="footer-link">
                  <a href="">Careers</a>
                </li>
                <li className="footer-link">
                  <a href="">Partners</a>
                </li>
                <li className="footer-link">
                  <a href="">Contact Us </a>
                </li>
              </ul>
            </div>
            <div className="footer-col footer-social-link">
              {" "}
              <h2 className="footer-title ">Social media</h2>
              <ul>
                <li className="footer-link">
                  <a href="">Linkedin</a>
                </li>
                <li className="footer-link">
                  <a href="">Facebook</a>
                </li>
                <li className="footer-link">
                  <a href="">Instagram</a>
                </li>
                <li className="footer-link">
                  <a href="">Twitter </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="footer-text  middle">
            © Matheus. Todos os direitos reservados
          </p>
        </Container>
      </div>
    </ContainerFulid>
  );
};

export default Footer;
