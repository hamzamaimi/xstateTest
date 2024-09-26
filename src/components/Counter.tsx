import { Button, Link, Toast, ToastBody, Toaster, ToastTitle, useId, useToastController } from "@fluentui/react-components";
import { useMachine } from "@xstate/react";
import { counterMachine } from "../machines/counterMachine";

const Counter = () => { 
    const [state, send] = useMachine(counterMachine);
    const handleIncrement = () => {
        send({ type: 'increment' });
        notify();
    }
    const handleDecrement = () => {
        send({ type: 'decrement' });
        notify();
    }
    const resetCounter = () => {
        send({type: 'reset'});
        notify();
    }

    const toasterId = useId("toaster");
    const { dispatchToast } = useToastController(toasterId);
    const notify = () =>
      dispatchToast(
        <Toast>
          <ToastTitle action={<Link>Undo</Link>}>Email sent</ToastTitle>
          <ToastBody subtitle="Subtitle">Counter value has been correctly changed!</ToastBody>
        </Toast>,
        { intent: "success" }
      );
  

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
                    <Toaster toasterId={toasterId} />
                </div>
            </div>
        </>
    )
}

export default Counter;