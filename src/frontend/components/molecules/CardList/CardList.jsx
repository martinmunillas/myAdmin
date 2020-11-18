import React from 'react';

const CardList = ({ card, list }) => {
    console.log(card)
  return (
    <ul>
      {list.map((item, i) => (
        <card {...item} key={item.id || item._id || i} />
      ))}
    </ul>
  );
};

export default CardList