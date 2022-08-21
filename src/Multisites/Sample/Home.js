import PostCard from "../../Components/Post/PostCard";
import PostsContainer from "../../Components/Post/PostsContainer";
import { useEffect, useState } from "react";
const { getData } = require('../../api/database');
const { config } = require('../../config');

export default function Home() {

  // const [postsContainerTitle, setpostsContainerTitle] = useState({text: 'Get my latest work posted here'});
  const [postsCards, setPostsCards] = useState(false);
  const [posts, setPosts] = useState([]);
  
  const getPosts = async () => {
    let site = 'sample';
    if (config.deployment === 'dev') {
      site += 'Dev';
    }
    const postQuery = `/${site}/posts`;
    const postsFromDb = await getData(postQuery);
    if (postsFromDb) {
      setPosts(postsFromDb);
    }
  };

  useEffect(() => {
    getPosts()
  }, []);

  useEffect(() => {
    if (posts.length) {
      setPostsCards(posts.map((post) => (
        <PostCard {...post} />
      )));
    }
  }, [posts]);

  return (
    <>
      <PostsContainer title={{}} posts={postsCards} />
    </>
  );
}
