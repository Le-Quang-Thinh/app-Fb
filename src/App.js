
import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentBox from "./component/CommentBox";
const data = {
  post: {
    id: 123,
    content:
      "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
    user: "Mark Thomas"
  },
  comments: [
    {
      id: 0,
      user: "David",
      content: "such. win."
    },
    {
      id: 1,
      user: "Haley",
      content: "Love it."
    },
    {
      id: 2,
      user: "Peter",
      content: "Who was Samuel Johnson?"
    },
    {
      id: 3,
      user: "Mitchell",
      content: "@Peter get off Letters and do your homework"
    },
    {
      id: 4,
      user: "Peter",
      content: "@mitchell ok :P"
    }
  ]
};

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

function App() {
  return (
    <CommentBox comments={data.comments} post={data.post} />
  );
}
export default App;