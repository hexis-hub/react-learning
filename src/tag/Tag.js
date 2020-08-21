import React, { useEffect } from 'react';

import IconCross from '../icons/IconCross.js';

import './Tag.css';


const Tag = ({ item, onTagRemove }) => {
  useEffect(() =>  {
    return () => console.log('This tag was removed', item);
  }, [item]);

  const handleClick = () => onTagRemove(item);

  return (
    <div className='TagContainer'>
      <div className='Tag'>{item}</div>
      <div className='Icon' onClick={handleClick}>
        <IconCross />
      </div>
    </div>
  );
}

export default Tag;