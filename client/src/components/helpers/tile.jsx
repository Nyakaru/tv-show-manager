//@ts-check
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
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
 * @param {React.ReactNode} name
 * @param {React.ReactNode} rating
 * @param {React.ReactNode} summary
 * @param {string} image
 */
export const HomeCardRender = (name, rating, summary, image, scheduler, watcher) => {
  const data = { name, rating, summary, image }
  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle> Rating - {rating}</CardSubtitle>
        <CardText>{summary}</CardText>
        <Button onClick={ () => watcher(data)}>Add to watched</Button>
        <Button style={buttonStyle} onClick={ () => scheduler(data)}>Add to schedule</Button>
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
  Favoriter,
  id
) => {

  const data = { name, rating, summary, image, id }

  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle> Rating - {rating}</CardSubtitle>
        <CardText>{summary}</CardText>
        <Button onClick={ () => Favoriter(data)}> Add to Favorites</Button>
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
export const ScheduledCardRender = (name, rating, summary, image, watcher) => {
  const data = { name, rating, summary, image }
  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle> Rating - {rating}</CardSubtitle>
        <CardText>{summary}</CardText>
        <Button onClick={ () => watcher(data)}>Add to watched</Button>
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
  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle> Rating - {rating}</CardSubtitle>
        <CardText>{summary}</CardText>
      </CardBody>
    </Card>
  );
};
