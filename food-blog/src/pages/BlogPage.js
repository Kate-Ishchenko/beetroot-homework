import { useParams } from "react-router-dom";
import {Footer, MainNav} from "../components/index";
import "./BlogPage.scss";
import data from "../data";
const BlogPage = (props) => {
    const { id } = useParams();
    const blog = data.find(item => {
        return item.id === parseInt(id);
    })
  return (
    <>
    <MainNav />
    <div className="blog-page__post-card">
    <img src={blog.postImg} alt="food" className="blog-page__post-img" />
    <h1 className="blog-page__post-title">{blog.postTitle}</h1>
    <div className="blog-page__subtitle">
    <h2 className="blog-page__category">{blog.postCategory}</h2>
    <span className="blog-page__post-date">{blog.postData}</span>
    </div>
    <p className="blog-page__post-description">{blog.postDescription}</p>
    <div className="blog-page__profile">
        <img src={blog.profileImg} alt="author" className="blog-page__profile-img" />
        <span className="blog-page__profile-name">{blog.profileName}</span>
    </div>
  </div>
  <Footer />
    </>

  )
}

export default BlogPage;