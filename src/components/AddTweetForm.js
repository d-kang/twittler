import React from 'react'

class AddTweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: [0]
    };
    //this.addMessage = this.addMessage.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    const { _name, _message } = this.refs
    e.preventDefault();

    //this.refs.focus();
    this.setState(
      {message: (
        <div>
          <li>  @
            <span className="username" user={_name.value}>
              {_name.value}
            </span>: {_message} {(new Date()).toLocaleTimeString()}
          </li>
        </div>

      )}
    )
    console.log('hi', _name.value, _message.value)
    console.log('this.props.children', this.state);
  }
  render() {
      return (
        <div>
          <form onSubmit={this.submit}>
            <input ref="_name"
              type="text"
              placeholder="name" required/>
              <input ref="_message"
                     type="text"
                     placeholder="what's happening?" required/>
              <button>Add Tweet</button>
          </form>
          <p>{this.props.children}</p>

        </div>

      )
  }
}

export default AddTweetForm;
