import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="page-container about-us-container">
            <Container>
                <h1 className="page-title text-center">About us</h1>
                <div className="about-us-content d-flex align-items-center justify-content-between">
                    <div className="about-content">
                        <p>We make the HSC Easy.</p>
                        <p>Our learning materials cover the entire syllabus and includes:</p>
                        <ul>
                            <li>Exam-relevant summary of each dot-point</li>
                            <li>Questionaire bank in HSC exam style, separated by topic</li>
                            <li>Practice exams by modules and topics</li>
                            <li>Practice HSC trial exams and HSC final exams you won’t find anywhere else</li>
                        </ul>
                        <p>Our learning materials are written by an inhouse team of academics and HSC markers.</p>
                        <p>Sign up for a free account to view our learning materials.</p>
                    </div>
                    <div className="about-logo mx-3 text-center">
                        <img src={require("../assets/images/about-us.png")} alt="about us"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutUs;