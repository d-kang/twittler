import React from 'react';

export const ArticleList = props =>
  <div>
    {props.renderTweets(props.streams)}
  </div>
