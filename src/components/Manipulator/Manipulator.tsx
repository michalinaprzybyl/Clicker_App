import React from "react";
import { ManipulatorProps } from "../../helpers/interfaces";

// Ćwiczenie: Ma wyświetlać 2 buttony, jeden z textContentem "-", a drugi z "+".
const Manipulator: React.FC<ManipulatorProps> = ({ setCount }) => {

    const plusButtonClickHandler = () => {
        // console.log("Button + clicked");
        // setCount(5);
        setCount((prevState) => prevState + 1);
    }

    return (
        <>
            <button onClick={() => setCount((prevState: number) => prevState - 1)}>-</button>
            <button onClick={plusButtonClickHandler}>+</button>
        </>
    )
}

export default Manipulator;