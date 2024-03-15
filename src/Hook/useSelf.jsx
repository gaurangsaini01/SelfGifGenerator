import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;


function useSelf(tag) {
  const randomURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  
  async function fetchData() {
    setLoading(true);
    const data = await axios.get(tag ? tagURL : randomURL);
    const URL = data.data.data.images.downsized_medium.url;
    console.log(URL);
    setGif(URL);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return {loading,gif,fetchData};
}

export default useSelf;
