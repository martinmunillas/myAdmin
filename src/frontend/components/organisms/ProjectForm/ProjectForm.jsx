import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import DoubleCell from '../../molecules/DoubleCell/DoubleCell';
import Input from '../../molecules/Input/Input';

const ProjectForm = ({ eventHandlers, formValues }) => {
  const { handleSubmit, handleChange, handleArrayChange } = eventHandlers;

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
        <Input
          title='Images (URLs, comma separated)'
          name='images'
          onChange={handleArrayChange}
          type='textarea'
          value={formValues.images ? formValues.images.join(', ') : formValues.images}
        />
        <Input
          title='Repositories (URLs, comma separated)'
          name='repos'
          onChange={handleArrayChange}
          type='textarea'
          value={formValues.repos ? formValues.repos.join(', ') : formValues.images}
        />
        <Input title='Demo (URL)' name='demo' onChange={handleChange} value={formValues.demo} />
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
