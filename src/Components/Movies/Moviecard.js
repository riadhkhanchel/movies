//This is a child component of MoviesList
import React from "react";
import { Card } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../Movies/Moviecard.css";
const movies = ({ movie, index }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} key={index} className="MainCard">
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Our Rating</Typography>
            <Rating name="read-only" value={movie.rating} readOnly />
          </Box>
        </Card.Body>
      </Card>
    </div>
  );
};

export default movies;
