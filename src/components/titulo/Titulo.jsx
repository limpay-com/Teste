import React from 'react';

const Titulo = ({ content }) => {
  return (
    <div className="title">
      <h2 className="fs-1 text-xl-start mt-4">{content}</h2>
    </div>
  );
};

export default Titulo;
