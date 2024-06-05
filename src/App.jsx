import './App.css'
import Card from './Card/Card.jsx'
import Chip from "./Chip/Chip.jsx";
import Tooltip from "./Tooltip/Tooltip.jsx";
import {useState} from "react";
import {Board} from "./TicTacToe/Board.jsx";

const myReason = 'whatever';

export const CounterComponent = () => {
    const [count, setCount] = useState(0)

    return <div>
        Current count: {count}
        <button onClick={() => setCount((prevState) => prevState+1)}>Click me! (+1)</button>
    </div>
}

function App() {
    return <div className={'app'}>
        {/*<h1>Hello world</h1>*/}
        {/*<CounterComponent/>*/}
        {/*<Chip color={'#0f0'}>My chip</Chip>*/}
        {/*/!*<Tooltip label={'Hover me'}>*!/*/}
        {/*/!*    This is the super secret tip.*!/*/}
        {/*/!*</Tooltip> and more*!/*/}
        {/*<Card*/}
        {/*    reason={myReason}*/}
        {/*    headline={'My card'}/>*/}
        <Board/>
    </div>;
}

export default App
