
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import {useHistory } from "react-router-dom";
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
  Spinner,
} from "reactstrap";
import { login } from "store/actions/authAction";

const Login = () => {
  const { loginLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login(formData, () => {
        alert("Login Successfully");
        history.push("/admin/index");
        setFormData(null);
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
              <strong>Login</strong>
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
                    value={formData?.email}
                    onChange={handleChange}
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={formData?.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>

              <div className="text-center">
                <Button className="mt-4 test" type="submit">
                  {loginLoading ? <Spinner size="sm" /> : "Login"}
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>

        <div className="d-flex justify-content-between">
          <div>
            <Button
              className="mt-4"
              type="submit"
              color="success"
              onClick={() => history.push("../auth/forget-password")}
            >
              Forget Password
            </Button>
          </div>
          <div>
            <Button
              className="mt-4"
              type="submit"
              color="dark"
              onClick={() => history.push("../auth/register")}
            >
              Create new account
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Login;
