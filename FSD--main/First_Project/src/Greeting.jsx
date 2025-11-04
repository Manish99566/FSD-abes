import { Usestate } from "react";

function Greeting(){
    const [message, setMessage] = Usestate("Hello Class");

    function ChangeMessage(){
        setMessage("You  clicked the button!");
    }
    return(
        <div>
            <h2>{message}</h2>
            <h1> Learning React</h1>
            <button onclick={ChangeMessage}>Click Me</button>
        </div>
    );
}

export default Greeting;