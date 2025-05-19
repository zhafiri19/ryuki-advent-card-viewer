import "./CardItem.css";

export default function CardItem({ card }) {
  return (
    <div className="card card-flip">
      <div className="card-front">
        <img src={card.image} className="card-img-top" alt={card.name} />
      </div>
      <div className="card-back">
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">{card.description}</p>
        </div>
      </div>
    </div>
  );
}
