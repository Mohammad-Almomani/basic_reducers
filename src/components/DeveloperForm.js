import React, { useState } from "react";
import { actions } from "./Developer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Player from "./reactPlayer";

function NewDevForm({ dispatch }) {
  const [devName, setDevName] = useState("");
  const [devFavLang, setDevFavLang] = useState("JavaScript");
  const [devFavTech, setDevFavTech] = useState("React");
  const [devFavFood, setDevFavFood] = useState("");
  const [devFavDrink, setDevFavDrink] = useState("");

  const [open, setOpen] = useState(false);


  const onOpenModal = () => {
    setOpen(!open)
    setTimeout(() => {
      setOpen(false)
    }, 1000)
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!devName) return;
    dispatch({
      type: actions.ADD_DEV,
      payload: { devName, devFavLang, devFavTech, devFavFood, devFavDrink },
    });
    setDevName("");
    setDevFavLang("JavaScript");
    setDevFavTech("React");
    setDevFavFood("");
    setDevFavDrink("");
    onOpenModal()
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            onChange={(e) => setDevName(e.target.value)}
            value={devName}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Favorite Language</Form.Label>
          <Form.Select onChange={(e) => setDevFavLang(e.target.value)}>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
            <option value="Java">Java</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Favorite Tech</Form.Label>
          <Form.Select onChange={(e) => setDevFavTech(e.target.value)}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
            <option value="Flutter">Flutter</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Favorite Food</Form.Label>
          <Form.Control
            type="text"
            placeholder="Favorite Food"
            onChange={(e) => setDevFavFood(e.target.value)}
            value={devFavFood}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Favorite Drink</Form.Label>
          <Form.Control
            type="text"
            placeholder="Favorite Drink"
            onChange={(e) => setDevFavDrink(e.target.value)}
            value={devFavDrink}
          />
        </Form.Group>
        <Button style={{ marginBottom: "2%" }} type="submit">
          Join the Club
        </Button>
      </Form>
      <Player open={open} toggleModal={onOpenModal} />
    </>
  );
}

export default NewDevForm;
