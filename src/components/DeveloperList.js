import React from "react";
import Giga from "../assets/giga.jpeg";
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";
import { actions } from "./Developer";

function DevelopersList(props) {
  return props.Devs.length ? (
    <div>
      <Row xs={1} md={2} xl={3} className="g-4">
        {props.Devs.map((dev) => (
          <Col key={dev.id} style={{margin: "2% 0%"}}>
            <Card key={dev.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Giga} />
              <Card.Body>
                <Card.Title>GigaChad {dev.devName}</Card.Title>
                <Card.Text style={{textAlign: "left"}}>
                  Favorite Language: {dev.devFavLang} <br></br> Favorite Tech:{dev.devFavTech}<br></br> Favorite Food: {dev.devFavFood?dev.devFavFood:'Nothen'}<br></br>
                  Favorite Drink: {dev.devFavDrink?dev.devFavDrink:'Nothen'}
                </Card.Text>
              </Card.Body>
              <Button onClick={() => props.dispatch({type: actions.DELETE_DEV, payload: {id: dev.id}})}> Leave Club</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    <h2>Be the First Developer to Join :)</h2>
  );
}

export default DevelopersList;
