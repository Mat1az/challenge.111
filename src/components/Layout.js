import * as React from "react";

const Layout = ({children}) => {
    return (
        <div className="row" style={{marginTop: "100px"}}>
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <div className="card text-center bg-dark text-white">
                    <div className="card-header">
                        Game
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">Start</h5>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;