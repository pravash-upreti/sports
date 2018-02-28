import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

const DeleteTournamentModal = props => {
  const { action, modalOpen, handleClose } = props;

  return (
    <Modal
      onClose={handleClose}
      open={modalOpen.remove}
      style={{ marginTop: '100px', marginLeft: '200px' }}
    >
      <Modal.Header>Delete Tournament</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this tournament?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative content="No" onClick={() => handleClose('remove')} />
        <Button
          positive
          name="remove"
          content="Yes"
          icon="checkmark"
          onClick={action}
          labelPosition="right"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteTournamentModal;
