import axios from "axios";
import { useEffect, useState } from "react";

export const useGetposts = () => {
  const [posts, setposts] = useState([]);

  const fetchposts = async () => {
    const posts = await axios.get("http://localhost:3001/feed/posts");
    setposts(posts.data.posts);
    console.log("hola ",posts);
  };

  useEffect(() => {
    fetchposts();
  }, []);

  return { posts, fetchposts };
};