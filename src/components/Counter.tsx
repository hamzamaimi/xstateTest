import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";

const Counter = () => { 
    const handleIncrement = () => {
        alert('increment');
    }
    const handleDecrement = () => {
        alert('decrement');
    }
    return(
        <>
            <div className="card w-25">
                <div className="card-body">
                    This is some text within a card body.
                    <div>
                        <Button className="m-1" style={{color: 'green'}} onClick={handleIncrement}>Increment</Button>   
                        <Button className="m-1" style={{color: 'red'}} onClick={handleDecrement}>Decrement</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;