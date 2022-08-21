import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDetail from "../../Components/Post/PostDetail";
const { getData } = require("../../api/database");
const { config } = require("../../config");

export default function Detail() {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState({});

  const getPost = async () => {
    let site = "sample";
    if (config.deployment === "dev") {
      site += "Dev";
    }
    const postQuery = `/${site}/posts/${postId}`;
    const postFromDb = await getData(postQuery);
    console.log("postFromDb", postFromDb);
    if (postFromDb) {
      setPostDetails(postFromDb);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
    <div className="row py-6">
      <div className="container mx-auto">
        <PostDetail post={postDetails} />
      </div>
    </div>
    </>
  );
}
