import { Container, Card, Row, Col, Nav, Form, Button } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="page-container contact-us-container">
            <Container>
                <Row>
                    <Col lg={5} md={12}>
                        <Card>
                            <h1 className="page-title">Get in touch with us.</h1>
                            <Card.Body>
                                <div className="contact-list">
                                    <h6 className="sub-title">Find us at</h6>
                                    <Nav>
                                        <Nav.Item>
                                            <Nav.Link href="#"><i className="fa fa-map-marker"></i> 1234 Post Avenue Remington</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <div>
                                    <h6 className="sub-title">Reach out to us at</h6>
                                    <Nav>
                                        <Nav.Item>
                                            <Nav.Link href="#"><i className="fa fa-envelope"></i> contact@gmail.com</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="#"><i className="fa fa-phone"></i> +1 2345 567 890</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <p></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={7} md={12}>
                        <Form className="contact-us-form">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Your Name" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" placeholder="Your Email" />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Control as="textarea" placeholder="Your message" style={{height: 150}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="terms-and-conditions">
                                            <Form.Check inline/> I agree to the privacy policy
                                        </Form.Label>
                                    </Form.Group>
                                    <div className="d-grid">
                                        <Button variant="primary">Submit</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs;