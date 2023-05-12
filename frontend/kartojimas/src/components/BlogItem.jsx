import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const BlogItem = () => {
  const handleOnClick = () => alert("You clicked this button");

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
        />
        <Card.Body>
          <Card.Title>Straipsnis apie pingvinukus</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={handleOnClick} variant="warning">
            Skaityti daugiau
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
