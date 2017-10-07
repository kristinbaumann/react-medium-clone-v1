import React, { Component } from 'react';
import ArticleThumb from './ArticleThumb.js';

class Section extends Component {
  render() {
    return (
      <div className="section">
        <ul>
          <li>Top Stories</li>
          <li>Programming</li>
          <li>Design</li>
        </ul>
        <div className="section-articles">
          <ArticleThumb />
          <ArticleThumb />
          <ArticleThumb />
        </div>
      </div>
    );
  }
}

export default Section;
