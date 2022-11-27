import './styles.css';
import { useState } from 'react';

function App() {
	const [currentState, updateState] = useState(4);

	const decrementCount = value => {
		updateState(prevState => prevState - 1);
	};

	function incrementCount() {
		updateState(prevState => prevState + 1);
	}

	return (
		<div>
			<div className='calculator-grid'>
				<div className='output'>
					<div className=''>{}</div>
					<div className=''>{currentState}</div>
				</div>
				<button>AC</button>
				<button>DEL</button>
				<button>+</button>
				<button>*</button>
				<button>-</button>
				<button>/</button>
				<button onClick={() => decrementCount(1)}>1</button>
				<button>2</button>
				<button>3</button>
				<button>4</button>
				<button>5</button>
				<button>6</button>
				<button>7</button>
				<button>8</button>
				<button>9</button>
				<button>0</button>
				<button>.</button>
				<button>=</button>
			</div>
			<div className='UseState'>
				<button onClick={decrementCount}>-</button>
				<span>{currentState}</span>
				<button onClick={incrementCount}>+</button>
			</div>
		</div>
	);
}

export default App;
