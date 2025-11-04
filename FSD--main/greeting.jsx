import { usestate } from "react";

function Greeting(){
    const [message, setMessage] = useState("Hello Class");

    function ChangeMessage(){
        setMessage("You  clicked the button!");
    }
    return(
        <div>
            <h2>{message}</h2>
            <button onclick={ChangeMessage}>Click Me</button>
        </div>
    );
}

export default Greeting;