import React from 'react';

import './error-notification.styles.scss';

interface ErrorNotificationProps {
  errorMessage: string;
}

export default function ErrorNotification({
  errorMessage,
}: ErrorNotificationProps): React.ReactElement {
  return (
    <div className="errorNotificationContainer">
      <i className="fa-solid fa-triangle-exclamation" />
      <p className="errorNotificationContainer__text">{errorMessage}</p>
    </div>
  );
}
