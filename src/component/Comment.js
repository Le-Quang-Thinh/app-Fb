import React, { Component } from 'react';
import Post from './Post';
import PropTypes from "prop-types";
Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };
  
  class Comment extends Component {
    render() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">{this.props.user + " : "}</h2>
          <span className="commentContent">{this.props.content}</span>
        </div>
      );
    }
  }

  export default Comment;