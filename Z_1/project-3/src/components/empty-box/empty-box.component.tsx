import React from 'react';

import './empty-box.styles.scss';

export default function EmptyBox() {
  return (
    <div className="emptyBoxContainer">
      <i className="fa-solid fa-heart-crack"/>
      <p className="emptyBoxContainer__text">Please do something mate!</p>
    </div>
  );
}
