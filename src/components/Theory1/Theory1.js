import React from 'react';
import './Theory1.css'

const Theory1 = () => {
    return (
        <div className='details'>
            <h1>How react works:</h1>
            <p>
            React is a UI development library based on JavaScript. It is administered by Facebook and an open-source developer community. Despite the fact that React is more of a library than a language, it is frequently utilized in web development. The library debuted in May 2013 and has since grown to become one of the most widely used frontend libraries for web development.
            </p>
            <div>
                <h4>How does it work: </h4> 
                <p>A group of Facebook engineers discovered that the Document Object Model DOM is sluggish while developing client-side apps. The Document Object Model DOM is an application programming interface API for HTML and XML documents. It specifies the logical structure of documents as well as how they are accessed and modified. To speed things up, React uses a virtual DOM, which is essentially a JavaScript version of a DOM tree. As a result, it will utilize the virtual representation of the DOM when reading or writing to it. The virtual DOM will then attempt to update the browser's DOM in the most efficient manner possible.React elements, unlike browser DOM components, are simple objects that are easy to generate. The DOM is updated to match the React elements using React DOM. This is because JavaScript is extremely fast, and it's worth having a DOM tree in it to speed up its manipulation. Although React was designed to be used in the browser, it can also be utilized in the server using Node.js due to its architecture.</p>
            </div>
        </div>
    );
};

export default Theory1;