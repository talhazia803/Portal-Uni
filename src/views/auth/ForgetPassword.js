// reactstrap components
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import { forgetPassword } from "store/actions/authAction";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      forgetPassword(email, () => {
        alert("Login Successfully");
        history.push("/admin/index");
        setEmail(null);
      })
    );
  };
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <div
            className="d-flex justify-content-end p-3 "
            onClick={() => history.push("../auth/firstPage")}
          >
            <FaTimes />
          </div>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Login</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>

              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Reset Password
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>

        <div className="text-center d-flex justify-content-between">
          <div>
            <Button
              className="mt-4 btn btn-secondary"
              color="dark"
              onClick={() => history.push("../auth/register")}
            >
              Create New Account
            </Button>
          </div>
          <div>
            <Link
              to="/auth/login"
              className="mt-4"
              color="primary"
              type="submit"
            >
              Login
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ForgetPassword;
