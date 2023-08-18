import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Output() {
    const {state} = useLocation();
    const { PastedInput } = state; // Read values passed on state

    const [output, setOutput] = useState("");
    const [insights, setInsights] = useState("")

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const baseURL = "http://localhost:3030";

        const getOutputArticle = async () => {
            try {
                const response = await axios.post(`${baseURL}/bias/transform`, 
                { article: PastedInput },
                { signal: controller.signal});
                console.log(response.data);

                isMounted && setOutput(response.data);
            } catch (err) {
                console.log(err);
            }
        }

        // const getInsights = async () => {
        //     try {
        //         const response = await axios.post(`${baseURL}/bias/transform`,
        //         { article: PastedInput },
        //         { signal: controller.signal});
        //         console.log(response.data);

        //         isMounted && setInsights(response.data);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }

        getOutputArticle();
        // getInsights();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

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
                    <div className="bg-gray-200 h-full rounded-lg">
                        {output}
                    </div>
                </div>

                <div className="flex flex-col h-96 my-4  w-2/3">
                    <text className="text-xl"> Insights </text>
                    <div className="bg-gray-100 h-full rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}

