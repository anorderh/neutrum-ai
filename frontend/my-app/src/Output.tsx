import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Output() {
    const {state} = useLocation();
    const { PastedInput } = state; // Read values passed on state

    return (
        <div>
            <Link to="/" className="mx-auto p-4 bg-lime-500 rounded-lg m-4">Logo</Link>
            <p>Output: {PastedInput}</p>
            <iframe className= "h-max" src="https://www.youtube.com/embed/8KZe_PJdaP4"></iframe>
        </div>
    );
}

