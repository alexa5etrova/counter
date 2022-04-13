import Card from "./Card";
import useCounter from "./../hooks/use-counter";

const ForwardCounter = () => {
  let counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
