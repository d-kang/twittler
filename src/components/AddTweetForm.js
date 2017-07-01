import React from 'react'
import { addTweet } from '../data_generator';

export const AddTweetForm = props => {
  const addMessage = (e) => {
    e.preventDefault()
    var tweetObj = {
      "user": this.nameInput.value,
      "message": this.msgInput.value,
      "created_at": new Date()
    }
    addTweet(tweetObj)
  }

      return (
        <div>
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

}
// export default class AddTweetForm extends React.Component {
//
//   addMessage(e) {
//     e.preventDefault()
//     var tweetObj = {
//       "user": this.nameInput.value,
//       "message": this.msgInput.value,
//       "created_at": new Date()
//     }
//     addTweet(tweetObj)
//
//   }
//   render() {
//       return (
//         <div>
//           <form onSubmit={e => this.addMessage(e)}>
//             <input ref={(input) => this.nameInput = input}
//               type="text"
//               placeholder="name" required/>
//               <input ref={(input) => this.msgInput = input}
//                      type="text"
//                      placeholder="what's happening?" required/>
//                       <button>Add Tweet</button>
//           </form>
//
//         </div>
//     )
//   }
// }
