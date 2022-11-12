import { Form, Button } from "react-bootstrap";
import FormInput from "../components/FormInput";
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className="page-container signup-container">
            <div className="page-content">
                <div className="page-left-content">
                    <img src={require("../assets/images/signup.png")} alt="Sign Up"/>
                </div>
                <div className="page-right-content">
                    <div className="signup-form">
                        <h1 className="page-title mb-4">Create Account</h1>
                        <Form>
                            <FormInput className="mb-4" icon="fa fa-user" type="text" placeholder="First Name"/> 
                            <FormInput className="mb-4" icon="fa fa-user" type="text" placeholder="Last Name"/>
                            <FormInput className="mb-4" icon="fa fa-envelope" type="email" placeholder="Email"/>
                            <FormInput className="mb-5" icon="fa fa-lock" type="password" placeholder="Create Password"/>
                            <div className="d-grid">
                                <Button variant="primary">Create account</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;