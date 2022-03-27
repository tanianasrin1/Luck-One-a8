import React from 'react';
import './Theory.css'

const Theory = () => {
    return (
        <div className='theory-details'>
            <h1> Props vs  State:</h1>
            <div>
                <p>Props:</p>
                <ul>
                    <li>Props are read-only.</li>
                    <li>Props are immutable.</li>
                    <li>Props allow you to pass data from one component to other components as an argument.</li>
                    <li>Props can be accessed by the child component.</li>
                    <li>Props are used to communicate between components.</li>
                    <li>Stateless component can have Props.</li>
                    <li>Props make components reusable.</li>
                    <li>Props are external and controlled by whatever renders the component.</li>
                </ul>
            </div>

            <div>
                <p>State:</p>
                <ul>
                    <li>State changes can be asynchronous.</li>
                    <li>State is mutable.</li>
                    <li>State holds information about the components.</li>
                    <li>State cannot be accessed by child components.</li>
                    <li>States can be used for rendering dynamic changes with the component.</li>
                    <li>Stateless components cannot have State.</li>
                    <li>State cannot make components reusable.</li>
                    <li>The State is internal and controlled by the React Component itself.</li>
                </ul>
            </div>
        </div>
    );
};

export default Theory;