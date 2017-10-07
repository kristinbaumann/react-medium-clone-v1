import React, { Component } from 'react';
import image from '../img/articleThumbExample.png';

class ArticleThumb extends Component {
  render() {
    return (
      <div className="articleThumb">
        <img src={image} alt="article" />
        <div>
          <h2>Article Headline</h2>
          <h3>By Author Name</h3>
        </div>
      </div>
    );
  }
}

export default ArticleThumb;



