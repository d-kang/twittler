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

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h2 className='clock'>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export default Clock;
