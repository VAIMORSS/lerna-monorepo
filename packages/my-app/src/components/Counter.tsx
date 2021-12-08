import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "@poc/redux";

function Counter(props: any) {
  const increment = () => {
    props.increment();
  };

  const decrement = () => {
    props.decrement();
  };

  return (
    <div>
      <button onClick={increment}> + </button>
      <p> {props.count} </p>
      <button onClick={decrement}> - </button>
    </div>
  );
}
const mapStateToProps = (state: any) => ({
  count: state.count.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
