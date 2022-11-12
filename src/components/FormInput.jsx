import { Form } from "react-bootstrap";
import "./FormInput.css";

const FormInput = ({
    className,
    icon,
    type,
    placeholder,
    onChange,
    readOnly,
    required,
    value,
    disabled
}) => {
    return (
        <Form.Group className={['position-relative ' + className]}>
            <i className={icon}></i>
            <Form.Control 
                type={type} 
                placeholder={placeholder} 
                readOnly={readOnly}
                required={required}
                onChange={onChange}
                disabled={disabled}
                value={value}
            />
        </Form.Group>
    )
}

export default FormInput;