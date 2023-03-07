import { Link } from "react-router-dom";
import "../BlogPosts/BlogPosts.scss";

const BlogArticle = (props) => {

  return (
    <Link to={`blog/${props.item.id}`} className="food-blog__post-card-link">
    <div className="food-blog__post-card">
    <img src={props.item.postImg} alt="food" className="food-blog__post-img" />
    <h2 className="food-blog__category">{props.item.postCategory}</h2>
    <span className="food-blog__post-title">{props.item.postTitle}</span>
    <span className="food-blog__post-date">{props.item.postData}</span>
    <p className="food-blog__post-description">{props.item.postDescription}</p>
    <div className="food-blog__profile">
        <img src={props.item.profileImg} alt="author" className="food-blog__profile-img" />
        <span className="food-blog__profile-name">{props.item.profileName}</span>
    </div>
  </div>
  </Link>
  )
}

export default BlogArticle;