import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const AddPlant = ({ addPlant, userID }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  const mockPlant = {
    plant_name: "Fern",
    description: "its a fern",
    date_last_watered: "09/20/2020 12:00 PM",
    increment: 20,
    next_watering: "09/20/2020 4:00 PM",
    species: "fern",
    plant_url:
      "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/39b52c4cabb46819553175347e38b212/f/l/flowerbx-plants-asparagus-fern-1000px-0_4.jpg",
    date_created: "09/20/2020 1:00 AM",
  };
  const handleSubmit = () => {
    addPlant(mockPlant, userID);
    toggle();
  };
  return (
    <div>
      <Button id="add-plant-btn" color="success" onClick={toggle}>
        Add Plant
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Add A plant (PLACEHOLDER)
        </ModalHeader>
        <ModalBody>Form will go here</ModalBody>
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
<Button id="add-plant-btn" color="success">
    Add Plant
</Button>
*/
