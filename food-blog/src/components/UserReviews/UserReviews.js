import { useEffect, useState } from "react";
import "./UserReviews.scss";
import {
  table576,
  table768,
  table1024,
  table1360,
  table1920,
} from "../../assets/index";
import LocalStorageService from "../../utils/LocalStorageService";

const KEY = "reviews";

const UserReviews = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const onReviewAdd = (event) => {
    event.preventDefault();
    if (editIndex === null) {
      setList((prev) => {
        const newList = [...prev, { name, text }];
        LocalStorageService.setItem(KEY, JSON.stringify(newList))
        return newList;
      });
    } else {
      setList((prev) => {
        const newList = [...prev];
        newList[editIndex] = { name, text };
        LocalStorageService.setItem(KEY, JSON.stringify(newList))
        return newList;
      });
    }
    setName("");
    setText("");
    setEditIndex(null);
  };

  const onNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const onTextChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const editComment = (id) => () => {
    setName(list[id].name);
    setText(list[id].text);
    setEditIndex(id);
  };

  const deleteComment = (id) => () => {
    const newList = [...list];
    newList.splice(id, 1);
    setList(newList);
    LocalStorageService.setItem(KEY, JSON.stringify(newList))
  };

  const onDeleteAll = () => {
    setList([]);
  };

  useEffect(() => {
    const result = LocalStorageService.getItem(KEY);
    if(result) {
      setList(JSON.parse(result))
    }
  }, [])

  return (
    <section className="users__reviews" id="users_reviews">
      <h3 className="users__reviews-title">Give us your feedback!</h3>
      <div className="img-holder">
        <img src={table1920} alt="person" className="img-desktop1920" />
        <img src={table1360} alt="person" className="img-desktop1360" />
        <img src={table1024} alt="person" className="img-desktop1024" />
        <img src={table768} alt="person" className="img-tablet768" />
        <img src={table576} alt="person" className="img-mobile576" />
      </div>
      <div className="comments-wrapper">
        <form className="comments-form">
          <p className="alert"></p>
          <div className="form-control">
            <input
              type="text"
              id="name"
              placeholder="enter your name"
              className="users__reviews-username"
              onChange={onNameChange}
              value={name}
            />
            <textarea
              type="text"
              id="comment"
              placeholder="write a comment!"
              className="users__reviews-textarea"
              onChange={onTextChange}
              value={text}
            ></textarea>
            <button className="submit-btn" onClick={onReviewAdd}>
              {editIndex === null ? "Submit" : "Edit"}
            </button>
          </div>
        </form>
        <div className="comments-container">
          <div className="comments-list">
            {list.map((comment, i) => {
              return (
                <article className="comments-item" key={i}>
                  <p className="users__reviews-comments-item__username">
                    {comment.name}
                  </p>
                  <p className="users__reviews-comments-item__text">
                    {comment.text}
                  </p>
                  <div className="btn-container">
                    <button
                      type="button"
                      className="edit-btn"
                      onClick={editComment(i)}
                    >
                      <i className="bx bxs-edit"></i>
                    </button>
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={deleteComment(i)}
                    >
                      <i className="bx bx-message-square-x"></i>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {list.length ? (
          <button type="button" className="clear-btn" onClick={onDeleteAll}>
            clear comments
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default UserReviews;
