import React from 'react';

import './custom-icon-button.styles.scss';

interface IconButtonProps {
  iconClassName: string;
  onClick?: () => void;
}

export default function CustomIconButton({
  iconClassName,
  onClick,
}: IconButtonProps): React.ReactElement {
  return (
    <button className="iconButton" type="button" onClick={onClick}>
      <i className={iconClassName} />
    </button>
  );
}
