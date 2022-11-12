import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Subjects.css";

const Subjects = () => {
    return (
        <div className="page-container subjects-container">
            <div className="banner-container">
                <Container>
                    <Row>
                        <Col lg="5">
                            <div className="h-100 d-flex flex-column justify-content-center">
                                <h1 className="banner-title">High Quality <br/>HSC Study Guides</h1>
                                <p className="banner-description">Everthing You Need To Achieve A Band 6.</p>
                            </div>
                        </Col>
                        <Col lg="7" className="text-end">
                            <img src={require("../assets/images/banner.png")} alt="banner"/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="category-container">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="category">
                                <div>
                                    <h4 className="category-title">Year 12</h4>
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Maths Standard</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Maths Advanced</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Maths Extension 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Biology</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Chemistry</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Physics</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <img src={require("../assets/images/year-11-banner.png")} alt="year-12-banner"/>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="category">
                                <div>
                                    <h4 className="category-title">Year 12</h4>
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Maths Standard</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Maths Advanced</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Maths Extension 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Maths Extension 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Biology</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Chemistry</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="fa fa-circle"></i> Physics</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <img src={require("../assets/images/year-12-banner.png")} alt="year-12-banner"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>        
    )
}

export default Subjects;