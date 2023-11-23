import CardPerfil from '../cardPerfil/CardPerfil';

function CardGrid() {
  return (
    <div>
      <div className="row">
        <div className="col-sm">
          <CardPerfil />
        </div>
        <div className="col-sm">
          <CardPerfil />
        </div>
        <div className="col-sm">
          <CardPerfil />
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
