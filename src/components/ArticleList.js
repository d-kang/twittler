import React from 'react';


export default class ArticleList extends React.Component {

  render() {
    return (
      <div>
        {this.props.renderTweets(this.props.streams)}

      </div>
    );
  }
}
