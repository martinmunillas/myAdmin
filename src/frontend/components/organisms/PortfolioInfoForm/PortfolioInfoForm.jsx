import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import DoubleCell from '../../molecules/DoubleCell/DoubleCell';
import Input from '../../molecules/Input/Input';

const PortfolioInfoForm = ({ eventHandlers, formValues }) => {
  const { handleSubmit, handleChange, handleArrayChange } = eventHandlers;

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <Box type='tertiary' direction='column' padding='none' align='se'>
        <Input
          title='Hero Text'
          name='heroText'
          type='textarea'
          onChange={handleChange}
          value={formValues.heroText}
        />
        <Input title='CV (URL)' name='cvUrl' onChange={handleChange} value={formValues.cvUrl} />
        <Input
          title='About Message'
          name='aboutMessage'
          type='textarea'
          onChange={handleChange}
          value={formValues.aboutMessage}
        />
        <Input
          title='About Image (URL)'
          name='aboutImage'
          onChange={handleChange}
          value={formValues.aboutImage}
        />
        <Input
          title='Contact Text (2, Comma separated)'
          name='contactText'
          onChange={handleArrayChange}
          value={
            formValues.contactText ? formValues.contactText.join(', ') : formValues.contactText
          }
        />
        <Input title='Email (URL)' name='email' onChange={handleChange} value={formValues.email} />
        <Input
          title='Github (URL)'
          name='github'
          onChange={handleChange}
          value={formValues.github}
        />
        <Button color='red' type='submit'>
          Create
        </Button>
      </Box>
    </form>
  );
};

PortfolioInfoForm.propTypes = {
  eventHandlers: PropTypes.shape({
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleArrayChange: PropTypes.func,
  }),
  formValues: PropTypes.object,
};

export default PortfolioInfoForm;
