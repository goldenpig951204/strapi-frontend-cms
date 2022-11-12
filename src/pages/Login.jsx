import { Form, Button } from "react-bootstrap";
import FormInput from "../components/FormInput";
import "./Login.css";

const Login = () => {
    return (
        <div className="page-container login-container">
            <div className="page-content">
                <div className="page-left-content">
                    <img src={require("../assets/images/login.png")} alt="Login"/>
                </div>
                <div className="page-right-content">
                    <div className="login-form">
                        <h4 className="page-title">Welcome back</h4>
                        <p className="mb-4">Please enter your details.</p>
                        <Form>
                            <FormInput className="mb-4" icon="fa fa-envelope" type="email" placeholder="Email"/>
                            <FormInput className="mb-5" icon="fa fa-lock" type="password" placeholder="Password"/>
                            <div className="d-grid">
                                <Button variant="primary">Log in</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;