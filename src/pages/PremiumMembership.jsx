import { Form, InputGroup, Button } from "react-bootstrap";
import FormInput from "../components/FormInput";
import "./PremiumMembership.css";

const PremiumMembership = () => {
    return (
        <div className="page-container premium-membership-container">
            <div className="page-content">
                <div className="page-left-content">
                    <img src={require("../assets/images/membership.png")} alt="membership"/>
                </div>
                <div className="page-right-content">
                    <div className="membership-form">
                        <h1 className="page-title mb-4">Premium Membership</h1>
                        <Form>
                            <FormInput className="mb-4" icon="fa fa-user" type="text" placeholder="First Name"/>
                            <FormInput className="mb-4" icon="fa fa-user" type="text" placeholder="Last Name"/>
                            <FormInput className="mb-4" icon="fa fa-envelope" type="email" placeholder="Email"/>
                            <FormInput className="mb-5" icon="fa fa-lock" type="password" placeholder="Password"/>
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

export default PremiumMembership;