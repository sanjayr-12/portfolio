import { Route, Routes } from "react-router-dom";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/navbar";
import Blog from "./blog/Blog";
import Article from "./article/Article";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/view/:slug" element={<Article />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
