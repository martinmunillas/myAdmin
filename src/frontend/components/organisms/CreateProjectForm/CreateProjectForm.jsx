import React from 'react';

import Box from '../../atoms/Box';
import DoubleCell from '../../molecules/DoubleCell/DoubleCell';
import Input from '../../molecules/Input/Input';

const CreateProjectForm = (props) => {
  const handleChange = (e) => {};

  const handleArrayChange = (e) => {};
  return (
    <form style={{ width: '100%' }}>
      <Box type='tertiary' direction='column' padding='none' align='ss'>
        <DoubleCell
          first={<Input title='Name' name='name' onChange={handleChange} />}
          second={<Input title='Service' name='service' onChange={handleChange} />}
        />
        <Input title='Description' name='description' onChange={handleChange} type='textarea' />
        <Input title='Cover (URL)' name='mainImage' onChange={handleChange} />
        <Input
          title='Images (URLs, comma separated)'
          name='images'
          onChange={handleArrayChange}
          type='textarea'
        />
        <Input
          title='Repositories (URLs, comma separated)'
          name='name'
          onChange={handleArrayChange}
          type='textarea'
        />
        <Input title='Demo (URL)' name='demo' onChange={handleChange} />
      </Box>
    </form>
  );
};

export default CreateProjectForm;
