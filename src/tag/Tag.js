import React from 'react';

import IconCross from '../icons/IconCross.js';

import './Tag.css';

export default class Tag extends React.Component {
  handleClick = () => this.props.onTagRemove(this.props.item);

  render() {
    return (
      <div className='TagContainer'>
        <div className='Tag'>{this.props.item}</div>
        <div className='Icon' onClick={this.handleClick}>
          <IconCross />
        </div>
      </div>
    );
  }
}
