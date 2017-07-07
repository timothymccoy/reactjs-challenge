import React from 'react';
import './Avitar.css';

const Avitar = (props) => {
  let source = props.source;

  return (
    <div className="AvitarContainer">
        <img className="Avitar" src={source} />
    </div>
  );
};

export default Avitar;