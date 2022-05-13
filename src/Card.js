import { Button } from "./button";

function Card(props) {
  return (
    <>
      <div className="card">
        <h3>{props.title}</h3>
        <h2>{props.price}</h2>
        <button onClick={props.action}>Add To Cart</button>
      </div>
    </>
  );
}
export default Card;