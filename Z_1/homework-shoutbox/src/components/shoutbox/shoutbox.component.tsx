import React, { ReactElement } from 'react';

import MessageList from '../message-list/message-list.component';

import './shoutbox.styles.scss';

export default function Shoutbox(): ReactElement {
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
        <div className="shoutboxContainer__body-formContainer">
          <p>Form</p>
        </div>
      </div>
      <div className="shoutboxContainer__footer">
        <p className="shoutboxContainer__footer-text">
          2022 Copyright Made with ❤️
        </p>
      </div>
    </div>
  );
}
