import React from 'react';
import Tag from '../tag/Tag';
import './Tags.css';

export default class Tags extends React.Component {
  state = {
    tags: [],
  };

  handleRemoveTag = (item) => {
    const { tags } = this.state;

    this.setState({ tags: tags.filter((el) => el !== item) });
  };

  handleKeyUp = ({ target: { value }, keyCode }) => {
    const { tags } = this.state;

    if (keyCode === 13) {
      this.setState({ tags: [...tags, value] });
    }
  };

  render() {
    const { tags } = this.state;

    return (
      <div className='Container'>
        <div className='Input'>
          Add Tag <input onKeyUp={this.handleKeyUp} />
        </div>
        <div className='Tags'>
          {tags.map((el, idx) => (
            <Tag
              item={el}
              onTagRemove={this.handleRemoveTag}
            />
          ))}
        </div>
      </div>
    );
  }
}
