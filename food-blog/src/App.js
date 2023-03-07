import "./scss/App.scss";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import { Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <>
<Routes>
      <Route exact path="/" element={<HomePage blogData={props.blogData} />} />
      <Route
        path={"blog/:id"} 
        element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
