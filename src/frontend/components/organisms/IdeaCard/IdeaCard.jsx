import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Box from '../../atoms/Box';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Input from '../../molecules/Input/Input';

import { updateIdea, deleteIdea } from '../../../redux/actions';

const IdeaCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [idea, setIdea] = useState(props.idea);

  useEffect(() => {
    setIdea([props.idea]);
  }, [props.idea]);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setIdea(e.target.value);
  };

  const handleSave = () => {
    props.updateIdea({ id: props._id, idea });
    toggleEdit();
  };

  const deleteIdea = () => {
    props.deleteIdea({ id: props._id });
  };

  return (
    <Box color='blue' padding='m' marginTop={30} rounded='m'>
      <Box direction='row' padding='none' type='tertiary' align='sc'>
        <Button onClick={toggleEdit} color='black'>
          Edit
        </Button>
        <Button onClick={deleteIdea} color='red'>
          Delete
        </Button>
      </Box>
      {isEditing ? (
        <>
          <Input type='textarea' value={idea} onChange={handleChange}></Input>
          <Button color='green' onClick={handleSave}>
            Save
          </Button>
        </>
      ) : (
        <Box padding='s' marginTop={20} rounded='m' align='cs'>
          <Text color='black'>{props.idea}</Text>
        </Box>
      )}
    </Box>
  );
};

const mapDispatch = {
  updateIdea,
  deleteIdea,
};

export default connect(null, mapDispatch)(IdeaCard);
