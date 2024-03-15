import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import useSelf from "../Hook/useSelf";

function Random() {
    const{loading,gif,fetchData} = useSelf();
    
  return (
    <div className="flex flex-col items-center gap-6  bg-gray-200 p-4 w-[450px] h-fit">
      <h2 className="text-center">Random GIF</h2>
      {loading ? <Loader></Loader> : <img src={gif} alt="image" />}
      <button className="shadow__btn w-1/2" onClick={fetchData}>
        Generate
      </button>
    </div>
  );
}

export default Random;
