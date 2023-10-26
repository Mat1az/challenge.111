import * as React from "react";

const Alert = ({type = 'alert-danger', children}) => {
    return (
        <div className={`alert ${type}`} role="alert">{children}</div>
    );
}

export default Alert;