import React from '../node/react';

export default function NotFound (props) {

    //----------------------------
    // Render
    //----------------------------

    return (
        <div className="dashview">
            <h2 className="site-title">Page {props.page} not found</h2>
        </div>
    );
}
