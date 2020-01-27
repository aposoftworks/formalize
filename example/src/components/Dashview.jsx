import React from '../node/react';

//Components
import Navbar from "./Navbar";

export default function Dashview ({title, children}) {


    //----------------------------
    // Render
    //----------------------------

    return (
        <div className="row">
            <div className="col-md-2 p-0">
                <Navbar />
            </div>
            <div className="col-md-10 p-0 pt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
