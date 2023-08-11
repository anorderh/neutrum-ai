import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Output() {
    const {state} = useLocation();
    const { PastedInput } = state; // Read values passed on state

    return (
        <div className="bg-white min-w-screen min-h-screen">
            <text className="absolute top-4 left-4">neutrum ai</text>
            <div className="flex flex-row justify-center w-full p-4">
                <Link to="/" className="p-4 bg-lime-500 rounded-lg">Home</Link>
            </div>

            <div className="flex flex-col items-center h-screen w-screen my-4">
                <div className="flex flex-col h-36 my-4 w-2/3">
                    <text className="text-xl"> Your input article </text>
                    <div className="bg-gray-200 h-full rounded-lg">
                        {PastedInput}
                    </div>
                </div>

                <div className="flex flex-col h-36 my-4 w-2/3">
                    <text className="text-xl"> Your output article </text>
                    <div className="bg-gray-200 h-full rounded-lg"></div>
                </div>

                <div className="flex flex-col h-96 my-4  w-2/3">
                    <text className="text-xl"> Insights </text>
                    <div className="bg-gray-100 h-full rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}

