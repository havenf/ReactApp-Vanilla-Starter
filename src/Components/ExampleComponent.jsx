import { AppState } from "../AppState"
import PropTypes from "prop-types";
import { Example } from "../Models/Example";

export default function exampleComponent({ example }) {

    function setActiveExample()
    {
        AppState.activeExample = example;
        console.log(AppState.activeExample);
    }

    return (
        <div onClick={setActiveExample}>
            Example Iteration (Click to set active)
        </div>
    )
}

exampleComponent.PropTypes = {
    example: PropTypes.instanceOf(Example)
}