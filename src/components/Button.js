import * as React from "react";

const Button = ({img, onClick}) => {
    return (
        <button onClick={onClick}
                className="list-group-item list-group-item-action list-group-item-light">
            <img src={require(`../images/${img}`).default} width='15%' alt='t'/>
        </button>
    );
}

export default Button;