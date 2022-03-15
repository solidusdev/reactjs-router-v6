import { Fragment, useState } from "react";

// functional button component
const StateButton = () => {

    // initialize the state and create the modifier function variable
    let [counter, setCounter] = useState(0);

    return(
        <Fragment>
            <h1>This button has been clicked {counter} times</h1>
            
            {/* when the button is clicked, invoke the modifier function
                to increment the counter value by 1  
            */}
            <button onClick={() => setCounter(counter += 1)}>click</button>
        </Fragment>
    )
}

export default StateButton;