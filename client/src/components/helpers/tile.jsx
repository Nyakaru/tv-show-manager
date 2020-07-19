//@ts-check
import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
} from "reactstrap";

const cardStyle = {
  width: "350px",
  display: "flex",
  alignItems: "center",
  padding: "10px",
};

const imgStyle = {
  maxHeight: "300px",
  width: "300px",
};

const buttonStyle = {
  float: "right",
  color: "#1e88e5",
  backgroundColor: "white",
};

/**
 * @param {React.ReactNode} buttonLabel
 */
const ModalExample = (buttonLabel) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        {" "}
        <Button color="secondary" onClick={toggle}>
          {buttonLabel}
        </Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Comment</ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            placeholder="Write something about the TV show"
            rows={5}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

/**
 * @param {React.ReactNode} name
 * @param {React.ReactNode} rating
 * @param {React.ReactNode} summary
 * @param {string} image
 */
export const HomeCardRender = (name, rating, summary, image) => {
  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle> Rating - {rating}</CardSubtitle>
        <CardText>{summary}</CardText>
        <Button>Add to watched</Button>
        <Button style={buttonStyle}>Add to schedule</Button>
      </CardBody>
    </Card>
  );
};

/**
 * @param {React.ReactNode} name
 * @param {React.ReactNode} rating
 * @param {React.ReactNode} summary
 * @param {string} image
 */
export const WatchedCardRender = (
  name,
  rating,
  summary,
  image,
  buttonLabel
) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle> Rating - {rating}</CardSubtitle>
        <CardText>{summary}</CardText>
        <Button style={buttonStyle}> Favorite</Button>
        {ModalExample(buttonLabel)}
      </CardBody>
    </Card>
  );
};

/**
 * @param {React.ReactNode} name
 * @param {React.ReactNode} rating
 * @param {React.ReactNode} summary
 * @param {string} image
 */
export const ScheduledCardRender = (name, rating, summary, image) => {
  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle> Rating - {rating}</CardSubtitle>
        <CardText>{summary}</CardText>
        <Button>Add to watched</Button>
      </CardBody>
    </Card>
  );
};

/**
 * @param {React.ReactNode} name
 * @param {React.ReactNode} rating
 * @param {React.ReactNode} summary
 * @param {string} image
 */
export const FavoriteCardRender = (
  name,
  rating,
  summary,
  image,
  buttonLabel
) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle> Rating - {rating}</CardSubtitle>
        <CardText>{summary}</CardText>
        {ModalExample(buttonLabel)}
      </CardBody>
    </Card>
  );
};
