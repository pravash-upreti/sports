import React from 'react';
import PropTypes from 'prop-types';

const ScoreModal = ({ titleEl, bodyEl, routeProps }) => {
  const fixtureId = parseInt(routeProps.match.params.fixtureId, 10);

  if (!fixtureId || (!titleEl && !bodyEl)) {
    return null;
  }

  const titleElement = titleEl ? <div className="modal-row modal-title">{titleEl}</div> : null;

  const closeModal = e => {
    e.stopPropagation();
    routeProps.history.goBack();
  };

  const doNothing = e => {
    e.stopPropagation();
  };

  return (
    <div className="modal-wrapper" onClick={closeModal}>
      <div className="modal" onClick={doNothing}>
        <div className="modal-close" onClick={closeModal}>
          X
        </div>
        {titleElement}
        <div className="modal-body">{bodyEl}</div>
      </div>
    </div>
  );
};

ScoreModal.propTypes = {
  routeProps: PropTypes.object,
  bodyEl: PropTypes.element,
  titleEl: PropTypes.element
};

export default ScoreModal;
