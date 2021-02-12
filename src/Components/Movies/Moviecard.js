//This is a child component of MoviesList
import React from "react";
import {Card, Button } from "react-bootstrap";

/*
<h2>{movie.name}</h2>
<h2>{movie.rating}</h2>
<h2>{movie.type}</h2>
<h2>{movie.date}</h2>
<h2>{movie.description}</h2>*/
const movies = ({movie, index}) => {
  console.log(movie);
  return (
    <div>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default movies
