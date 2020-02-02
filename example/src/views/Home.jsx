import React from '../node/react';

//Helpers
import { Link } from 'react-complete-router';

export default function Home () {


    //----------------------------
    // Render
    //----------------------------

    return (
        <div className="site-home">
            <div className="site-title">
                <div className="container">
                    <h1>formalization</h1>

					<div className="col-md-4 offset-md-4">
						<h4 className="row mt-4">
							<Link className="linkable text-center col" to="/start">npm install --save-dev @aposoftworks/formalization</Link>
						</h4>
					</div>
                </div>
            </div>
        </div>
    );
}
