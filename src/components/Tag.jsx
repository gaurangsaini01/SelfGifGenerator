import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import useSelf from "../Hook/useSelf";

function Tag() {
  const [tag, setTag] = useState("car");

  const { loading, gif, fetchData } = useSelf(tag);

  return (
    <div className="flex flex-col items-center border gap-6 bg-gray-200 p-4 w-[450px] h-fit">
      <h2 className="text-center">{tag} GIF</h2>
      {loading ? <Loader></Loader> : <img src={gif} alt="" />}
      <div className="InputContainer">
        <input
          placeholder="Search.."
          onChange={(e) => setTag(e.target.value)}
          id="input"
          className="input"
          name="text"
          type="text"
        />
      </div>
      <button className="shadow__btn w-1/2" onClick={fetchData}>
        Generate
      </button>
    </div>
  );
}

export default Tag;
