import { CardInterface } from "./CardInterface";
import Card from "react-bootstrap/Card";
import "./Card.css";

export const Cards = (cardObj: CardInterface) => {
  return (
    <>
      <Card className="col-md-4 p-0 m-3 card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          className="card-image"
          src={require(`../../img/${cardObj.image}.png`)}
          alt={cardObj.name}
        />
        <Card.Body className="bg-orange p-3 text-left">
          <h6 className="my-3 m-0">{cardObj.name}</h6>
          <p className="m-0">{cardObj.price}$</p>
        </Card.Body>
      </Card>
    </>
  );
};
