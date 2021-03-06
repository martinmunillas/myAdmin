import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import CheckBox from '../../atoms/CheckBox';
import DoubleCell from '../../molecules/DoubleCell/DoubleCell';
import Input from '../../molecules/Input/Input';

const ProjectForm = ({ eventHandlers, formValues }) => {
  const { handleSubmit, handleChange, handleArrayChange, handleCheckboxChange } = eventHandlers;

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <Box type='tertiary' direction='column' padding='none' align='se'>
        <DoubleCell
          first={<Input title='Name' name='name' onChange={handleChange} value={formValues.name} />}
          second={
            <Input
              title='Service'
              name='service'
              onChange={handleChange}
              value={formValues.service}
            />
          }
        />
        <Input
          title='Description'
          name='description'
          onChange={handleChange}
          type='textarea'
          value={formValues.description}
        />
        <Input
          title='Cover (URL)'
          name='mainImage'
          onChange={handleChange}
          value={formValues.mainImage}
        />
        <Input title='Video (URL)' name='video' onChange={handleChange} value={formValues.video} />
        <Input
          title='Images (URLs, comma separated)'
          name='images'
          onChange={handleArrayChange}
          type='textarea'
          value={formValues.images ? formValues.images.join(', ') : formValues.images}
        />
        <Input
          title='Repository (URL)'
          name='repo'
          onChange={handleChange}
          value={formValues.repo}
        />
        <Input title='Demo (URL)' name='demo' onChange={handleChange} value={formValues.demo} />
        <CheckBox
          title='Visible?'
          name='isVisible'
          inputType='checkbox'
          onChange={handleCheckboxChange}
          checked={formValues.isVisible}
          color='green'
        />
        <Button color='red' type='submit'>
          Create
        </Button>
      </Box>
    </form>
  );
};

ProjectForm.propTypes = {
  eventHandlers: PropTypes.shape({
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleArrayChange: PropTypes.func,
  }),
  formValues: PropTypes.object,
};

export default ProjectForm;
