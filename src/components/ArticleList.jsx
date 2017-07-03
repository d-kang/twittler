import React from 'react';

const ArticleList = props => (
  <div className="allTweets">
    {props.renderTweets(props.streams)}
  </div>
);

export default ArticleList;
