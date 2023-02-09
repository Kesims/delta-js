import { ReactElement } from "react";
import { CounterInterface } from "../App";

interface CartProductProps {
	counter: CounterInterface;
	onReset: (counter: CounterInterface) => void;
	onIncrement: (counter: CounterInterface) => void;
	onDecrement: (counter: CounterInterface) => void;
	onDelete: (counter: CounterInterface) => void;
}

export function CartProduct(props: CartProductProps): ReactElement {
	return (
		<div className="CartProduct">
			<button>{props.counter.value}</button>
			<button onClick={() => props.onIncrement(props.counter)}>+</button>
			<button onClick={() => props.onDecrement(props.counter)}>-</button>
			<button onClick={() => props.onReset(props.counter)}>RST</button>
			<button onClick={() => props.onDelete(props.counter)}>DEL</button>
		</div>
	);
}
