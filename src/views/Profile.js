/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Profile = () => {
  const [profileData, setprofileData] = useState({
    username: "",
    Fathername: "",
    DOB: "",
    CNIC: "",
    email: "",
    Nationality: "",
    semester: "",
    department: "",
    session: "",
    address: "",
    city: "",
    country: "",
    postalcode:""
  });
const dispatch = useDispatch();
  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setprofileData({
      ...profileData,
      [name]: value,
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(
      // profile(profileData, () => {
      //   alert("Add Successfully");
      //   // history.push("/admin/index");
      //   setprofileData('');
      // })
    );

  }
  console.log(profileData);

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--9 pb-5" fluid>
        <Row className="d-flex justify-content-center">
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="4">
                    <h3 className="mb-0">My account</h3>
                  </Col>

                  <Col xs="6" className="" >
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle  mt--5 smaller-image"
                          src={require("../assets/img/1.jpeg").default}
                        />
                      </a>
                    </div>
                  </Col>

                  {/* <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col> */}
                </Row>
              </CardHeader>
              <CardBody>
                <Form role="form" >
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            // id="username"
                            name="username"
                            value={profileData?.username}
                            onChange={handleOnChange}
                            placeholder="Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Father Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            name="Fathername"
                            value={profileData?.Fathername}
                            onChange={handleOnChange}
                            placeholder="Father Name"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Date Of Birth
                          </label>
                          <Input
                            className="form-control-alternative"
                            name="DOB"
                            value={profileData?.DOB}
                            onChange={handleOnChange}
                            id="input-first-name"
                            placeholder="First name"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            CNIC
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="00000-0000000-0"
                            name="CNIC"
                            value={profileData?.CNIC}
                            onChange={handleOnChange}
                            placeholder="Put CNIC number without dashes"
                            
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            name="email"
                            value={profileData?.email}
                            onChange={handleOnChange}
                            id=" "
                            placeholder="Put email address"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Gender
                          </label>
                          <Input
                            name="gender"
                            value={profileData?.gender}
                            onChange={handleOnChange}
                          ></Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Nationality
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            name="nationality"
                            value={profileData?.nationality}
                            onChange={handleOnChange}
                            placeholder=""
                            type=""
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label">Semester</label>
                          <Input
                            className="form-control-alternative"
                            name="semester"
                            value={profileData?.semester}
                            onChange={handleOnChange}
                            defaultValue=""
                            placeholder=""
                            type=""
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Department
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            placeholder=""
                            type=""
                            name="department"
                            value={profileData?.department}
                            onChange={handleOnChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Session
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            name="session"
                            value={profileData?.session}
                            onChange={handleOnChange}
                            placeholder=""
                            type=""
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-address"
                            name="address"
                            value={profileData?.address}
                            onChange={handleOnChange}
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Mianwali"
                            id="input-city"
                            name="city"
                            value={profileData?.city}
                            onChange={handleOnChange}
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Pakistan "
                            id="input-country"
                            placeholder="Country"
                            name="country"
                            value={profileData?.country}
                            onChange={handleOnChange}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            name="postalcode"
                            value={profileData?.postalcode}
                            onChange={handleOnChange}
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
              <CardFooter>
                <div className="d-flex justify-content-end ">

                <Button className="btn-success btn">Save</Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
