import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen flex-col justify-start">
      <div className="mx-auto p-4">Logo</div>
      <div className="text-6xl h-32 mx-auto">neutrum^ai</div>
      
      {/* input section */}
      <div>
        <div className="flex-row justify-center">
          {" "}
          {/* button container */}
          <button className="bg-lime-500 rounded-l-lg">Input Text</button>
          <button className="bg-lime-500 rounded-r-lg">URL</button>
        </div>

        {/* textbox */}
        <div>
          <textarea className="bg-stone-700 resize">

          </textarea>
        </div>
        
      </div>

      {/* info blurb */}
      <div className="justify-center">
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
