import React from 'react'
import { addTweet } from '../data_generator';
import moment from 'moment'
const AddTweetForm = props => {
  const addMessage = (e) => {
    e.preventDefault()
    var tweetObj = {
      "user": this.nameInput.value,
      "message": this.msgInput.value,
      "created_at": moment()
    }
    addTweet(tweetObj)
  }
      return (
        <div id="tweetForm">
          <form onSubmit={e => addMessage(e)}>
            <input ref={(input) => this.nameInput = input}
              type="text"
              placeholder="name" required/>
              <input ref={(input) => this.msgInput = input}
                     type="text"
                     placeholder="what's happening?" required/>
                      <button>Add Tweet</button>
          </form>

        </div>
    )
};

export default AddTweetForm;
