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
const AddPlant = ({ addPlant, userID }) => {
  // logic for modal open/close
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // custom close button for modal
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  // State for adding plant
  const [newPlant, setNewPlant] = useState({
    plant_name: "",
    description: "",
    date_last_watered: "",
    increment: 1,
    next_watering: "",
    species: "",
    plant_url: "",
    date_created: "",
  });

  // on submit will call add plant action and close modal
  const handleSubmit = () => {
    // Add plant to database
    console.log(newPlant);
    //addPlant(newPlant, userID);
    toggle();

    // Reset newPlant data
    setNewPlant({
      plant_name: "",
      description: "",
      date_last_watered: "",
      increment: 1,
      next_watering: "",
      species: "",
      plant_url: "",
      date_created: "",
    });
  };

  // updates state
  const handleChange = (e) => {
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Button id="add-plant-btn" color="success" onClick={toggle}>
        Add Plant
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
                  <Label for="name">Name of plant</Label>
                  <Input
                    type="text"
                    name="plant_name"
                    placeholder="e.g ferny"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="species">Species</Label>
                  <Input
                    type="text"
                    name="species"
                    placeholder="e.g Bracken"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for="increment">Watering Increment(Days)</Label>
              <Input
                type="number"
                name="increment"
                placeholder="e.g 2"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="plant last watered">Last Watered</Label>
              <Input
                type="date"
                name="date_last_watered"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="plan next watering">Next Watering</Label>
              <Input
                type="date"
                name="next_watering"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageURL">Plant Image URL</Label>
              <Input
                type="text"
                name="plant_url"
                placeholder="e.g https://myimageurl.jpg"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                placeholder="e.g It is my tasitest plant"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Add Plant
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddPlant;
/*

*/
