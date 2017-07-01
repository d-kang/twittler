import React from 'react';
import Clock from './Clock'
export default class Footer extends React.Component {
  render() {
    return (
      <div className='divisor'>
        <Clock date={this.props.date}/>

      </div>
    )
  }
}
