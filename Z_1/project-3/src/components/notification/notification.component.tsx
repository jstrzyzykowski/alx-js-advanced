import React from 'react';

import './notification.styles.scss';

type MessageTypes = 'error' | 'success';

interface NotificationProps {
  type: MessageTypes,
  message: string,
}

export default function Notification({ type, message }: NotificationProps) {
  return (
    <div className={`notificationContainer ${type === 'error' ? 'error' : ''}`}>
      <p className="notificationContainer__text">{message}</p>
    </div>
  );
}
