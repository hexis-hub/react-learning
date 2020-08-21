import React from 'react';

import Tag from '../tag/Tag';

import { saveToServer } from '../utils/utils.js';
import tagsFromJson from '../utils/tags.json';

import './Tags.css';

export default class Tags extends React.Component {
  state = {
    tags: [],
  };

  addInput = React.createRef();

  componentDidMount() {
    this.setState({ tags: tagsFromJson });
    this.addInput.current.focus();
  }

  componentDidUpdate(prevProps) {
    const { tags } = this.state;

    if (prevProps.save) {
      saveToServer(tags);
    }
  }

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
          Add Tag <input ref={this.addInput} onKeyUp={this.handleKeyUp} />
        </div>
        <div className='Tags'>
          {tags.map((el, idx) => (
            <Tag
              item={el}
              key={`${el}-${idx}`}
              onTagRemove={this.handleRemoveTag}
            />
          ))}
        </div>
      </div>
    );
  }
}
