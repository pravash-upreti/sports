import React from 'react';

import { getOneRandomColor } from './colorHelper';

export const getParticipantLogoElement = (participant, customStyles = null) => {
  let participantLogoEl;

  if (participant.image) {
    participantLogoEl = <img className="participant-image" src={participant.image} alt={participant.name} />;
  } else if (participant.logo) {
    const styles = Object.assign(
      {
        color: participant.logo.color,
        backgroundColor: participant.logo.backgroundColor
      },
      customStyles
    );

    participantLogoEl = (
      <span className="participant-image" style={styles}>
        {participant.logo.text}
      </span>
    );
  } else {
    const styles = Object.assign(
      {
        backgroundColor: getOneRandomColor()
      },
      customStyles
    );

    participantLogoEl = (
      <span className="participant-image" style={styles}>
        {participant.name.substring(0, 1)}
      </span>
    );
  }

  return (
    <span key={`participant-image-${participant.name}`} className="participant-image-wrapper">
      {participantLogoEl}
    </span>
  );
};
