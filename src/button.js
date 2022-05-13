function Button(props) {
  return <button onClick={props.click}>{props.val}</button>;
}

function Input() {
  return <input placeholder="Enter Value" />;
}

export { Button, Input }