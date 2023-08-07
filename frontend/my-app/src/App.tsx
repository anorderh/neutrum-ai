import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  const [pastedInput, setPastedInput] = useState("");
  const [inputType, setInputType] = useState("URL"); // 'URL' vs. 'PLAINTEXT'

  const logSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted!");
    setPastedInput("");
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPastedInput(e.target.value)
  }

  return (
    <div className="flex flex-col">
      <div className="mx-auto p-4">Logo</div>
      <div className="text-6xl h-24 mx-auto my-2">neutrum^ai</div>
    
      {/* input section */}
      <div className="flex flex-col justify-center space-y-3">

        {/* button container */}
        <div className="flex flex-row justify-center my-1">

          <button onClick={() => setInputType("PLAINTEXT")} 
            className={"w-25 rounded-l-lg px-4 text-white shadow-sm shadow-black-200/80 " + (inputType == "PLAINTEXT" ? "bg-green-700" : "bg-lime-300")}>
            Input Text</button>

          <button onClick={() => setInputType("URL")} 
            className=
            {"w-25 rounded-r-lg px-4 text-white shadow-sm shadow-black-200/80 " + (inputType == "URL" ? "bg-green-700" : "bg-lime-300")}>
            URL</button>
        </div>

        {/* textbox & button */}
        {inputType == 'URL' && ()}

        {inputType == 'PLAINTEXT' && (<div className="flex justify-center">
          <form className="flex flex-col items-center" method="post" onSubmit={logSubmit}>
            <textarea className="resize-none bg-zinc-200" value={pastedInput} onChange={ e => handleChange(e)} rows={4} cols={49}/>
            <button className="bg-green-100 border-6 shadow-lg shadow-black-500/80 my-2 p-2" type="submit"> Generate
                </button>
          </form> 
        </div>)}
        
      </div>

      {/* info blurb */}
      <div className="justify-center mt-16">
        <div className="text-center text-6xl">What</div>
        <p className= "p-16">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>

        <div className="text-center text-6xl">Why</div>
        <p className= "p-16">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>

        <div className="text-center text-6xl">How does it work</div>
        <p className= "p-16">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>

      </div>
    </div>
  );
}

export default App;
