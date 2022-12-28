import React from "react";
import { DisplayProps } from "../../helpers/interfaces";
import "./Display.css";

const Display: React.FC<DisplayProps> = ({ numberToDisplay }) => {
    const generateRandomNumber = () => {
        return Math.random();
    };

    // console.log(numberToDisplay);

    return (
        <>
            <p className="random">Random number: {generateRandomNumber()}</p>
            <p>{numberToDisplay}</p>
        </>
    );
};

export default Display;
