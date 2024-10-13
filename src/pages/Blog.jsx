import axios from "axios";
import { useEffect, useState } from "react";
import "./blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/post");
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);
  return (
      <div>
          <h1 style={{"textAlign":"center", "marginTop":"50px"}}>My blog</h1>
      <div className="blog-container">
        {posts.map((post) => {
          return (
            <div className="blog-post" key={post._id}>
              <img src={post.imgUrl} alt={post.title} />
              <p>{post.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
