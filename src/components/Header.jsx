import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
    let location = useLocation();
    let [navbarType, setNavbarType] = useState(0);
    let [navbarBgStatus, setNavbarBgStatus] = useState(0);
    useEffect(() => {
        switch (location.pathname) {
            case "/faq":
            case "/premium-membership":
            case "/sign-up":
            case "/login":
                setNavbarType(1);
                break;
            default :
                setNavbarType(0);
                break;
        }
    }, [location]);

    useEffect(() => {
        const scrollObserver = (e) => {
            if (window.document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setNavbarBgStatus(1);
            } else {
                setNavbarBgStatus(0);
            }
        }
        window.addEventListener('scroll', scrollObserver);
        return () => {
            window.removeEventListener('scroll', scrollObserver);
        }
    }, []);
    return (
        <Navbar expand="lg" style={{
             backgroundColor: navbarType ? (navbarBgStatus ? "#D6E4F1" : "transparent") : "#D6E4F1",
        }}>
            <Container>
                <LinkContainer to="/">
                    <Nav.Link className="navbar-brand">
                        <img src={require("../assets/images/logo.png")} alt="logo"/>
                    </Nav.Link>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbar"/>
                <Navbar.Collapse id="navbar">
                    <Nav className="ms-auto">
                        <Nav.Item as="li">
                            <LinkContainer to="/">
                                <Nav.Link>Subjects</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <LinkContainer to="/about-us">
                                <Nav.Link>About Us</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <LinkContainer to="/premium-membership">
                                <Nav.Link>Premium Membership</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <LinkContainer to="/why-anwsersheet">
                                <Nav.Link>Why AnswerSheet</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <LinkContainer to="/sign-up">
                                <Nav.Link>Sign Up</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;