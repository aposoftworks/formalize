import React from '../node/react';

//Packages
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark }                                 from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Guards () {


    //----------------------------
    // Render
    //----------------------------

    return (
        <div className="dashview">
			<h1>Guards</h1>

            <p>Guards are a powerful way os customizing RCR without touching it's source code. But what are they?</p>

            <h3>About</h3>

            <p>They are simple functions that the router will run when the route requires them, they can generate data for the route's to component or simply block it's render. Even the path prop is an actual guard, meaning you can overwrite it's behaviour if you may wish.</p>
            <p>There are two ways of using them, non priority guards and priority guards, only priority guards will throw warnings if not found. Check out usage to see how to use them.</p>

            <h3>Usage</h3>

            <h4>Non-priority guards</h4>

            <SyntaxHighlighter language="jsx" style={dark}>
                {"<Route guardaname={guardparameter} />"}
            </SyntaxHighlighter>

            <p>As you can see, a guard acts basically as a prop, meaning that if you just would want to pass it to the child component and not use it as a guard, you may do so.</p>

            <h4>Priority guards</h4>

            <SyntaxHighlighter language="jsx" style={dark}>
                {'<Route guard={["guardname:guardargument"]} />'}
            </SyntaxHighlighter>

            <p>The guard prop can take an string array or just a string.</p>

            <h3>Default guards</h3>

            <p>RCR comes with a handful of guards that will keep you covered in most cases, here you can check them:</p>

            <h4>path</h4>

            <p>Yes, the path algorythm is a guard, meaning that you can overwrite it. It takes one argument that is the actual path that you are requesting. If any dynamic parameters are found, they will be injected inside of the route's child component.</p>

            <h4>when</h4>

            <p>This is a simple validation that takes an object that will be converted to a boolean for the test.</p>

            <h4>guest</h4>

            <p>This guard will check in the router component for a prop called auth, if its equals from false/null, it will pass.</p>

            <h4>logged</h4>

            <p>Just as guest guard, this will check for auth in router's props and will only pass if it's different from false/null.</p>

            <h4>title</h4>

            <p>Updates the browser page when the route is applied, be careful to not stack those, since they will override one another.</p>
        </div>
    );
}
