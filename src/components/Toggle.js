import React, { useState } from 'react'

export default function Toggle({ children }) {
    const [toggleState, setToggleState] = useState(false);
    return (
        <div >
            <div onClick={() => setToggleState(!toggleState)}> {children.props.children[0]}</div>
            {toggleState ? children.props.children[1] : ""}
            {toggleState ? children.props.children[2] : ""}
        </div>
    )
}
