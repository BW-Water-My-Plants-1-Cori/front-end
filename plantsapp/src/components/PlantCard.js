import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";

const PlantCard = ({ plant, getPlantByID, updatePlantWater }) => {
  // Code

  return (
    <div className="plant-card">
      <Card body inverse color="info">
        <div className="card-body-wrapper">
          <CardBody>
            <CardTitle>{plant.plant_name}</CardTitle>
            <CardSubtitle>Next Water Date: {plant.next_watering}</CardSubtitle>
          </CardBody>
          <Link to={`/plants/${plant.id}`}>
            <Button
              color="secondary"
              onClick={() => {
                getPlantByID(plant.id);
              }}
            >
              Edit
            </Button>
          </Link>
        </div>

        <CardImg width="100%" src={plant.plant_url} alt="Card image cap" />
        <CardText>
          <span>
            Description: {plant.desription} <br />
            Species: {plant.species} <br />
            Date Created: {plant.date_created}
          </span>
        </CardText>
        <CardFooter>
          <Button
            color="primary"
            id="water-button"
            onClick={() => {
              updatePlantWater(plant.id);
            }}
          >
            Water
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PlantCard;
