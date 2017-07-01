import React from 'react';
import { Clock } from './Clock'

export const Footer = props =>
    <div className='divisor'>
      <Clock date={props.date}/>
    </div>
