import React from 'react';

const ArticleList = props => (
  <div>
    {props.renderTweets(props.streams)}
  </div>
);

export default ArticleList;
