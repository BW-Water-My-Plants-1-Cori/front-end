import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
const LoadedUser = ({ user, updateUser, deleteUser }) => {
  const [userInfo, setUserInfo] = useState({
    username: user.username,
    phonenumber: user.phonenumber,
    email: user.email,
    password: "",
    first_name: user.first_name,
    last_name: user.last_name,
  });

  // Edit user
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    updateUser(userInfo, user.id);
    toggle();
  };

  // Update userInfo
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Delete User
  const handleDelete = () => {
    deleteUser(user.id);
    toggle();
  };

  // logic for modal open/close
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // custom close button for modal
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  if (Object.keys(user).length != 0 && Object.keys(userInfo).length == 0) {
    setUserInfo(user);
  }

  return (
    <div>
      <Button color="info" onClick={toggle}>
        Edit User
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Add a Plant
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="first name">First Name</Label>
                  <Input
                    type="text"
                    name="first_name"
                    value={userInfo.first_name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="last name">Last Name</Label>
                  <Input
                    type="text"
                    name="last_name"
                    value={userInfo.last_name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    value={userInfo.username}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="phone number">Phone Number</Label>
                  <Input
                    type="tel"
                    name="phonenumber"
                    value={userInfo.phonenumber}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
        <ModalFooter>
          <Button
            color="danger"
            onClick={handleDelete}
            style={{ width: "100%" }}
          >
            DELETE USER
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoadedUser;
