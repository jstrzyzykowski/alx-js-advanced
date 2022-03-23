import React from 'react';

import Avatar from '../../assets/images/avatar.jpg';

import './message-list-item.styles.scss';

export default function MessageListItem() {
  return (
    <div className="messageContainer">
      <div className="messageContainer__header">
        <div className="messageContainer__header-avatarContainer">
          <img src={Avatar} alt="John Doe avatar" />
        </div>
        <p className="messageContainer__header-date">[21/01 15:35]</p>
        <p className="messageContainer__header-author">JohnDoe:</p>
      </div>
      <p className="messageContainer__message">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        maiores ullam voluptatum!
      </p>
    </div>
  );
}
