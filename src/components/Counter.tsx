import { Button } from "@fluentui/react-components";
import { useMachine } from "@xstate/react";
import { counterMachine } from "../machines/counterMachine";

const Counter = () => { 
    const [state, send] = useMachine(counterMachine);
    const handleIncrement = () => {
        send({ type: 'increment' });
    }
    const handleDecrement = () => {
        send({ type: 'decrement' });
    }
    const resetCounter = () => {
        send({type: 'reset'});
    }
    return(
        <>
            <div className="card w-25">
                <div className="card-body">
                    <b>{state.context.count}</b>
                    <div>
                        <Button className="m-1" style={{color: 'green'}} onClick={handleIncrement}>Increment</Button>   
                        <Button className="m-1" style={{color: 'red'}} onClick={handleDecrement}>Decrement</Button>
                    </div>
                    <div>
                        <Button className="m-1" style={{color: 'red'}} onClick={resetCounter}>Reset Counter</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;