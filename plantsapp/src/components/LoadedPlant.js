import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
const LoadedPlant = ({ plant, updatePlant }) => {
  const [updatePlantData, setUpdatePlantData] = useState({});
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatePlantData);
    updatePlant(updatePlantData, plant.id);
    history.push("/");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setUpdatePlantData({
      ...updatePlantData,
      [e.target.name]: e.target.value,
    });
  };

  // Kind of jank but this if handles loading plant data into state.
  if (
    Object.keys(plant).length != 0 &&
    Object.keys(updatePlantData).length == 0
  ) {
    setUpdatePlantData(plant);
  }
  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h2>Edit your plant</h2>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="plant_name"
                placeholder={plant.plant_name}
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
                placeholder={plant.species}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="increment">Plant Watering Increment</Label>
              <Input
                type="number"
                name="increment"
                placeholder={plant.increment}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
          </Col>

          <Col md={9}>
            <FormGroup>
              <Label for="imageURL">Plant Image URL</Label>
              <Input
                type="text"
                name="plant_url"
                placeholder={plant.plant_url}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            placeholder={plant.description}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormGroup>
        <Button color="success">Update</Button>
      </Form>
    </>
  );
  /*
    useEffect(()=>{
        getPlantByID(plantID)
    },[])
    return (
        <>z`
        <h2>Edit </h2>

       <p>Form to edit</p>

      </>
    )*/
};
export default LoadedPlant;

/* things that you can change
- name
- description
increment
species
image url
 */
