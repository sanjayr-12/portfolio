import axios from "axios";
import { useEffect, useState } from "react";
import "./blog.css";
import { OrbitProgress } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/post`
        );
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAll();
  }, []);

  const handleView = (post) => {
    navigate(`/blog/view/${post.slug}`, { state: post });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>My blog</h1>
      {loading ? (
        <div className="loading">
          <OrbitProgress variant="track-disc" color="white" size="medium" />
        </div>
      ) : (
        <div className="blog-container">
          {posts.length > 0 ? (
            posts.map((post) => {
              return (
                <div
                  className="blog-post"
                  key={post._id}
                  onClick={() => handleView(post)}
                >
                  <img src={post.imgUrl} alt={post.title} />
                  <p>{post.title}</p>
                </div>
              );
            })
          ) : (
            <h2>No posts available</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
