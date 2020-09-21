import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const PlantCard = ({ plant }) => {
  // Code

  return (
    <div className="plant-card">
      <Card body inverse color="info">
        <CardBody>
          <CardTitle>{plant.plant_name}</CardTitle>
          <CardSubtitle>Next Water Date: {plant.next_watering}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={plant.plant_url} alt="Card image cap" />
        <CardText>
          <span>
            Description: {plant.description} <br />
            Species: {plant.species} <br />
            Date Created: {plant.date_created}
          </span>
        </CardText>
        <CardBody>
          <Button color="primary">Water</Button>
          <Button color="secondary">Edit</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PlantCard;
