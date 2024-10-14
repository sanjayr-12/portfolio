import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./article.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { OrbitProgress } from "react-loading-indicators";

const Article = () => {
  const location = useLocation();
  const { slug } = useParams();
  const [article, setArticle] = useState(location.state?.post || null);
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!article) {
      async function fetchPost() {
        try {
          const response = await axios.get(
            "http://localhost:8080/api/post/" + slug
          );
          setArticle(response.data[0]);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="article-container">
      {!article ? (
        <div className="loading">
          <OrbitProgress variant="track-disc" color="white" size="medium" />
        </div>
      ) : (
        <div>
          <img src={article.imgUrl} alt="img" className="article-thumbnail" />
          <h2 className="article-title">{article.title}</h2>
          <div className="article-content">
            <ReactMarkdown
              components={{
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={materialDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
