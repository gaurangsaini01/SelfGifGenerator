import React, { useEffect, useState } from "react";
import Random from "./components/random";
import Tag from "./components/Tag";
import axios from "axios";

function App() {

  return (
    <div className="w-full pt-4 h-fit bg-black">
      <h1 className="text-center mb-4 p-4 w-1/2 mx-auto bg-gray-200 rounded-md">
        Random Meme Gif Generator
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Random ></Random>
        <Tag ></Tag>
      </div>
    </div>
  );
}

export default App;
