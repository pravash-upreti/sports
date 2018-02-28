import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function NewIcon(props) {
  const { name, color, handleOpen, tournament } = props;

  return (
    <Icon
      name={name}
      color={color}
      style={{ cursor: 'pointer' }}
      onClick={() => handleOpen(name, tournament)}
    />
  );
}
