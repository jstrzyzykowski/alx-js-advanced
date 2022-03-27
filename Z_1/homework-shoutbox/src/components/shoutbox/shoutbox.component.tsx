import React from 'react';

import MessageList from '../message-list/message-list.component';
import MessageForm from '../message-form/message-form.component';

import './shoutbox.styles.scss';

export default function Shoutbox(): React.ReactElement {
  return (
    <div className="shoutboxContainer">
      <div className="shoutboxContainer__header">
        <div className="shoutboxContainer__header-brandContainer">
          <i className="fa-solid fa-comment-dots" />
          <p className="shoutboxContainer__header-brandContainer-title">
            ShoutBox
          </p>
        </div>
      </div>
      <div className="shoutboxContainer__body">
        <MessageList />
        <MessageForm />
      </div>
      <div className="shoutboxContainer__footer">
        <p className="shoutboxContainer__footer-text">
          2022 &copy; ALX - Advanced JavaScript - jstrzyzykowski 🤖
        </p>
      </div>
    </div>
  );
}
