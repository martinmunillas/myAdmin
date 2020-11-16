import React from 'react';

import Box from '../../atoms/Box';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title';

import './ProjectCard.scss';

const ProjectCard = ({ name, description, mainImage }) => {
  return (
    <div className='projectCard'>
      <Box type='primary' color='red' direction='row' rounded='l' padding='m' margin='none'>
        <img src={mainImage} alt={name} />

        <Box type='tertiary' align='se' padding='none' className='projectCard__content'>
          <Box type='tertiary' direction='column' align='ss' padding='none'>
            <Title>{name}</Title>
            <p>{description.length > 420 ? description.substring(0, 420) + '...' : description}</p>
          </Box>

          <Button color='black' className='projectCard__content--button'>
            See project ➡
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ProjectCard;
