import React from 'react';

import {ToastContainer, ToastPosition} from 'react-toastify';

import './custom-toast-container.styles.scss';

interface CustomToastContainerProps {
  position?: ToastPosition;
  autoClose?: number;
}

export default function CustomToastContainer({ position = "bottom-left", autoClose = 3000 }: CustomToastContainerProps): React.ReactElement {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
  );
}