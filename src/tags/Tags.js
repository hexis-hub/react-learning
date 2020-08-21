import React, { useState, useEffect, useRef, useCallback } from 'react';

import Tag from '../tag/Tag';

import { saveToServer } from '../utils/utils.js';
import tagsFromJson from '../utils/tags.json';

import './Tags.css';

const Tags = ({ save }) => {
  const [tags, setTags] = useState([]);
  const addInput = useRef();

  useEffect(() => {
    // should only fetch data when component is mounted
    setTags(tagsFromJson);
    addInput.current.focus();
  }, []);

  useEffect(() => {
    if (save) {
      saveToServer(tags);
    }
  }, [save, tags]);

  const handleRemoveTag = (item) => {
    setTags(tags.filter((el) => el !== item));
  };

  const handleKeyUp = useCallback(
    ({ target: { value }, keyCode }) => {
      if (keyCode === 13) {
        setTags([...tags, value]);
      }
    },
    [tags]
  );

  return (
    <div className='Container'>
      <div className='Input'>
        Add Tag <input ref={addInput} onKeyUp={handleKeyUp} />
      </div>
      <div className='Tags'>
        {tags.map((el, idx) => (
          <Tag item={el} key={`${el}-${idx}`} onTagRemove={handleRemoveTag} />
        ))}
      </div>
    </div>
  );
};

export default Tags;
