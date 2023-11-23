const CardImagem = ({ imageSrc, cardTitle }) => {
  return (
    <div className="card bg-white text-white" style={{ maxHeight: 240 + 'px' }}>
      <img src={imageSrc} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h3 className="card-title">{cardTitle}</h3>
      </div>
    </div>
  );
};

export default CardImagem;
