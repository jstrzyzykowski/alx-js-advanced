import React from 'react';

import moment from 'moment';

import { Message } from '../../redux/message/message.actions';

import Avatar from '../../assets/images/avatar.jpg';

import './message-list-item.styles.scss';

export default function MessageListItem({author, createdAt, text}: Message): React.ReactElement {

  return (
    <div className="messageContainer">
      <div className="messageContainer__header">
        <div className="messageContainer__header-avatarContainer">
          <img src={Avatar} alt={`${author} avatar`} />
        </div>
        <p className="messageContainer__header-date">[{moment(createdAt).format('MM/D HH:mm:ss')}]</p>
        <p className="messageContainer__header-author">{author}:</p>
      </div>
      <p className="messageContainer__message">
        {text}
      </p>
    </div>
  );
}
