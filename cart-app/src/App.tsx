import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CartHeader } from "./components/CartHeader";
import { CartProducts } from "./components/CartProducts";

export interface CounterInterface {
	id: number;
	value: number;
}

const initCounters = [
	{ id: 1, value: 0 },
	{ id: 2, value: 0 },
	{ id: 3, value: 0 },
	{ id: 4, value: 0 },
];

function App() {
	const [counters, setCounters] = useState<CounterInterface[]>(initCounters);

	const handleIncrement = (counter: CounterInterface): void => {
		counter.value++;
		const current = [...counters];
		setCounters(current);
	};
	const handleDecrement = (counter: CounterInterface): void => {
		counter.value--;
		const current = [...counters];
		setCounters(current);
	};
	const handleReset = (counter: CounterInterface): void => {
		counter.value = 0;
		const current = [...counters];
		setCounters(current);
	};
	const handleDelete = (counter: CounterInterface): void => {
		const current: CounterInterface[] = [...counters];
		current.remove(counter);
		setCounters(current);
	};
	const handleFullRestart = (): void => {
		const current = [...counters];
		current.forEach((counter: CounterInterface) => {
			counter.value = 0;
		});
		setCounters(current);
	};

	return (
		<div className="App">
			<CartHeader></CartHeader>
			<CartProducts
				counters={counters}
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
				onReset={handleReset}
				onDelete={handleDelete}
				onFullReset={handleFullRestart}
			/>
		</div>
	);
}

export default App;
