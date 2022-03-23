import React, { useEffect, useRef, useState } from 'react';

import MessageListItem from '../message-list-item/message-list-item.component';

import './message-list.styles.scss';

export default function MessageList() {
  const [messages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    // @ts-ignore
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="messageListContainer">
      {tmp.map((number) => (
        <MessageListItem key={number} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
