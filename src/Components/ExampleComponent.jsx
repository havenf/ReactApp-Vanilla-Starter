import { AppState } from "../AppState"
import PropTypes from "prop-types";
import { Example } from "../Models/Example";

export default function exampleComponent({ example }) {

    function setActiveExample()
    {
        AppState.activeExample = example;
    }

    return (
        <div onClick={setActiveExample}>
            Example Iteration
        </div>
    )
}

exampleComponent.PropTypes = {
    example: PropTypes.instanceOf(Example)
}