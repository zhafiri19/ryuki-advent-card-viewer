import React, { useRef } from 'react';

function CardGallery({ cards }) {
  return (
    <div className="row justify-content-center">
      {cards.map((card, index) => (
        <CardItem key={index} card={card} />
      ))}
    </div>
  );
}

function CardItem({ card }) {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // mulai dari awal
      audioRef.current.play();
    }
  };

  return (
    <div className="col-md-3 mb-4">
      <div
        className="card summon-card text-center"
        onMouseEnter={handleMouseEnter}
      >
        <audio ref={audioRef} src="/audio/videoplayback.weba" preload="auto" />
        <img
          src={card.image}
          className="card-img-top"
          alt={card.name}
          style={{ animation: 'summonGlow 1s ease' }}
        />
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">{card.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardGallery;
