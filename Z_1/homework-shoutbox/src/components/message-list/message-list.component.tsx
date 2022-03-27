import React, { useEffect, useRef } from 'react';

import {useSelector} from 'react-redux';
import {RootState} from '../../redux/root.reducer';

import MessageListItem from '../message-list-item/message-list-item.component';

import './message-list.styles.scss';

export default function MessageList() {
  const { messages } = useSelector((state: RootState) => state.message);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    // @ts-ignore
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messageListContainer">
      {messages.map(message => (
        <MessageListItem key={message.id} {...message}/>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
