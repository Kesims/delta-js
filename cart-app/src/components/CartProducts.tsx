import { CartProduct } from "./CartProduct";
import { ReactElement } from "react";
import { CounterInterface } from "../App";

interface CartProductsPropsInterface {
	counters: CounterInterface[];
	onReset: (counter: CounterInterface) => void;
	onIncrement: (counter: CounterInterface) => void;
	onDecrement: (counter: CounterInterface) => void;
	onDelete: (counter: CounterInterface) => void;
	onFullReset: () => void;
}

export function CartProducts(props: CartProductsPropsInterface): ReactElement {
	return (
		<div className="CartProducts">
			<button
				className="btn"
				onClick={() => props.onFullReset()}
				disabled={props.counters.length == 0}
			>
				RESET ALL
			</button>

			{props.counters.map(
				(counter: CounterInterface): ReactElement => (
					<CartProduct
						key={counter.id}
						counter={counter}
						onDecrement={props.onDecrement}
						onIncrement={props.onIncrement}
						onReset={props.onReset}
						onDelete={props.onDelete}
					/>
				),
			)}
		</div>
	);
}
