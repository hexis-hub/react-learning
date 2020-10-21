import React from 'react';
import Tag from '../tag/Tag';
import './Tags.css';
import { saveToServer } from '../utils/utils.js';
import tagsFromJson  from '../utils/tags.json'

export default class Tags extends React.Component {

  state = { tags: []};
  addInput = React.createRef();

  async componentDidMount() {
    console.log('Mount Tags')
    
    this.setState({ tags: tagsFromJson });
  }

  componentDidUpdate(prevProps) {
     const { tags } = this.state;
     //console.log(prevProps.save)
     console.log('Update Tags')
     if (prevProps.save) {
       saveToServer(tags);
     }
   }

  handleRemoveTag = (index) => {
    const { tags } = this.state;
    tags.splice(index, 1);
    this.setState({ tags: tags });
    //this.setState({ tags: tags.filter((el) => el !== item) });
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
          Add Tag  <input ref={this.addInput} onKeyUp={this.handleKeyUp} />
        </div>
        <div className='Tags'>
          {tags.map((el, idx) => (
            <Tag
              item={el} 
              index={idx} 
              key={idx} 
              onTagRemove={this.handleRemoveTag}
            />
          ))}
        </div>
      </div>
    );
  }
}
