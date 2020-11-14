import React from 'react';

import Box from '../../atoms/Box';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title';

import './ProjectCard.scss';

const ProjectCard = ({ name, description, mainImage }) => {
  return (
    <div className='projectCard'>
      <Box type='primary' color='red' direction='row' rounded='l' padding='l'>
        <img src={mainImage} alt={name} />
        <div className='projectCard__content'>
          <Title>{name}</Title>

          <p>{description.length > 420 ? description.substring(0, 420) + '...' : description}</p>
          <Button color='black' className='projectCard__content--button'>
            See project ➡
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default ProjectCard;
