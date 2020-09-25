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
            <CardTitle>
              <h3>{plant.plant_name}</h3>
            </CardTitle>
            <CardSubtitle>
              <span>
                <p>Last Water Date: {plant.date_last_watered}</p>
              </span>
              <span>
                <p>Next Water Date: {plant.next_watering}</p>
              </span>
            </CardSubtitle>
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
            Increment: {plant.increment} days <br />
          </span>
        </CardText>
        <CardFooter>
          <Button
            color="primary"
            className="water-button"
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
