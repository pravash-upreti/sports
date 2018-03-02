import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import { Form, Modal, Button } from 'semantic-ui-react';

const AddEditTournamentModal = props => {
  const { open, action, toggle, tournament, handleClose, handleChange } = props;

  return (
    <Modal
      open={open}
      onClose={() => handleClose(toggle)}
      style={{ marginTop: '100px', marginLeft: '200px' }}
    >
      <Modal.Header>Tournament Form</Modal.Header>
      <Modal.Content>
        <Form onSubmit={action}>
          <Form.Field>
            <label>Tournament Name</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              defaultValue={tournament.title}
              placeholder="Enter Tournament Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Start Date</label>
            <InputMask
              name="startDate"
              mask="****/**/**"
              onChange={handleChange}
              defaultValue={tournament.startDate}
              placeholder="Start Date YYYY/MM/DD"
            />
          </Form.Field>
          <Form.Field>
            <label>Finish Date</label>
            <InputMask
              name="finishDate"
              mask="****/**/**"
              onChange={handleChange}
              defaultValue={tournament.finishDate}
              placeholder="Finish Date YYYY/MM/DD"
            />
          </Form.Field>
          <Button>Submit</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

AddEditTournamentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
  toggle: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  tournament: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default AddEditTournamentModal;
