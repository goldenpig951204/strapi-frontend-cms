import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <Nav className="footer-logo">
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link><img src={require("../assets/images/footer-logo.png")} alt="logo"/></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
            <Nav>
                <Nav.Item>
                    <LinkContainer to="/faq">
                        <Nav.Link>FAQs</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="contact-us">
                        <Nav.Link>Contact us</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/privacy-policy">
                        <Nav.Link>Privacy policy</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/terms-conditions">
                        <Nav.Link>Terms and conditions</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Footer;