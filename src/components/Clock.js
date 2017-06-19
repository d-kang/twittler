import React from 'react';

// export function Clock(props) {
//   return (
//     <div>
//       <h2 className='clock'>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date ={new Date()} />,
//     document.getElementById('main')
//   );
// }

// setInterval(tick, 1000);
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}


class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
         <h1>Hello, world!</h1>
         <FormattedDate date={this.state.date} />
         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
       </div>
    );
  }
}


export default Clock;
