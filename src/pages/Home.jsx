import { Route, Routes } from "react-router-dom";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/navbar";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default Home;
