import React from 'react';
import "./styles/TextBlock.css"

function TextBlock(header, text, list=[], listHeader="") {
    return (
        <div className="Block">
            <h1 className="textBlock">{header}</h1>
            <p className="textBlock">{text}</p>
            <h3 className="textBlock">{listHeader}</h3>
            {list.map((listElement) => {
                return <li key={listElement} className="textBlock">{listElement}</li>
            })}
        </div>
    );
}

export default TextBlock;
