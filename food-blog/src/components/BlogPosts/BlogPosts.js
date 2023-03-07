import { useState } from "react";
import BlogArticle from "../BlogArticle/BlogArticle";
import "./BlogPosts.scss";

const BlogPosts = (props) => {
  const [items, setItems] = useState(props.blogData);
  const [category, setCategory] = useState("all");

  const filterItems = (category) => {
      const updateItems = props.blogData.filter(item => {
        return item.postItemCategory === category;
      });
      setItems(updateItems);
      setCategory(category);
  }

  const blogPosts = items.map(item => {
    return ( <BlogArticle key={item.id} item={item} />
    )
  });
  return (
    <section className="food-blog" id="our-blog">
    <h2 className="food-blog__title">Our blog</h2>
    <ul className="food-blog__post-filter">
      <li
        className={`food-blog__filter-item ${category === "all" ? "food-blog__active-filter" : ""}`}
        data-filter="all" onClick={() => {setCategory("all"); setItems(props.blogData)}}
      >
        All posts
      </li>
      <li className={`food-blog__filter-item ${category === "breakfast" ? "food-blog__active-filter" : ""}`} data-filter="breakfast" onClick={() => filterItems("breakfast")}>
        Breakfast
      </li>
      <li className={`food-blog__filter-item ${category === "lunch" ? "food-blog__active-filter" : ""}`} data-filter="lunch" onClick={() => filterItems("lunch")}>Lunch</li>
      <li className={`food-blog__filter-item ${category === "desert" ? "food-blog__active-filter" : ""}`} data-filter="desert" onClick={() => filterItems("desert")}>Dessert</li>
    </ul>

    <div className="food-blog__post-list container" id="posts-list">
      {blogPosts}
    </div>
  </section>
  )
}

export default BlogPosts