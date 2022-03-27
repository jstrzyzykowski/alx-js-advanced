import React from 'react';

import './custom-button.styles.scss';

type ButtonTypes = 'button' | 'submit' | 'reset' | undefined;

interface CustomButtonProps {
  text: string;
  outline?: boolean;
  type: ButtonTypes;
  handler?: () => void;
}

export default function CustomButton({
  text,
  type,
  outline = true,
  handler,
}: CustomButtonProps): React.ReactElement {
  return (
    <button
      className={`customButton ${outline ? 'outline' : ''}`}
      type={type}
      onClick={handler}
    >
      {text}
    </button>
  );
}
